


const listaProdutos = []

// Função para listar produtos
 function listarProdutos(produtos) {
    // Seleciona o elemento do DOM onde os produtos serão exibidos
    const produtosContainer = document.getElementById('productsContainer');
    // Limpa o conteúdo atual do container
    produtosContainer.innerHTML = '';

    if (produtos.length === 0) {
        produtosContainer.innerHTML = '<p>Nenhum Produto Encontrado</p>';
        return;
    }

    // Itera sobre a lista de produtos e cria os elementos HTML para cada produto
    produtos.forEach(produto => {
        // Cria o elemento do produto
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('produto');
        
        // Cria o HTML do produto
        produtoElement.innerHTML = `
          <article id="${produto.id}" class="cardArticle">
            <div class="produto-img">
                <img src="${produto.imgUrl}" alt="${produto.title}">
            </div>
            <div class="produto-info">
                <h2 class="produto-nome">${produto.title}</h2>
                <p class="produto-descricao">${produto.content}</p>
                <p class="produto-preco">R$ ${produto.price.toFixed(2)}</p>
            </div>
            </article>
        `;

        // Adiciona o produto ao container
        produtosContainer.appendChild(produtoElement);
    });
}

const lojinha ={
    listaProdutos,
    listarProdutos
}