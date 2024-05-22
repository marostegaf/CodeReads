const elementoParaInserirLivros = document.getElementById("livros");
const elementoValorTotalDeLivros = document.getElementById("valor_total_livros_disponiveis");

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoValorTotalDeLivros.innerHTML = ""
    elementoParaInserirLivros.innerHTML = ""
    listaDeLivros.forEach(livro => {
      // let disponibilidade = verificarDisponibilidadeDoLivro(livro);
      let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
      elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      </div>
        `
    })
}  

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return "livro_imagens"
//   } else {
//     return "livro_imagens indisponivel"
//   }
// }