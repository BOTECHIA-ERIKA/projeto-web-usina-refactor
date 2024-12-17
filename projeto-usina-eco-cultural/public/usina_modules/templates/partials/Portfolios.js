const getAndSetPortfolios = () => {
    const portfolios = [
        {
            id: "portfolio-1",
            title: "Projeto 1",
            author: "Nome do Author",
            imgUrl: "https://i.postimg.cc/qRjQ9xrx/avatar-skater.jpg",
            content: "Aqui eu me encontro com a minha galera, me sinto livre e ademas adoramos andar na parte da usina que era o pátio da fabrica Arno, a iniciativa eco-cultural sempre nos da espaço para participar dos eventos junto com eles",
            linkUrl: "https://www.google.com"
        },
    ];
    return portfolios.map((portfolio) => (
        `
        <tr id="portfolio-data-${portfolio.id}">
            <td colspan="4"> <a href="${portfolio.linkUrl}">
                ${portfolio.id}
            </a></td>
            <td colspan="4">${portfolio.title}<hr/>${portfolio.content} <hr/> ${portfolio.author}</td>
            <td colspan="4"><img width="150px" height="150px" src="${portfolio.imgUrl}" alt="${portfolio.title}" /></td>
       </tr>
      `
    )).join('');
};

export const mapPortfolios = ()=>( `
<table>
    <thead>
        <tr>
            <th colspan="4">id</th>
            <th colspan="4">Conteúdo e Autor Projeto</th>
            <th colspan="4">Img</th>
        </tr>
    </thead>
    <tbody> 
        ${getAndSetPortfolios()}   
    </tbody>
</table>
`);

