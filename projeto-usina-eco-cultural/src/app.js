import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mainRouter from './router/mainRouter.js';
import authRouter from './router/authRouter.js';
import pagesRouter from './router/pagesRouter.js';
import { error404, errorHandler } from './middlewares/errorMiddleware.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('client')));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', mainRouter);
app.use('/users', authRouter)
app.use('/pages', pagesRouter);
// Middleware de tratamento de erros
app.use(errorHandler);
app.use('*', error404);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});