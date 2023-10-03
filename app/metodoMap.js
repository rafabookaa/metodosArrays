
function aplicaDesconto(livros) {

  //definindo o desconto
  const desconto = 0.3;       

  //map serve para mapear TODOS os elementos do array e altera-los 
  livrosComDesconto = livros.map(livro => {
    
    // os tres pontos servem para "copiar" todos os livros para ser feita a alteração 
    return {...livro, preco: livro.preco - (livro.preco * desconto)};
  })
  return livrosComDesconto;
};

