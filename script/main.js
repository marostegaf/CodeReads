let livros = [];
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const respostaDaAquisicao = await fetch(endpointDaApi);
    livros = await respostaDaAquisicao.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}

// const respostaDaAquisicao: Declara uma variável para armazenar a resposta da requisição.
// await fetch(endpointDaAquisicao): Faz uma requisição HTTP para a URL fornecida, espera que a resposta seja recebida e armazena essa resposta na variável respostaDaAquisicao.
// A seguir, a resposta (que é um objeto Response) será usada para extrair os dados JSON com await respostaDaAquisicao.json().