const dataSupporters = [
    {
        id: 1,
        name: 'CADES Ipiranga',
        imgUrl: '/../assets/brand/apoiadores/apoio001-cades-ipiranga.png',
        link: 'https://capital.sp.gov.br/web/ipiranga/w/cades_ip/32342'
    }
    ,
    {
        id: 2,
        name: 'Instituto CHÃO',
        imgUrl: '/../assets/brand/apoiadores/apoio002-instituto-chao.png',
        link: 'https://www.institutochao.org/'
    }
    ,
    {
        id: 3,
        name: 'UMAPAZ',
        imgUrl: '/../assets/brand/apoiadores/apoio003-umapaz.png',
        link: 'https://capital.sp.gov.br/web/meio_ambiente/w/umapaz/sobre_a_umapaz/243'
    },
    {
        id: 4,
        name: 'CADES VILA MARIANA',
        imgUrl: '/../assets/brand/apoiadores/apoio004-cades-vila-mariana.png',
        link: 'https://capital.sp.gov.br/web/vila_mariana/w/cadesvm/31201'
    }
    ,
    {
        id: 5,
        name: 'GEPEM',
        imgUrl: '/../assets/brand/apoiadores/apoio005-GEPEM.png',
        link: 'https://www.gepem.org/grupo/sobre/'
    }
    ,
    {
        id: 4,
        name: 'CADES VILA MARIANA',
        imgUrl: '/../assets/brand/apoiadores/apoio004-cades-vila-mariana.png',
        link: 'https://capital.sp.gov.br/web/vila_mariana/w/cadesvm/31201'
    }
]

const supportersList = (dataList) => {
    return dataList.map((s) => (
        `
              
               <a href="${s.link}"class="col-xs-12 col-md-6 col-lg-4 mt-2 rounded-8">
               <img class="img-fluid" src="${s.imgUrl}" alt="img da usina nos dias de hoje"/>
               <p class="bg-light text-center  mt-2">${s.name}</p>
               </a>
                
        `
    )).join('');
}

const lista = supportersList(dataSupporters);
export const SupportersPage = `
          <section class="container-testimonial container mb-4 pb-4">
               <div class="mb-4 rounded-4 p-4">
                  <h4 class="display-3 text-center mb-4">NOSSOS COLABORADORES<h4>
                  <p class="m-2 text-center">Conheça quem participa construindo a usina junto ao coletivo clickando no logo e visitando os links dos nossos parceiros!</strong>
               <div class="container">
               <ul class="row  mt-4">
   ${lista}
</ul>
</div>
</section>
`