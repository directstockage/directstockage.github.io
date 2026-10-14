(function(){
  var f=document.getElementById('resa'); if(!f) return;
  var prices=JSON.parse(f.dataset.prices), sel=document.getElementById('box');
  var rb=document.getElementById('recap-box'), rp=document.getElementById('recap-price'), msg=document.getElementById('resa-msg');
  var q=new URLSearchParams(location.search).get('box');
  if(q && prices[q]) sel.value=q;
  function upd(){var o=sel.options[sel.selectedIndex]; if(!o||!o.value){return;}
    rb.textContent=o.text.split(' — ').slice(0,2).join(' — '); rp.textContent=prices[o.value]+' € / mois';}
  sel.addEventListener('change',upd); upd();
  var d=f.querySelector('[name=debut]'); d.min=new Date().toISOString().slice(0,10);
  f.addEventListener('submit',function(ev){
    if(f.website.value){ev.preventDefault();return;}
    var ep=f.dataset.endpoint;
    if(ep){
      ev.preventDefault();
      var fd=new FormData(f);
      fetch(ep,{method:'POST',body:fd,headers:{'Accept':'application/json'}}).then(function(r){
        if(r.ok){f.reset();upd();msg.textContent='Merci, votre demande est envoyée. Nous vous répondons rapidement.';}
        else{msg.textContent="L'envoi a échoué. Merci de réessayer ou de nous contacter.";}
      }).catch(function(){msg.textContent="L'envoi a échoué. Merci de réessayer ou de nous contacter.";});
    } else if(f.dataset.email){
      ev.preventDefault();
      var b=['Box : '+sel.options[sel.selectedIndex].text,'Entrée : '+f.debut.value,'Durée : '+f.duree.value,'Nom : '+f.nom.value,'Tél : '+f.tel.value,'E-mail : '+f.email.value,'Usage : '+f.usage.value,'Message : '+f.message.value].join('\n');
      location.href='mailto:'+f.dataset.email+'?subject='+encodeURIComponent('Réservation de box')+'&body='+encodeURIComponent(b);
    } else {
      ev.preventDefault();
      msg.textContent="Le formulaire n'est pas encore relié à une adresse de réception (voir le README).";
    }
  });
})();