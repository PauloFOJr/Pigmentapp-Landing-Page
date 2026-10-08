// Telas exibidas na galeria: [aba, imagem, título, descrição]
const S=[["Histórico","assets/tela-historico.jpg","Histórico de orçamentos","Busque por cliente, número ou cidade e filtre por rascunho, pendente, enviado ou aprovado."],
["Minha Empresa","assets/tela-empresa.jpg","Cadastre sua empresa uma vez","Logo, contatos, chave PIX e condições de pagamento padrão já prontos em cada proposta."],
["Novo orçamento","assets/tela-novo-orcamento.jpg","Novo orçamento em minutos","Dados do cliente, endereço da obra com busca por CEP, ambientes e serviços."],
["Proposta","assets/tela-proposta.jpg","Proposta pronta para enviar","Revise, altere o status, salve em PDF ou envie direto pelo WhatsApp."]];
const T=document.getElementById('tabs'),si=document.getElementById('si');
function sel(i){[...T.children].forEach((b,j)=>b.classList.toggle('on',i==j));si.src=S[i][1];st.textContent=S[i][2];sp.textContent=S[i][3]}
S.forEach((s,i)=>{const b=document.createElement('button');b.textContent=s[0];b.onclick=()=>{sel(i);clearInterval(tm)};T.appendChild(b)});
let n=0;sel(0);const tm=setInterval(()=>sel(n=(n+1)%S.length),4500);
const r=document.documentElement,tg=document.getElementById('tg');
function th(d){r.dataset.t=d?'dark':'light';tg.textContent=d?'Claro':'Escuro'}
th(matchMedia('(prefers-color-scheme:dark)').matches||true);tg.onclick=()=>th(r.dataset.t!='dark');
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
