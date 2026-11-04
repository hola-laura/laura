(() => {
  const stage=document.querySelector(".puppet-stage");
  const mount=document.querySelector("#puppet-mount");
  if(!stage||!mount)return;
  fetch(new URL("assets/puppet/laura-marionette-stage-v6.svg",document.baseURI))
    .then((response)=>{if(!response.ok)throw new Error("Puppet artwork unavailable");return response.text()})
    .then((markup)=>{
      mount.innerHTML=markup;
      const svg=mount.querySelector("svg");
      const specs={
        "puppet-neck":{pivot:[340,350],worldPivot:[340,750],max:20,parent:null},
        "puppet-head":{pivot:[340,302],worldPivot:[340,702],anchor:[340,104],start:[340,0],string:mount.querySelector("#puppet-string-head"),ring:mount.querySelector("#puppet-anchor-head"),max:26,parent:"puppet-neck"},
        "puppet-upper-arm-left":{pivot:[262,388],worldPivot:[262,788],max:360,parent:null},
        "puppet-upper-arm-right":{pivot:[418,388],worldPivot:[418,788],max:58,parent:null},
        "puppet-arm-left":{pivot:[160,394],worldPivot:[160,794],anchor:[62,378],start:[150,0],string:mount.querySelector("#puppet-string-left"),ring:mount.querySelector("#puppet-anchor-left"),max:360,parent:"puppet-upper-arm-left"},
        "puppet-arm-right":{pivot:[520,383],worldPivot:[520,783],anchor:[617,356],start:[530,0],string:mount.querySelector("#puppet-string-right"),ring:mount.querySelector("#puppet-anchor-right"),max:360,parent:"puppet-upper-arm-right"},
        "puppet-upper-leg-left":{pivot:[300,573],worldPivot:[300,973],max:360,parent:null},
        "puppet-upper-leg-right":{pivot:[380,573],worldPivot:[380,973],max:42,parent:null},
        "puppet-leg-left":{pivot:[300,695],worldPivot:[300,1095],max:360,parent:"puppet-upper-leg-left"},
        "puppet-leg-right":{pivot:[380,695],worldPivot:[380,1095],max:360,parent:"puppet-upper-leg-right"}
      };
      Object.keys(specs).forEach((id)=>{
        const spec=specs[id];
        spec.element=mount.querySelector("#"+id);
        spec.angle=0;
        spec.baseD=spec.string&&spec.string.getAttribute("d");
        if(spec.ring)spec.baseRing={cx:spec.ring.getAttribute("cx"),cy:spec.ring.getAttribute("cy")};
      });
      const chains={
        "puppet-head":{upper:specs["puppet-neck"],lower:specs["puppet-head"],root:[340,350],joint:[340,302],tip:[340,205]},
        "puppet-arm-left":{upper:specs["puppet-upper-arm-left"],lower:specs["puppet-arm-left"],root:[262,388],joint:[160,394],tip:[60,400]},
        "puppet-arm-right":{upper:specs["puppet-upper-arm-right"],lower:specs["puppet-arm-right"],root:[418,388],joint:[520,383],tip:[620,379]},
        "puppet-leg-left":{upper:specs["puppet-upper-leg-left"],lower:specs["puppet-leg-left"],root:[300,573],joint:[300,695],tip:[300,840]},
        "puppet-leg-right":{upper:specs["puppet-upper-leg-right"],lower:specs["puppet-leg-right"],root:[380,573],joint:[380,695],tip:[380,840]}
      };
      Object.values(chains).forEach((chain)=>{
        const dx=chain.joint[0]-chain.root[0],dy=chain.joint[1]-chain.root[1];
        const lx=chain.tip[0]-chain.joint[0],ly=chain.tip[1]-chain.joint[1];
        chain.length1=Math.hypot(dx,dy);chain.length2=Math.hypot(lx,ly);
        chain.restUpper=Math.atan2(dy,dx)*180/Math.PI;
        chain.restLower=(Math.atan2(ly,lx)*180/Math.PI)-chain.restUpper;
      });
      const point=(event)=>{
        const p=svg.createSVGPoint();p.x=event.clientX;p.y=event.clientY;
        return p.matrixTransform(svg.getScreenCTM().inverse());
      };
      const angleAt=(p,pivot)=>Math.atan2(p.y-pivot[1],p.x-pivot[0])*180/Math.PI;
      const normalize=(n)=>((n+540)%360)-180;
      const rotate=(p,pivot,degrees)=>{
        const rad=degrees*Math.PI/180,dx=p[0]-pivot[0],dy=p[1]-pivot[1];
        return [pivot[0]+dx*Math.cos(rad)-dy*Math.sin(rad),pivot[1]+dx*Math.sin(rad)+dy*Math.cos(rad)];
      };
      const pointThroughParents=(point,spec)=>{
        let out=point,parent=spec.parent?specs[spec.parent]:null;
        while(parent){out=rotate(out,parent.pivot,parent.angle||0);parent=parent.parent?specs[parent.parent]:null;}
        return out;
      };
      const refreshStrings=()=>{
        Object.keys(specs).forEach((id)=>{
          const spec=specs[id];
          if(!spec.string||!spec.anchor)return;
          let end=rotate(spec.anchor,spec.pivot,spec.angle||0);
          end=pointThroughParents(end,spec);
          const worldEnd=[end[0],end[1]+400];
          spec.string.setAttribute("d","M "+spec.start[0]+" "+spec.start[1]+" L "+worldEnd[0].toFixed(2)+" "+worldEnd[1].toFixed(2));
          if(spec.ring){spec.ring.setAttribute("cx",end[0].toFixed(2));spec.ring.setAttribute("cy",end[1].toFixed(2));}
        });
      };
      const setAngle=(spec,degrees)=>{
        spec.angle=Math.max(-spec.max,Math.min(spec.max,degrees));
        if(spec.element)spec.element.setAttribute("transform","rotate("+spec.angle+" "+spec.pivot[0]+" "+spec.pivot[1]+")");
        refreshStrings();
        return spec.angle;
      };
      const solveChain=(chain,target)=>{
        const root=[chain.root[0],chain.root[1]+400];
        let dx=target[0]-root[0],dy=target[1]-root[1],distance=Math.hypot(dx,dy);
        const min=Math.abs(chain.length1-chain.length2)+2,max=chain.length1+chain.length2-2;
        distance=Math.max(min,Math.min(max,distance));
        const direction=Math.atan2(dy,dx);
        const cosAlpha=Math.max(-1,Math.min(1,(chain.length1*chain.length1+distance*distance-chain.length2*chain.length2)/(2*chain.length1*distance)));
        const alpha=Math.acos(cosAlpha),candidates=[direction-alpha,direction+alpha];
        const currentUpper=chain.upper.angle||0,currentLower=chain.lower.angle||0;
        const reference=chain.restUpper+currentUpper;
        const firstDegrees=candidates.map((candidate)=>candidate*180/Math.PI).reduce((best,candidate)=>Math.abs(normalize(candidate-reference))<Math.abs(normalize(best-reference))?candidate:best);
        const first=firstDegrees*Math.PI/180;
        const joint=[root[0]+chain.length1*Math.cos(first),root[1]+chain.length1*Math.sin(first)];
        const second=Math.atan2(target[1]-joint[1],target[0]-joint[0]);
        const desiredUpper=firstDegrees-chain.restUpper;
        const desiredLower=(second-first)*180/Math.PI-chain.restLower;
        setAngle(chain.upper,currentUpper+normalize(desiredUpper-currentUpper));
        setAngle(chain.lower,currentLower+normalize(desiredLower-currentLower));
      };
      const currentTip=(chain)=>{
        const lower=chain.lower;
        const transformed=pointThroughParents(rotate(chain.tip,lower.pivot,lower.angle||0),lower);
        return [transformed[0],transformed[1]+400];
      };
      const restore=(spec)=>{
        spec.angle=0;
        if(spec.element)spec.element.removeAttribute("transform");
        refreshStrings();
      };
      const springHome=(spec,from)=>{
        const started=performance.now(),duration=680;
        const frame=(now)=>{
          const t=Math.min(1,(now-started)/duration);
          const eased=Math.exp(-6*t)*Math.cos(8*t);
          setAngle(spec,from*eased);
          if(t<1)requestAnimationFrame(frame);else restore(spec);
        };
        requestAnimationFrame(frame);
      };
      let active=null,moveFrame=0;
      const currentPivot=(spec)=>pointThroughParents(spec.pivot,spec).map((n,i)=>i===1?n+400:n);
      const springChainHome=(chain,upperFrom,lowerFrom)=>{
        const started=performance.now(),duration=820;
        const frame=(now)=>{
          const t=Math.min(1,(now-started)/duration),damped=Math.exp(-6*t)*Math.cos(8*t);
          setAngle(chain.upper,upperFrom*damped);setAngle(chain.lower,lowerFrom*damped);
          if(t<1)requestAnimationFrame(frame);else{restore(chain.upper);restore(chain.lower);}
        };
        requestAnimationFrame(frame);
      };
      const release=()=>{
        if(!active)return;
        const part=active;
        if(moveFrame){cancelAnimationFrame(moveFrame);moveFrame=0;}
        if(part.chain)solveChain(part.chain,[part.desired[0]+part.tipOffset[0],part.desired[1]+part.tipOffset[1]]);
        else if(part.desiredAngle!==undefined)setAngle(part.spec,part.desiredAngle);
        active=null;stage.classList.remove("is-dragging");
        if(part.chain)springChainHome(part.chain,part.chain.upper.angle||0,part.chain.lower.angle||0);
        else springHome(part.spec,part.spec.angle||0);
        try{stage.releasePointerCapture(part.pointerId)}catch(_){}
      };
      const moveSmoothly=()=>{
        if(!active){moveFrame=0;return;}
        const p=active.smoothed,target=active.desired;
        p[0]+=(target[0]-p[0])*0.24;p[1]+=(target[1]-p[1])*0.24;
        if(active.chain)solveChain(active.chain,[p[0]+active.tipOffset[0],p[1]+active.tipOffset[1]]);
        else{
          active.visualAngle+=(active.desiredAngle-active.visualAngle)*0.24;
          setAngle(active.spec,active.visualAngle);
        }
        if(Math.hypot(target[0]-p[0],target[1]-p[1])>0.35)moveFrame=requestAnimationFrame(moveSmoothly);
        else moveFrame=0;
      };
      stage.addEventListener("pointerdown",(event)=>{
        const hit=event.target.closest("[data-puppet-part],.puppet-grab");
        if(!hit)return;
        const id=hit.getAttribute("data-puppet-part")||hit.id,spec=specs[id];
        if(!spec)return;
        event.preventDefault();
        const start=point(event),chain=chains[id]||null;
        if(chain){
          const tip=currentTip(chain);
          active={spec:spec,chain:chain,pointerId:event.pointerId,smoothed:[start.x,start.y],desired:[start.x,start.y],tipOffset:[tip[0]-start.x,tip[1]-start.y]};
        }else{
          const pivot=currentPivot(spec);
          const pointerAngle=angleAt(start,pivot),startValue=spec.angle||0;
          active={spec:spec,pointerId:event.pointerId,smoothed:[start.x,start.y],desired:[start.x,start.y],pivot:pivot,lastPointerAngle:pointerAngle,desiredAngle:startValue,visualAngle:startValue};
        }
        stage.classList.add("is-dragging");
        try{stage.setPointerCapture(event.pointerId)}catch(_){}
      });
      stage.addEventListener("pointermove",(event)=>{
        if(!active||event.pointerId!==active.pointerId)return;
        const p=point(event);active.desired=[p.x,p.y];
        if(!active.chain){
          const pointerAngle=angleAt(p,active.pivot);
          active.desiredAngle+=normalize(pointerAngle-active.lastPointerAngle);
          active.lastPointerAngle=pointerAngle;
        }
        if(!moveFrame)moveFrame=requestAnimationFrame(moveSmoothly);
      });
      stage.addEventListener("pointerup",release);
      stage.addEventListener("pointercancel",release);
      stage.addEventListener("lostpointercapture",release);
      mount.querySelectorAll(".puppet-grab").forEach((element)=>{
        element.addEventListener("keydown",(event)=>{
          const spec=specs[element.id];if(!spec)return;
          const chain=chains[element.id];
          if(event.key==="Enter"||event.key===" "){
            event.preventDefault();
            if(chain){
              const target=currentTip(chain);target[0]+=16;
              solveChain(chain,target);springChainHome(chain,chain.upper.angle||0,chain.lower.angle||0);
              event.stopPropagation();return;
            }
            const angle=setAngle(spec,spec.max>50?22:spec.max>35?18:12);
            springHome(spec,angle);return;
          }
          if(event.key==="ArrowLeft"||event.key==="ArrowRight"){
            event.preventDefault();
            if(chain){
              const target=currentTip(chain);target[0]+=(event.key==="ArrowLeft"?-12:12);
              solveChain(chain,target);event.stopPropagation();return;
            }
            setAngle(spec,event.key==="ArrowLeft"?-14:14);
          }
        });
        element.addEventListener("keyup",(event)=>{
          if(event.key.indexOf("Arrow")!==0)return;
          const chain=chains[element.id],spec=specs[element.id];
          if(chain){springChainHome(chain,chain.upper.angle||0,chain.lower.angle||0);event.stopPropagation();}
          else if(spec)springHome(spec,spec.angle||0);
        });
      });
    })
    .catch(()=>{mount.innerHTML='<p class="puppet-sr-only">'+t('The marionette is backstage for a moment.')+'</p>'});
})();
