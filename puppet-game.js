(() => {
  const stage=document.querySelector(".puppet-stage");
  const mount=document.querySelector("#puppet-mount");
  if(!stage||!mount)return;
  fetch(new URL("assets/puppet/laura-marionette.svg",document.baseURI))
    .then((response)=>{if(!response.ok)throw new Error("Puppet artwork unavailable");return response.text()})
    .then((markup)=>{
      mount.innerHTML=markup;
      const svg=mount.querySelector("svg");
      const head=mount.querySelector("#puppet-head");
      const torso=mount.querySelector("#puppet-torso");
      const leftArm=mount.querySelector("#puppet-arm-left");
      const rightArm=mount.querySelector("#puppet-arm-right");
      const leftLeg=mount.querySelector("#puppet-leg-left");
      const rightLeg=mount.querySelector("#puppet-leg-right");
      const strings=[...mount.querySelectorAll(".puppet-string")];
      const parts=[head,torso,leftArm,rightArm,leftLeg,rightLeg].filter(Boolean);
      const prefersReduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const current={head:0,torso:0,leftArm:0,rightArm:0,leftLeg:0,rightLeg:0,leftString:0,rightString:0};
      const target={...current};
      let frame=0;
      const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
      const pointerTarget=(event)=>{
        const rect=stage.getBoundingClientRect();
        const nx=clamp(((event.clientX-rect.left)/rect.width)*2-1,-1,1);
        const ny=clamp(((event.clientY-rect.top)/rect.height)*2-1,-1,1);
        target.head=nx*8-ny*1.5;
        target.torso=nx*2.5;
        target.leftArm=clamp(-ny*13-nx*9,-24,24);
        target.rightArm=clamp(-ny*13+nx*9,-24,24);
        target.leftLeg=clamp(nx*5+ny*2,-10,10);
        target.rightLeg=clamp(-nx*5+ny*2,-10,10);
        target.leftString=clamp(nx*1.8-ny*1.2,-4,4);
        target.rightString=clamp(nx*1.8+ny*1.2,-4,4);
        stage.classList.add("is-awake");
        if(!frame)frame=requestAnimationFrame(animate);
      };
      const animate=(time)=>{
        const easing=prefersReduced?1:.14;
        for(const key of Object.keys(current))current[key]+=(target[key]-current[key])*easing;
        if(head)head.style.transform=`rotate(${current.head+Math.sin(time/900)*.45}deg)`;
        if(torso)torso.style.transform=`rotate(${current.torso+Math.sin(time/1250)*.25}deg)`;
        if(leftArm)leftArm.style.transform=`rotate(${current.leftArm}deg)`;
        if(rightArm)rightArm.style.transform=`rotate(${current.rightArm}deg)`;
        if(leftLeg)leftLeg.style.transform=`rotate(${current.leftLeg}deg)`;
        if(rightLeg)rightLeg.style.transform=`rotate(${current.rightLeg}deg)`;
        if(strings[1])strings[1].style.transform=`rotate(${current.leftString}deg)`;
        if(strings[2])strings[2].style.transform=`rotate(${current.rightString}deg)`;
        const moving=Object.keys(current).some((key)=>Math.abs(current[key]-target[key])>.025);
        if(moving||stage.matches(":hover"))frame=requestAnimationFrame(animate);
        else frame=0;
      };
      const settle=()=>{
        Object.keys(target).forEach((key)=>target[key]=0);
        stage.classList.remove("is-awake");
        if(!frame)frame=requestAnimationFrame(animate);
      };
      stage.addEventListener("pointermove",pointerTarget,{passive:true});
      stage.addEventListener("pointerleave",settle);
      stage.addEventListener("pointerup",(event)=>{if(event.pointerType!=="mouse")settle()});
      stage.addEventListener("focusin",()=>{target.head=-3;if(!frame)frame=requestAnimationFrame(animate)});
      stage.addEventListener("focusout",settle);
      // A soft idle motion keeps the marionette alive without a play button.
      if(!prefersReduced){
        const idle=()=>{
          if(!stage.matches(":hover")&&!stage.matches(":focus-within")){
            const drift=Math.sin(performance.now()/1800)*.55;
            if(head)head.style.transform=`rotate(${drift}deg)`;
          }
          requestAnimationFrame(idle);
        };
        requestAnimationFrame(idle);
      }
    })
    .catch(()=>{mount.innerHTML='<p class="mono-label">The marionette is backstage for a moment.</p>'});
})();
