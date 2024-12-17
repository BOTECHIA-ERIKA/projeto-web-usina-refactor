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
exports.getApi = exports.getMain = void 0;
const getMain = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('index.html', { root: 'build/public' });
});
exports.getMain = getMain;
const getApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('api.html', { root: 'build/public' });
});
exports.getApi = getApi;
//# sourceMappingURL=mainController.js.map