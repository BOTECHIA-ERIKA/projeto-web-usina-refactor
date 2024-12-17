import dotenv from 'dotenv';
dotenv.config();

// DOTENV LEVA ATE O CAMINHO DA CARPETA BUILD E DO DIRETORIO JSON + NOME DO ARQUIVO
const JSONPATH: string | undefined = process.env.JSON_PATH + 'dataPosts.json';

import { Request, Response } from "express";
import { IdGenerator } from "../../services/IdGenerator";
import { db } from "../../database/knexDB";
// FS/PROMISES EVITA SOBRESCRITA DE ARQUIVOS DE FORMA FALHA E JSONPATH PACKAGE QUE PERMITE BUSCA DE DADOS EM ARQUIVOS JSON DE FORMA MAIS FACIL E SEGURA
import fs from 'fs/promises';
import jp from 'jsonpath';

export const getAll = async (req: Request, res: Response) => {
    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        } else {
            const data = await fs.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);
            // esta sintaxis pega todos os dataPosts de tipo Blog
            const blog = jp.query(jsonData, '$.blog')[0];
            res.status(200).json({ message: 'LIST', result: blog });
        }
    } catch (e: any) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
};

export const getItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        } else {
            const data = await fs.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);
            const item = jp.query(jsonData, `$..[?(@.id=='${id}')]`)[0];
            res.status(200).json({ message: 'ITEM', result: item });
        }
    } catch (e: any) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
};

export const postItem = async (req: Request, res: Response) => {
    const { body } = req;
    const { idPost: id = undefined, authorPost: author, checkAnonymous: checkedOk, emailPost: email, contentPost: content } = body;

    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        } else {
            const data = await fs.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);

            if (!id || id == undefined) {
                const idGenerator = new IdGenerator();
                body.idPost = idGenerator.generate();
            }

            if (checkedOk == true) {
                body.authorPost = 'Anonymous';
                body.emailPost = '';
            }

            jsonData.push(body);
            await fs.writeFile(JSONPATH, JSON.stringify(jsonData, null, 2));
            res.status(201).json({ message: 'CREATE', body });
        }
    } catch (e: any) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
};

export const putItem = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        } else {
            const data = await fs.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);
            const index = jsonData.findIndex((item: any) => item.id === id);

            if (index !== -1) {
                jsonData[index] = { ...jsonData[index], ...body };
                await fs.writeFile(JSONPATH, JSON.stringify(jsonData, null, 2));
                res.status(200).json({ message: 'ITEM Updated', body });
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        }
    } catch (e: any) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
};

export const deleteItem = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        } else {
            const data = await fs.readFile(JSONPATH, 'utf8');
            let jsonData = JSON.parse(data);
            jsonData = jsonData.filter((item: any) => item.id !== id);
            await fs.writeFile(JSONPATH, JSON.stringify(jsonData, null, 2));
            res.status(200).json({ message: 'ITEM DELETE' });
        }
    } catch (e: any) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
};