(() => {
  const stage=document.querySelector(".puppet-stage");
  const mount=document.querySelector("#puppet-mount");
  if(!stage||!mount)return;
  fetch(new URL("assets/puppet/laura-marionette-stage-v2.svg",document.baseURI))
    .then((response)=>{if(!response.ok)throw new Error("Puppet artwork unavailable");return response.text()})
    .then((markup)=>{
      mount.innerHTML=markup;
      const svg=mount.querySelector("svg");
      const specs={
        "puppet-head":{pivot:[340,250],worldPivot:[340,650],anchor:[340,104],start:[340,0],string:mount.querySelector("#puppet-string-head"),ring:mount.querySelector("#puppet-anchor-head"),max:24},
        "puppet-arm-left":{pivot:[262,388],worldPivot:[262,788],anchor:[62,378],start:[150,0],string:mount.querySelector("#puppet-string-left"),ring:mount.querySelector("#puppet-anchor-left"),max:58},
        "puppet-arm-right":{pivot:[418,388],worldPivot:[418,788],anchor:[617,356],start:[530,0],string:mount.querySelector("#puppet-string-right"),ring:mount.querySelector("#puppet-anchor-right"),max:58},
        "puppet-leg-left":{pivot:[300,573],worldPivot:[300,973],max:42},
        "puppet-leg-right":{pivot:[380,573],worldPivot:[380,973],max:42},
        "puppet-torso":{pivot:[340,388],worldPivot:[340,788],max:15}
      };
      Object.keys(specs).forEach((id)=>{
        specs[id].element=mount.querySelector("#"+id);
        specs[id].baseD=specs[id].string&&specs[id].string.getAttribute("d");
        if(specs[id].ring)specs[id].baseRing={cx:specs[id].ring.getAttribute("cx"),cy:specs[id].ring.getAttribute("cy")};
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
      let active=null;
      const applyAngle=(spec,degrees)=>{
        const angle=Math.max(-spec.max,Math.min(spec.max,degrees));
        if(spec.element)spec.element.setAttribute("transform","rotate("+angle+" "+spec.pivot[0]+" "+spec.pivot[1]+")");
        if(spec.string&&spec.anchor){
          const end=rotate(spec.anchor,spec.pivot,angle);
          const worldEnd=[end[0],end[1]+400];
          spec.string.setAttribute("d","M "+spec.start[0]+" "+spec.start[1]+" L "+worldEnd[0].toFixed(2)+" "+worldEnd[1].toFixed(2));
          if(spec.ring){spec.ring.setAttribute("cx",end[0].toFixed(2));spec.ring.setAttribute("cy",end[1].toFixed(2));}
        }
        return angle;
      };
      const restore=(spec)=>{
        if(spec.element)spec.element.removeAttribute("transform");
        if(spec.string)spec.string.setAttribute("d",spec.baseD);
        if(spec.ring){spec.ring.setAttribute("cx",spec.baseRing.cx);spec.ring.setAttribute("cy",spec.baseRing.cy);}
      };
      const setAngle=(part,degrees)=>{part.angle=applyAngle(part.spec,degrees);return part.angle};
      const springHome=(spec,from)=>{
        const started=performance.now(),duration=680;
        const frame=(now)=>{
          const t=Math.min(1,(now-started)/duration);
          const eased=Math.exp(-6*t)*Math.cos(8*t);
          applyAngle(spec,from*eased);
          if(t<1)requestAnimationFrame(frame);else restore(spec);
        };
        requestAnimationFrame(frame);
      };
      const release=()=>{
        if(!active)return;
        const part=active;active=null;stage.classList.remove("is-dragging");
        springHome(part.spec,part.angle||0);
        try{stage.releasePointerCapture(part.pointerId)}catch(_){}
      };
      stage.addEventListener("pointerdown",(event)=>{
        const hit=event.target.closest("[data-puppet-part],.puppet-grab");
        if(!hit)return;
        const id=hit.getAttribute("data-puppet-part")||hit.id,spec=specs[id];
        if(!spec)return;
        event.preventDefault();
        active={id:id,spec:spec,pointerId:event.pointerId,startAngle:angleAt(point(event),spec.worldPivot),angle:0};
        stage.classList.add("is-dragging");
        try{stage.setPointerCapture(event.pointerId)}catch(_){}
      });
      stage.addEventListener("pointermove",(event)=>{
        if(!active||event.pointerId!==active.pointerId)return;
        setAngle(active,normalize(angleAt(point(event),active.spec.worldPivot)-active.startAngle));
      });
      stage.addEventListener("pointerup",release);
      stage.addEventListener("pointercancel",release);
      stage.addEventListener("lostpointercapture",release);
      mount.querySelectorAll(".puppet-grab").forEach((element)=>{
        element.addEventListener("keydown",(event)=>{
          const spec=specs[element.id];if(!spec)return;
          if(event.key==="Enter"||event.key===" "){
            event.preventDefault();setAngle({spec:spec},element.id.indexOf("arm")>=0?22:-12);
            window.setTimeout(()=>restore(spec),560);return;
          }
          if(event.key==="ArrowLeft"||event.key==="ArrowRight"){
            event.preventDefault();setAngle({spec:spec},event.key==="ArrowLeft"?-14:14);
          }
        });
        element.addEventListener("keyup",(event)=>{if(event.key.indexOf("Arrow")===0){const spec=specs[element.id];if(spec)springHome(spec,element.getAttribute("transform")?14:0)}});
      });
    })
    .catch(()=>{mount.innerHTML='<p class="puppet-sr-only">The marionette is backstage for a moment.</p>'});
})();
