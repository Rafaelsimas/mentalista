let numeroPensadoPeloJS = parseInt(Math.random() * 11)
let contSpan = document.querySelector('.cont')
let gameOver = document.querySelector('.caixa-over')
let respsta = document.querySelector('.resposta')
let contador = 3

function adivinhar(){
   const valor = parseInt(document.querySelector('#valor').value)
    const imagemAcertou = document.querySelector('.imagemAcertou')
    const imagemErrou = document.querySelector('.imagemErrou')
    const imagemInicio = document.querySelector('.imagemInicio')

    if(valor === numeroPensadoPeloJS){
       imagemAcertou.classList.remove('over')
       imagemInicio.classList.add('over')
       imagemErrou.classList.add('over')
    }else if(valor < 0 || valor > 10){
        console.log('Insira valores de 0 até 10');
    }else{
        imagemErrou.classList.remove('over')
        imagemInicio.classList.add('over')
        contador--
    }
    verificarQtd()
  
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

function verificarQtd(){
    if(contador === 3){
        contSpan.innerHTML = `rodada ${contador}`
    }else if(contador === 2){
        contSpan.innerHTML = `rodada ${contador}`
    }else if(contador === 1){
        contSpan.innerHTML = `rodada ${contador}`
    }else if(contador === 0){
        contSpan.innerHTML = `rodada ${contador}`
        gameOver.classList.remove('over')
        respsta.innerHTML =  `O número pensado foi: ( ${numeroPensadoPeloJS} )`
    }
}