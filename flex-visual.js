(() => {
const dialog=document.querySelector('.fv-lightbox');let opener;
document.querySelectorAll('.fv-zoom').forEach(button=>button.addEventListener('click',()=>{opener=button;const source=button.querySelector('img');const img=dialog.querySelector('img');img.src=source.src;img.alt=source.alt;dialog.showModal();}));
const close=()=>dialog.close();dialog.querySelector('.fv-close').addEventListener('click',close);
dialog.addEventListener('click',e=>{if(e.target===dialog)close();});
dialog.addEventListener('close',()=>opener?.focus());
const image=document.getElementById('fv-edit-image');const caption=document.getElementById('fv-edit-caption');
document.querySelectorAll('[data-payment-state]').forEach(button=>button.addEventListener('click',()=>{
const after=button.dataset.paymentState==='after';
image.src='assets/flex/edit-payment-'+(after?'after':'before')+'.png?v=transparent-5';
image.alt=after?'Adjusted monthly payment of £300 with four upcoming payments and £30.25 interest saved':'Original monthly payment of £12.34 with eight upcoming payments';
caption.textContent=after?'Example: £300 this month · 4 upcoming payments · £30.25 interest saved.':'Example: £12.34 this month · 8 upcoming payments.';
document.querySelectorAll('[data-payment-state]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
}));
})();