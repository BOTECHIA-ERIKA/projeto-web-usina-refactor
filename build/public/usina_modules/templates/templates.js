import { BlogPage } from "./pages/blogPage.js";
import { ColetivoPage } from "./pages/coletivoPage.js";
import { ContatoPage } from "./pages/contatoPage.js";
import { HomePage } from "./pages/homePage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { LojinhaPage } from "./pages/lojinhaPage.js";
import { SchedulePage } from "./pages/schedulePage.js";
import { SupporterPage } from "./pages/supporterPage.js";
import { SupportersPage } from "./pages/supportersPage.js";
import { TimelinePage } from "./pages/timelinePage.js";
import { Navbar4Index } from "./partials/Navbar.js";
const renderApp = (data2Inject) => {
    const { targetId, template } = data2Inject;
    const targetHTML = document.getElementById(targetId);
    if (targetHTML) {
        targetHTML.innerHTML = template;
    } else {
        console.error(`Elemento com ID "${targetId}" não encontrado.`);
    }
};

const renderView = (data2Inject, changeBtn) => {
    const changeBtnElement = document.getElementById(changeBtn);
    if (changeBtnElement) {
        changeBtnElement.addEventListener('click', () => {
            renderApp(data2Inject);
        });
    } else {
        console.error(`Botão com ID "${changeBtn}" não encontrado.`);
    }
};

const renderViews = () => {
    const navBtn0 = 'navBtn0';
    const dataHome = {
        targetId: 'contentId',
        template: HomePage
    };

    const navBtn1 = 'navBtn1';
    const dataColetivo = {
        targetId: 'contentId',
        template: ColetivoPage
    };

    const navBtn2 = 'navBtn2';
    const dataTimeline = {
        targetId: 'contentId',
        template: TimelinePage
    };

    const navBtn3 = 'navBtn3';
    const dataBlog = {
        targetId: 'contentId',
        template: BlogPage
    };

    const navBtn4 = 'navBtn4';
    const dataAgenda = {
        targetId: 'contentId',
        template: SchedulePage
    };

    const navBtn5 = 'navBtn5';
    const dataStore = {
        targetId: 'contentId',
        template: LojinhaPage
    };

    const navBtn6 = 'navBtn6';
    const dataColaborar = {
        targetId: 'contentId',
        template: SupporterPage
    };

    const navBtn7 = 'navBtn7';
    const dataApoios = {
        targetId: 'contentId',
        template: SupportersPage
    };

    const navBtn8 = 'navBtn8';
    const dataContato = {
        targetId: 'contentId',
        template: ContatoPage
    };

    const navBtn9 = 'navBtn9';
    const dataLogin = {
        targetId: 'contentId',
        template: LoginPage
    };

    renderView(dataHome, navBtn0);
    renderView(dataColetivo, navBtn1);
    renderView(dataTimeline, navBtn2);
    renderView(dataBlog, navBtn3);
    renderView(dataAgenda, navBtn4);
    renderView(dataStore, navBtn5);
    renderView(dataColaborar, navBtn6);
    renderView(dataApoios, navBtn7);
    renderView(dataContato, navBtn8);
    renderView(dataLogin, navBtn9);
};

export const renderTemplates = () => {
    const dataDefault = {
        targetId: 'contentId',
        template: HomePage
    };

    const dataIndex ={
        navbar: Navbar4Index,
        location: 'navbar-location'
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById(dataIndex.location).innerHTML = dataIndex.navbar
        renderApp(dataDefault);
        renderViews();
    });
};