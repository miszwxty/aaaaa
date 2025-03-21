document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade')
const opcoesdeAcessibilidade=document.getElementById('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventListener('click',function(){
botaoDeAcessibilidade.classList.toggle('rotacao-botao');
opcoesdeAcessibilidade.classList.toggle('apresenta-lista');


const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')==='true';
botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)
    
})

const aumentaFonteBotao=document.getElementById('aumentar-fonte');
const diminuiFonteBotao=document.getElementById('diminuir-fonte');

const alternaContraste=document.getElementById('alterna-contraste');

let tamanhoAtualFonte=1;

aumentaFonteBotao.addEventListener('click',function(){
tamanhoAtualFonte+=0.1;
document.body.style.fontSize='${tamanhoAtualFonte}rem'

})

diminuiFonteBotao.addEventListener('click'function(){
tamanhoAtualFonte-=0.1;
document.body.style.fontSize='$(tamanhoAtualFonte)rem'

})
alternaContraste.addEventListener('click',function(){

    document.body.classList.toggle('alto-constraste')
})

})

ScrollReveal1().reveal1('#inicio',{delay:500});
ScrollReveal1().reveal1('#tropicalia',{delay:500});
ScrollReveal1().reveal1('#galeria',{delay:500});
ScrollReveal1().reveal1('#constraste',{delay:500});