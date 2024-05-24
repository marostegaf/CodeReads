const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));
// Vai adicionar o evento de clique aos botoões

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponivel" ? 
    filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    // livrosFiltrados vai receber a categoria, se a categoria for diponivel, ou seja, o botão clicado tiver como value = "disponivel" vamos filtrar por disponibilidade e não por categoria, sendo assim mostrando os livros disponiveis no lugar de "front-end", "back-end" e etc
    
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}
// Quando clicar no botão vai pegar o Id dele, após pegar o Id do botão clicado vai pegar o value dele, que no caso é a categoria, após isso vai mostrar os livros dessa categoria na tela utilizando a função exibirOsLivrosNaTela e passando a "categoria" deles

// Se o botão clicado, ou seja, a categoria for "disponivel vai filtrar por disponibilidade, sendo assim mostrando os livros que estão disponiveis e no final calculando o valor total deles >> A disponibilidade foi adicionada aos livros que tem quantidade > 0 no forEach"

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoValorTotalDeLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}