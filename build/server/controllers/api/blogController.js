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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.putItem = exports.postItem = exports.getItem = exports.getAll = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JSONPATH = process.env.JSON_PATH + 'dataPosts.json';
const IdGenerator_1 = require("../../services/IdGenerator");
const promises_1 = __importDefault(require("fs/promises"));
const jsonpath_1 = __importDefault(require("jsonpath"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        }
        else {
            const data = yield promises_1.default.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);
            const blog = jsonpath_1.default.query(jsonData, '$.blog')[0];
            res.status(200).json({ message: 'LIST', result: blog });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
});
exports.getAll = getAll;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        }
        else {
            const data = yield promises_1.default.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);
            const item = jsonpath_1.default.query(jsonData, `$..[?(@.id=='${id}')]`)[0];
            res.status(200).json({ message: 'ITEM', result: item });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
});
exports.getItem = getItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { idPost: id = undefined, authorPost: author, checkAnonymous: checkedOk, emailPost: email, contentPost: content } = body;
    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        }
        else {
            const data = yield promises_1.default.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);
            if (!id || id == undefined) {
                const idGenerator = new IdGenerator_1.IdGenerator();
                body.idPost = idGenerator.generate();
            }
            if (checkedOk == true) {
                body.authorPost = 'Anonymous';
                body.emailPost = '';
            }
            jsonData.push(body);
            yield promises_1.default.writeFile(JSONPATH, JSON.stringify(jsonData, null, 2));
            res.status(201).json({ message: 'CREATE', body });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
});
exports.postItem = postItem;
const putItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        }
        else {
            const data = yield promises_1.default.readFile(JSONPATH, 'utf8');
            const jsonData = JSON.parse(data);
            const index = jsonData.findIndex((item) => item.id === id);
            if (index !== -1) {
                jsonData[index] = Object.assign(Object.assign({}, jsonData[index]), body);
                yield promises_1.default.writeFile(JSONPATH, JSON.stringify(jsonData, null, 2));
                res.status(200).json({ message: 'ITEM Updated', body });
            }
            else {
                res.status(404).json({ message: 'Item not found' });
            }
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
});
exports.putItem = putItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!JSONPATH) {
            throw new Error('JSONPATH is not defined');
        }
        else {
            const data = yield promises_1.default.readFile(JSONPATH, 'utf8');
            let jsonData = JSON.parse(data);
            jsonData = jsonData.filter((item) => item.id !== id);
            yield promises_1.default.writeFile(JSONPATH, JSON.stringify(jsonData, null, 2));
            res.status(200).json({ message: 'ITEM DELETE' });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Error', error: e.message });
    }
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=blogController.js.map