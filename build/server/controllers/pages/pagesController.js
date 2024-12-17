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
exports.getPage12 = exports.getPage11 = exports.getPage10 = exports.getPage9 = exports.getPage8 = exports.getPage7 = exports.getPage6 = exports.getPage5 = exports.getPage4 = exports.getPage3 = exports.getPage2 = exports.getPage1 = exports.getPage0 = void 0;
const getPage0 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-0.html', { root: 'build/views' });
});
exports.getPage0 = getPage0;
const getPage1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-1.html', { root: 'build/views' });
});
exports.getPage1 = getPage1;
const getPage2 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-2.html', { root: 'build/views' });
});
exports.getPage2 = getPage2;
const getPage3 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-3.html', { root: 'build/views' });
});
exports.getPage3 = getPage3;
const getPage4 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-4.html', { root: 'build/views' });
});
exports.getPage4 = getPage4;
const getPage5 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-5.html', { root: 'build/views' });
});
exports.getPage5 = getPage5;
const getPage6 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-6.html', { root: 'build/views' });
});
exports.getPage6 = getPage6;
const getPage7 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-7.html', { root: 'build/views' });
});
exports.getPage7 = getPage7;
const getPage8 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-8.html', { root: 'build/views' });
});
exports.getPage8 = getPage8;
const getPage9 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-9.html', { root: 'build/views' });
});
exports.getPage9 = getPage9;
const getPage10 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-10.html', { root: 'build/views' });
});
exports.getPage10 = getPage10;
const getPage11 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-11.html', { root: 'build/views' });
});
exports.getPage11 = getPage11;
const getPage12 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile('page-12.html', { root: 'build/views' });
});
exports.getPage12 = getPage12;
//# sourceMappingURL=pagesController.js.map