

const useFetch = async( urlBase, path="", headers={})=>{
    const url = new URL(`${urlBase}${path}`);
try{
    fetch(`${urlBase}/${path}`, headers)
    .then(response => response.json())
    .then(data => console.log(data));
} catch (error) {
    // TypeError: Failed to fetch
    console.log('There was an error', error);  
}finally{
    console.log('Fetch request finished.');
}
}



const fetchApi = async(urlBase, path, reqMethod="GET")=>{
    const tokenLS = localStorage.getItem('token') || null;
    const url = `${urlBase}/${path}`;
    const headers = {
            method: reqMethod || 'GET',
            headers: {
                'Content-Type': 'application/json',
            'Authorization':  /*'Bearer ' + localStorage.getItem('token')*/
            }
    }
    useFetch(urlBase, path, headers);
}


const renderDataList = (data)=>{
    const dataList = data.map( item => `<li>${item.name}</li>`).join('');
    return `<ul>${dataList}</ul>`;
}




const fetchRender = async( urlBase, path="", reqMethod="GET", targetId="content", template2Render=renderDataList)=>{   
     const data = await fetchApi(urlBase, path, reqMethod);

     const target = document.getElementById(`${targetId}`);
     target.innerHTML = template2Render(data);
}

fetchRender('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')