(function(){
  var f=document.getElementById('resa'); if(!f) return;
  var offers=JSON.parse(f.dataset.offers), ins=parseFloat(f.dataset.ins), sel=document.getElementById('offre');
  var rn=document.getElementById('recap-name'), rp=document.getElementById('recap-price'), ri=document.getElementById('recap-ins'), rd=document.getElementById('recap-dep'), msg=document.getElementById('resa-msg');
  function fmt(n){var s=n.toFixed(2).replace('.',','); return s.replace(/,00$/,'');}
  var q=new URLSearchParams(location.search).get('offre'); if(q && offers[q]) sel.value=q;
  function upd(){var o=offers[sel.value]; if(!o) return; rn.textContent=o.name;
    if(o.ttc){rp.textContent=fmt(o.ttc)+' € TTC / mois'; ri.textContent='+ assurance AXA proposée : '+fmt(ins)+' €/mois, soit '+fmt(o.ttc+ins)+' €/mois au total.'; rd.textContent='Dépôt de garantie : '+fmt(o.ttc*2)+' € (2 mois de loyer).';}
    else if(o.ht){rp.textContent=fmt(o.ht)+' € HT / mois'; ri.textContent='Assurance à la charge du preneur.'; rd.textContent='';}
    else {rp.textContent='Sur devis'; ri.textContent='Indiquez la surface souhaitée dans « Précisions ».'; rd.textContent='';}}
  sel.addEventListener('change',upd); upd();
  f.querySelector('[name=debut]').min=new Date().toISOString().slice(0,10);
  f.addEventListener('submit',function(ev){
    if(f.website.value){ev.preventDefault();return;}
    var ep=f.dataset.endpoint;
    if(ep){ev.preventDefault();
      fetch(ep,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}}).then(function(r){
        if(r.ok){f.reset();upd();msg.textContent='Merci, votre demande est envoyée. Nous vous répondons rapidement.';}
        else{msg.textContent="L'envoi a échoué. Contactez-nous au "+f.dataset.contact+".";}
      }).catch(function(){msg.textContent="L'envoi a échoué. Contactez-nous au "+f.dataset.contact+".";});
    } else if(f.dataset.email){ev.preventDefault();
      var b=['Espace : '+offers[sel.value].name,'Entrée : '+f.debut.value,'Nom : '+f.nom.value,'Tél : '+f.tel.value,'E-mail : '+f.email.value,'Profil : '+f.usage.value,'Précisions : '+f.message.value].join('\n');
      location.href='mailto:'+f.dataset.email+'?subject='+encodeURIComponent('Demande de réservation')+'&body='+encodeURIComponent(b);
    } else {ev.preventDefault();msg.textContent="Le formulaire n'est pas encore relié à une adresse de réception (voir le README).";}
  });
})();

(function(){var b=document.getElementById('loadmap'); if(!b) return;
  b.addEventListener('click',function(){var f=document.getElementById('mapframe'); f.src=b.dataset.src; f.hidden=false; b.parentNode.hidden=true;});})();