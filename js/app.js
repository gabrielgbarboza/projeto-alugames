// minha solução
function alterarStatus(numero) {
  let textoBotao = document.querySelector(`#game-${numero} a`);
  let capaJogo = document.querySelector(`#game-${numero} div`);
  if (textoBotao.innerHTML == "Alugar") {
    textoBotao.innerHTML = "Devolver";
    textoBotao.classList.add("dashboard__item__button--return");
    capaJogo.classList.add("dashboard__item__img--rented")
  } else {
    textoBotao.innerHTML = "Alugar";
    textoBotao.classList.remove("dashboard__item__button--return");
    capaJogo.classList.remove("dashboard__item__img--rented");
  }
}

//solução alura
// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);
//     let imagem = gameClicado.querySelector('.dashboard__item__img');
//     let botao = gameClicado.querySelector('.dashboard__item__button');
   
//     if (imagem.classList.contains('dashboard__item__img--rented')) {
//             imagem.classList.remove('dashboard__item__img--rented');
//             botao.classList.remove('dashboard__item__button--return');
//             botao.textContent = 'Alugar';
//         }
//      else {
//         imagem.classList.add('dashboard__item__img--rented');
//         botao.classList.add('dashboard__item__button--return');
//         botao.textContent = 'Devolver';
//     }
// }

  
  
  
  
  
  
