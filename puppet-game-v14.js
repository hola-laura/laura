(() => {
  const stage=document.querySelector(".puppet-stage");
  const mount=document.querySelector("#puppet-mount");
  if(!stage||!mount)return;
  fetch(new URL("assets/puppet/laura-marionette-stage-v4.svg",document.baseURI))
    .then((response)=>{if(!response.ok)throw new Error("Puppet artwork unavailable");return response.text()})
    .then((markup)=>{
      mount.innerHTML=markup;
      const svg=mount.querySelector("svg");
      const specs={
        "puppet-head":{pivot:[340,350],worldPivot:[340,750],anchor:[340,104],start:[340,0],string:mount.querySelector("#puppet-string-head"),ring:mount.querySelector("#puppet-anchor-head"),max:24},
        "puppet-upper-arm-left":{pivot:[262,388],worldPivot:[262,788],max:46,parent:null},
        "puppet-upper-arm-right":{pivot:[418,386],worldPivot:[418,786],max:46,parent:null},
        "puppet-arm-left":{pivot:[160,394],worldPivot:[160,794],anchor:[62,378],start:[150,0],string:mount.querySelector("#puppet-string-left"),ring:mount.querySelector("#puppet-anchor-left"),max:68,parent:"puppet-upper-arm-left"},
        "puppet-arm-right":{pivot:[520,383],worldPivot:[520,783],anchor:[617,356],start:[530,0],string:mount.querySelector("#puppet-string-right"),ring:mount.querySelector("#puppet-anchor-right"),max:68,parent:"puppet-upper-arm-right"},
        "puppet-upper-leg-left":{pivot:[300,573],worldPivot:[300,973],max:32,parent:null},
        "puppet-upper-leg-right":{pivot:[380,573],worldPivot:[380,973],max:32,parent:null},
        "puppet-leg-left":{pivot:[300,695],worldPivot:[300,1095],max:44,parent:"puppet-upper-leg-left"},
        "puppet-leg-right":{pivot:[380,695],worldPivot:[380,1095],max:44,parent:"puppet-upper-leg-right"}
      };
      Object.keys(specs).forEach((id)=>{
        const spec=specs[id];
        spec.element=mount.querySelector("#"+id);
        spec.angle=0;
        spec.baseD=spec.string&&spec.string.getAttribute("d");
        if(spec.ring)spec.baseRing={cx:spec.ring.getAttribute("cx"),cy:spec.ring.getAttribute("cy")};
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
      let active=null;
      const currentPivot=(spec)=>pointThroughParents(spec.pivot,spec).map((n,i)=>i===1?n+400:n);
      const release=()=>{
        if(!active)return;
        const part=active;active=null;stage.classList.remove("is-dragging");
        springHome(part.spec,part.spec.angle);
        try{stage.releasePointerCapture(part.pointerId)}catch(_){}
      };
      stage.addEventListener("pointerdown",(event)=>{
        const hit=event.target.closest("[data-puppet-part],.puppet-grab");
        if(!hit)return;
        const id=hit.getAttribute("data-puppet-part")||hit.id,spec=specs[id];
        if(!spec)return;
        event.preventDefault();
        const pivot=currentPivot(spec);
        active={spec:spec,pointerId:event.pointerId,startAngle:angleAt(point(event),pivot),startValue:spec.angle||0};
        stage.classList.add("is-dragging");
        try{stage.setPointerCapture(event.pointerId)}catch(_){}
      });
      stage.addEventListener("pointermove",(event)=>{
        if(!active||event.pointerId!==active.pointerId)return;
        const delta=normalize(angleAt(point(event),currentPivot(active.spec))-active.startAngle);
        setAngle(active.spec,active.startValue+delta);
      });
      stage.addEventListener("pointerup",release);
      stage.addEventListener("pointercancel",release);
      stage.addEventListener("lostpointercapture",release);
      mount.querySelectorAll(".puppet-grab").forEach((element)=>{
        element.addEventListener("keydown",(event)=>{
          const spec=specs[element.id];if(!spec)return;
          if(event.key==="Enter"||event.key===" "){
            event.preventDefault();const angle=setAngle(spec,spec.max>50?22:spec.max>35?18:12);
            springHome(spec,angle);return;
          }
          if(event.key==="ArrowLeft"||event.key==="ArrowRight"){
            event.preventDefault();setAngle(spec,event.key==="ArrowLeft"?-14:14);
          }
        });
        element.addEventListener("keyup",(event)=>{
          if(event.key.indexOf("Arrow")!==0)return;
          const spec=specs[element.id];if(spec)springHome(spec,spec.angle||0);
        });
      });
    })
    .catch(()=>{mount.innerHTML='<p class="puppet-sr-only">The marionette is backstage for a moment.</p>'});
})();
