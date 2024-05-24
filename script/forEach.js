const elementoParaInserirLivros = document.getElementById("livros");
const elementoValorTotalDeLivros = document.getElementById("valor_total_livros_disponiveis");

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = ""
  elementoValorTotalDeLivros.innerHTML = ""
  // Só vai ser mostrado o valorTotalDeLivros quando o botão for "livros disponíveis"
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

// Vai limpar os conteúdos anteriores após isso vai ler a ListaDeLivros e vai pegar os dados da API
