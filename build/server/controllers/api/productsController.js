"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.putItem = exports.postItem = exports.getItem = exports.getAll = void 0;
const NotFoundError_1 = require("../../errors/NotFoundError");
const knexDB_1 = require("../../database/knexDB");
const IdGenerator_1 = require("../../services/IdGenerator");
const helpers_1 = require("../../helpers/helpers");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbList = yield knexDB_1.db.raw(`
        SELECT posts.*, produto_stock.*, produto_financeiro.*, produto_detalhes.*, midias.*, 
               usuarios.primeiro_nome, usuarios.ultimo_sobrenome, usuarios.username, usuarios.is_active
        FROM posts
        INNER JOIN produto_stock ON posts.id = produto_stock.id_posts
        INNER JOIN produto_financeiro ON produto_financeiro.id_post = produto_stock.id_posts
        INNER JOIN produto_detalhes ON produto_detalhes.id_post = produto_stock.id_posts
        INNER JOIN midias ON midias.id_posts = posts.id
        INNER JOIN usuarios ON posts.AUTOR = usuarios.id;
    `);
        res.status(200).json(dbList);
    }
    catch (error) {
        console.log(error);
        throw new Error();
        if (error.status === 500) {
            res.status(500).send('Internal server error');
        }
        else {
            res.status(400).send('Bad request');
        }
    }
    ;
});
exports.getAll = getAll;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dbList = yield knexDB_1.db.raw(`
            SELECT posts.*, produto_stock.*, produto_financeiro.*, produto_detalhes.*, midias.*, 
                   usuarios.primeiro_nome, usuarios.ultimo_sobrenome, usuarios.username, usuarios.is_active
            FROM posts
            INNER JOIN produto_stock ON posts.id = produto_stock.id_posts
            INNER JOIN produto_financeiro ON produto_financeiro.id_post = produto_stock.id_posts
            INNER JOIN produto_detalhes ON produto_detalhes.id_post = produto_stock.id_posts
            INNER JOIN midias ON midias.id_posts = posts.id
            INNER JOIN usuarios ON posts.AUTOR = usuarios.id
            WHERE posts.id = ${id};
        `);
        if (!dbList || dbList.length === 0 || !dbList[0] || dbList[0].length === 0) {
            throw new NotFoundError_1.NotFoundError();
        }
        else {
            res.status(200).json({ message: 'PRODUTO ENCONTRADO', result: dbList[0] });
        }
    }
    catch (error) {
        if (error instanceof NotFoundError_1.NotFoundError) {
            res.status(404).json({ message: 'Item not found' });
        }
        else {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
});
exports.getItem = getItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const today = new Date();
        const todayISO = today.toISOString();
        const idGenerator = new IdGenerator_1.IdGenerator();
        const codigo = idGenerator.generate();
        const id = req.body.id;
        const id_posts_tipo = 1;
        const titulo = req.body.titulo;
        const content = req.body.content;
        const autor = req.body.autor;
        const created_at = todayISO;
        const updated_at = todayISO;
        const localizacao = req.body.localizacao;
        const is_unique_size = req.body.is_unique_size;
        const inputUnico = req.body.unico;
        const inputPP = req.body.pp;
        const inputP = req.body.p;
        const inputM = req.body.m;
        const inputG = req.body.g;
        const inputGG = req.body.gg;
        const inputXG = req.body.xg;
        const inputXXG = req.body.xxg;
        let unico = null;
        let pp = null;
        let p = null;
        let m = null;
        let g = null;
        let gg = null;
        let xg = null;
        let xxg = null;
        const imgUrl = req.body.imgUrl;
        const setSizeQuantityOrNull = (size, size2Replace) => {
            if (size && size != undefined) {
                size2Replace = size;
                return size2Replace;
            }
            else {
                return size2Replace;
            }
        };
        setSizeQuantityOrNull(inputUnico, unico);
        setSizeQuantityOrNull(inputPP, pp);
        setSizeQuantityOrNull(inputP, p);
        setSizeQuantityOrNull(inputM, m);
        setSizeQuantityOrNull(inputG, g);
        setSizeQuantityOrNull(inputGG, gg);
        setSizeQuantityOrNull(inputXG, xg);
        setSizeQuantityOrNull(inputXXG, xxg);
        const sizesStock = [];
        const setStockSizes = (size, list = []) => {
            if (size !== null) {
                list.push(size);
            }
            return list;
        };
        const stockList = [];
        setStockSizes(unico, stockList);
        setStockSizes(pp, stockList);
        setStockSizes(p, stockList);
        setStockSizes(m, stockList);
        setStockSizes(g, stockList);
        setStockSizes(gg, stockList);
        setStockSizes(xg, stockList);
        setStockSizes(xxg, stockList);
        const totalDaLista = (0, helpers_1.sumList)(stockList);
    }
    catch (error) {
        if (error instanceof NotFoundError_1.NotFoundError) {
            res.status(404).json({ message: 'Item not found' });
        }
        else {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
});
exports.postItem = postItem;
const putItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    res.status(200).json({ message: 'ITEM Updated', body });
});
exports.putItem = putItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'ITEM DELETE' });
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=productsController.js.map