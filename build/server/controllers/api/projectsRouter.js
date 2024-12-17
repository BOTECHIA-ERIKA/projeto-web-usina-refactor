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
const IdGenerator_1 = require("../../services/IdGenerator");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'LIST' });
});
exports.getAll = getAll;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    res.status(200).json({ message: 'ITEM ', id: id });
});
exports.getItem = getItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { idPost: id = undefined, authorPost: author, checkAnonymous: checkedOk, emailPost: email, contentPost: content } = body;
    if (!id || id == undefined) {
        const idGenerator = new IdGenerator_1.IdGenerator();
        const idPost = idGenerator.generate();
        return idPost;
    }
    if (checkedOk == true) {
        const authorPost = 'Anonymous';
        const emailPost = '';
    }
    res.status(201).json({ message: 'CREATE', body });
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
//# sourceMappingURL=projectsRouter.js.map