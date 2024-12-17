const products = [{
        idProduct: 1,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 2,
        tagName: "Camiseta Usina Eco-Cultural Laranja",
        description: "Linda camiseta logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
                size: "PP",
                quantity: 2
            },
            {
                size: "P",
                quantity: 2
            },
            {
                size: "M",
                quantity: 2
            },
            {
                size: "G",
                quantity: 2
            },
            {
                size: "GG",
                quantity: 2
            }
        ],
        category: "CAMISETAS",
        imgUrl: "https://i.postimg.cc/C1MTppWs/simple-t-shirt-mockup.png",
        priceBase: 55.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 4,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 5,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 6,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 7,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 8,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 9,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    },
    {
        idProduct: 10,
        tagName: "Relógio de Parede",
        description: "Lindo Relógio de Parede, artigo de decoração com o logo da Usina Eco-Cultural na cor Laranja",
        color: "orange",
        sizes: [{
            size: "U",
            quantity: 10
        }],
        category: "DECORAÇÃO",
        imgUrl: "https://i.postimg.cc/Xqv2QVtt/product-1.png",
        priceBase: 35.00,
        decimalDiscount: 0.1,
    }
]

export const LojinhaPage = `
<section class="col-12" id="contentId">
  <header class="header-section p-4 text-center">
  <div class="container">
     <div class="row">
      <h3>Lojinha ECO-CULTURAL</h3>
      <p>Aqui você encontra produtos da lojinha eco-cultural</p>
      </div>
     <div class="row row-cart-filter">
     <div class="col-12 col-md-6"></div>
     <div class="col-12 col-md-6"></div>
     </div>
      </div>
      </header>
  <div id="container">
      <div class="row">
          <div class="col-12">
              <ul class="products-list">
                  ${products.map((product) => (`
                      <li class=" product-item" id="p-${product.idProduct}">
                        <img src="${product.imgUrl}" alt="" class="product-item-img">
                         <div class="product-item-content">
                          <ul class="product-data">
                            <li class="text-center mb-2 bolder display-5z">${product.tagName}</li>

                            <li class="data-item">Preço: R$ ${(product.priceBase * (1 - product.decimalDiscount)).toFixed(2)} <span class="text-danger">${product.decimalDiscount * 100}% off</span></li>
                              <li class="data-item">Tamanhos Disponíveis
                                  <ul>
                                  <li class="container">
                                      ${product.sizes.map((info) => (`
                                          <span>${info.size} stock:  ${info.quantity}</span>
                                      `)).join('')}
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                        </div>
                      </li>
                  `)).join('')}
              </ul>
          </div>
      </div>
  </div>
</section>
`