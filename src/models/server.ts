import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import mainRouter from '../routes/mainRouter';
import blogRouter from '../routes/api/blogRouter';
import productsRouter from '../routes/api/productsRouter';
import eventsRouter from '../routes/api/eventsRouter';
import galleriesRouter from '../routes/api/galleriesRouter';
import stockRouter from '../routes/api/stockRouter';
import ticketsRouter from '../routes/api/ticketsRouter';
import volluntersRouter from '../routes/api/volluntersRouter';
import buyersRouter from '../routes/api/buyersRouter';
import registeredRouter from '../routes/api/registeredRouter';
import adminRouter from '../routes/api/adminRouter';
import pagesRouter from '../routes/pages/pagesRouter'
import apiRouter from '../routes/api/apiRouter';


/*Esse é o modelo de servidor a ser usado em index*/ 

export class Server {
    private app: Application;
    private port: string;
    private mainPaths ={
        main: '/'
    }
    private apiPaths = {
        api: '/api',
        admin: '/api/admin',
        buyers: '/api/buyers',
        registered: '/api/registered',
        vollunters: '/api/vollunters',
        blog: '/api/blog',
        events: '/api/events',
        stock: '/api/stock',
        tickets: '/api/tickets',
        galleries: '/api/galleries',
        products: '/api/products'
    };


    private pagesPaths ={
        pages: '/pages'
    }

    constructor() {
        this.app = express();
        this.port = `${Number(process.env.PORT) || 3000}`;
        
        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares(){
        //CORS
        this.app.use(express.json());
    
        this.app.use(express.urlencoded({ extended: true }));
   
        //MORGAN
        this.app.use(morgan('dev'));

        // CORS
        this.app.use(cors());

        // BODY PARSER
        this.app.use(express.json());

        this.app.use(express.static(path.resolve('build/views')))
        this.app.use(express.static(path.resolve('build/public')))

    }

    routes() {
        this.app.use(this.apiPaths.api, apiRouter);
        this.app.use(this.apiPaths.admin, adminRouter);
        this.app.use(this.apiPaths.buyers, buyersRouter);
        this.app.use(this.apiPaths.registered, registeredRouter);
        this.app.use(this.apiPaths.vollunters, volluntersRouter);
        this.app.use(this.apiPaths.blog, blogRouter);
        this.app.use(this.apiPaths.events, eventsRouter);
        this.app.use(this.apiPaths.stock, stockRouter);
        this.app.use(this.apiPaths.tickets, ticketsRouter);
        this.app.use(this.apiPaths.galleries, galleriesRouter);
        this.app.use(this.apiPaths.products, productsRouter);
        this.app.use(this.mainPaths.main, mainRouter);
        this.app.use(this.pagesPaths.pages, pagesRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}