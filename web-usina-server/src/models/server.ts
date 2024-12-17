import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import mainRouter from '../routes/mainRouter';

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
    };

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

        this.app.use(express.static(path.join('public')))
    }

    routes() {
        this.app.use(this.apiPaths.api, apiRouter)
;
        this.app.use(this.mainPaths.main, mainRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}