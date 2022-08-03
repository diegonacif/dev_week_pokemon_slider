// window.alert('opa!')

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

let cartaoAtual = 0;

const cartoes = document.querySelectorAll('.cartao')

function esconderCartaoSelectionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function() {
  if(cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelectionado();
  
  cartaoAtual++
  mostrarCartao()
})

btnVoltar.addEventListener('click', function() {
  if(cartaoAtual === 0) return;

  esconderCartaoSelectionado();

  cartaoAtual--
  mostrarCartao()
})


