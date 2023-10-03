

let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBustarLivrosDaAPI()


async function getBustarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json() 
    let livrosComDesconto = aplicaDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
    
}

