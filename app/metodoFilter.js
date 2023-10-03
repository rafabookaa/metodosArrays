
const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click' , filtrarLivros))

function filtrarLivros () {
  //pegando o ID de cada botão
  const elementoBtn = document.getElementById(this.id);
  console.log(elementoBtn)

  //pegando o valor(categoria) de cada livro
  const categoria = elementoBtn.value

  //quando o livro filtrado for igual a categoria, ira mostrar apenas a categoria
  let = livrosFiltrados = livros.filter(livro => livro.categoria == categoria);

  exibirOsLivrosNaTela(livrosFiltrados);

}