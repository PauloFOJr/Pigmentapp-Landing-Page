// Tema claro/escuro (padrão: escuro, igual à página inicial)
const r=document.documentElement,tg=document.getElementById('tg');
function th(d){r.dataset.t=d?'dark':'light';tg.textContent=d?'Claro':'Escuro'}
th(true);tg.onclick=()=>th(r.dataset.t!='dark');

// Formulário de suporte: o e-mail só precisa ser trocado aqui
const EMAIL="pigmentapp.suporte@gmail.com",SITE="https://pigmentapp-prod.web.app/suporte.html",$=id=>document.getElementById(id);
if($('f')){$('f').action="https://formsubmit.co/"+EMAIL;$('nx').value=SITE+"?enviado=1";$('em').textContent=EMAIL;
if(location.search.includes('enviado=1'))$('ok').style.display='block';
$('cp').onclick=()=>navigator.clipboard.writeText(EMAIL).then(()=>{$('cp').textContent='Copiado ✓';setTimeout(()=>$('cp').textContent='Copiar',2000)})}
