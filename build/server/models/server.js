"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const mainRouter_1 = __importDefault(require("../routes/mainRouter"));
const blogRouter_1 = __importDefault(require("../routes/api/blogRouter"));
const productsRouter_1 = __importDefault(require("../routes/api/productsRouter"));
const eventsRouter_1 = __importDefault(require("../routes/api/eventsRouter"));
const galleriesRouter_1 = __importDefault(require("../routes/api/galleriesRouter"));
const stockRouter_1 = __importDefault(require("../routes/api/stockRouter"));
const ticketsRouter_1 = __importDefault(require("../routes/api/ticketsRouter"));
const volluntersRouter_1 = __importDefault(require("../routes/api/volluntersRouter"));
const buyersRouter_1 = __importDefault(require("../routes/api/buyersRouter"));
const registeredRouter_1 = __importDefault(require("../routes/api/registeredRouter"));
const adminRouter_1 = __importDefault(require("../routes/api/adminRouter"));
const pagesRouter_1 = __importDefault(require("../routes/pages/pagesRouter"));
class Server {
    constructor() {
        this.mainPaths = {
            main: '/',
        };
        this.apiPaths = {
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
        this.pagesPaths = {
            pages: '/pages'
        };
        this.app = (0, express_1.default)();
        this.port = `${Number(process.env.PORT) || 3000}`;
        this.middlewares();
        this.routes();
        this.listen();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(path_1.default.resolve('build/JSON')));
        this.app.use(express_1.default.static(path_1.default.resolve('build/views')));
        this.app.use(express_1.default.static(path_1.default.resolve('build/public')));
    }
    routes() {
        this.app.use(this.apiPaths.admin, adminRouter_1.default);
        this.app.use(this.apiPaths.buyers, buyersRouter_1.default);
        this.app.use(this.apiPaths.registered, registeredRouter_1.default);
        this.app.use(this.apiPaths.vollunters, volluntersRouter_1.default);
        this.app.use(this.apiPaths.blog, blogRouter_1.default);
        this.app.use(this.apiPaths.events, eventsRouter_1.default);
        this.app.use(this.apiPaths.stock, stockRouter_1.default);
        this.app.use(this.apiPaths.tickets, ticketsRouter_1.default);
        this.app.use(this.apiPaths.galleries, galleriesRouter_1.default);
        this.app.use(this.apiPaths.products, productsRouter_1.default);
        this.app.use(this.mainPaths.main, mainRouter_1.default);
        this.app.use(this.pagesPaths.pages, pagesRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map