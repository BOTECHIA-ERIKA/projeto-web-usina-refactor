import {renderApp } from "./templates/index.js";
import { HomePage } from "./usina_modules/templates/pages/homePage.js";
import { ColetivoPage } from "./usina_modules/templates/pages/coletivoPage.js";


const options2Render = (currentPage)=>{
    
if(currentPage === 'HOME'){
    const data2Inject ={
        targetId: 'contentId',
        template: HomePage
    }
    renderApp(data2Inject)
}else if(currentPage === 'COLETIVO'){
    const data2Inject ={
        targetId: 'contentId',
        template: ColetivoPage
    }
    renderApp(data2Inject)
}else if(currentPage ===  'TIMELINE')

}

const renderPage = ()=>{
const currentUrl = window.location.href
const split1 = currentUrl.split('/pages/')
const split2 = split1[1].split('.')
const page = split2[0]
const currentPage = page.toUpperCase()

options2Render(currentPage)


}

renderPage()