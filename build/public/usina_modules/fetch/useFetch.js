/*const useFetch = async (urlBase, path = "", headers = {}) => {
    const url = new URL(`${urlBase}/${path}`);
    try {
        const response = await fetch(url, headers);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('There was an error', error);
        return null;
    } finally {
        console.log('Fetch request finished.');
    }
};

const fetchApi = async (urlBase, path, reqMethod = "GET") => {
    const headers = {
        method: reqMethod,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await useFetch(urlBase, path, headers);
};

const renderDataList = (data) => {
    // Verifica se a resposta contém a propriedade 'jokes' e se é um array
    if (!data || !data.jokes || !Array.isArray(data.jokes)) {
        console.error('Expected data to be an object with a jokes array, but got:', data);
        return '<div class="dynamic-content container" id="content"><ul class="row"></ul></div>';
    }
    
    const dataList = data.jokes.map(item => `
        <li class="col-8 col-md-5 col-lg-4 bg-light m-3 rounded p-2 card">
            ${item.setup || item.joke}
        </li>
    `).join('');

    return `<div class="dynamic-content container" id="content"><ul class="row">${dataList}</ul></div>`;
};

const fetchRender = async (urlBase, path = "", reqMethod = "GET", targetId = "content", template2Render = renderDataList) => {
    const data = await fetchApi(urlBase, path, reqMethod);
    const target = document.getElementById(targetId);
    if (target) {
        target.innerHTML = template2Render(data);
    }
};

// Altere a URL se necessário
fetchRender('https://v2.jokeapi.dev/joke', 'Any?lang=pt&amount=10');



const date = moment();
const currentDate = date.format('D/MM/YYYY');
console.log(currentDate); // "17/06/2022"

const dateEmpthyHTML = document.getElementById('datetimeEmpthy')

if(dateEmpthyHTML){
    dateEmpthyHTML.innerHTML = currentDate
}
*/
