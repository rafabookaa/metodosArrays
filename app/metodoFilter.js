
const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click' , filtrarLivros))

function filtrarLivros () {
  //pegando o ID de cada botão
  const elementoBtn = document.getElementById(this.id);
  console.log(elementoBtn)

  //pegando o valor(categoria) de cada livro
  const categoria = elementoBtn.value

  //quando o livro filtrado for igual a categoria, ira mostrar apenas a categoria
  let = livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

  exibirOsLivrosNaTela(livrosFiltrados);

  if(categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis()
    exibirValorTotalNaTela(valorTotal)
  }

}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalNaTela () {
  elementoValorTotalLviros.innerHTML = `
  <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
</div>
  `
}