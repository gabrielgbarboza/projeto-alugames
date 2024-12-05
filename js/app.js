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


  
  
  
  
  
  
