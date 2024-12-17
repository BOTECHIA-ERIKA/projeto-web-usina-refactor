import { templates } from './templates/pages/pages.js';

const getElementPageHtml = () => {
    const getLocationPath = window.location.href;
    const split2Confirm = getLocationPath.split('/').pop();
    if (split2Confirm === "/") {
        let elementPageHtml = "idContent-0";
        return elementPageHtml;
    } else {
        let elementPageHtml;
        /*export const templates = [ SchedulePage, SupporterPage, LojinhaPage,  SupportersPage, ContatoPage, LoginPage];*/

        switch (split2Confirm) {
            case "usina":
                elementPageHtml = "idContent-1";
                return elementPageHtml;
            case "coletivo":
                elementPageHtml = "idContent-2";
                return elementPageHtml;
            case "timeline":
                elementPageHtml = "idContent-3";
                return elementPageHtml;
            case "blog":
                elementPageHtml = "idContent-4";
                return elementPageHtml;
            case "agenda":
                elementPageHtml = "idContent-5";
                return elementPageHtml;
            case "loja":
                elementPageHtml = "idContent-6";
                return elementPageHtml;
            case "doar":
                elementPageHtml = "idContent-7";
                return elementPageHtml;
            case "apoio-e-patrocinio":
                elementPageHtml = "idContent-8";
                return elementPageHtml;
            case "contact":
                elementPageHtml = "idContent-9";
                return elementPageHtml;
            case "login":
                elementPageHtml = "idContent-10";
                return elementPageHtml;
            case "recovery":
                elementPageHtml = "idContent-11";
                return elementPageHtml;
            case "registration":
                elementPageHtml = "idContent-12";
                return elementPageHtml;
            default:
                elementPageHtml = "idContent-0";
                return elementPageHtml;
        }
    }
}

const getAndSetCurrentLocation = () => {
    const element2Get = getElementPageHtml();
    const templateOrder = Number(element2Get.split("-").pop().toString());
    console.log(element2Get);
    console.log(templateOrder);
    let element2Set = document.getElementById(element2Get);
    if (element2Set) {
        element2Set.innerHTML = templates[templateOrder];
    } else {
        console.error(`Element with ID ${element2Get} not found.`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getAndSetCurrentLocation();
});