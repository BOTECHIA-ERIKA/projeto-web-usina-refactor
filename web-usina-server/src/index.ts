import dotenv from 'dotenv';
dotenv.config();
const port = `${Number(process.env.PORT) || Number(3000)}`;


import {Server} from './models/server';

const server = new Server();


