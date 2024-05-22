const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco)
let ordenando = false;

function ordenarLivrosPorPreco() {
    let livrosOrdenados = [];
    if (ordenando == false) {
        livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
        ordenando = true;
    } else {
        livrosOrdenados = livros.sort((a, b) => b.preco - a.preco);
        ordenando = false;
    }
    exibirOsLivrosNaTela(livrosOrdenados);
}