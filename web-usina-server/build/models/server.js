"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const mainRouter_1 = __importDefault(require("../routes/mainRouter"));
const apiRouter_1 = __importDefault(require("../routes/api/apiRouter"));
class Server {
    constructor() {
        this.mainPaths = {
            main: '/'
        };
        this.apiPaths = {
            api: '/api',
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
        this.app.use(express_1.default.static(path_1.default.join('public')));
    }
    routes() {
        this.app.use(this.apiPaths.api, apiRouter_1.default);
        this.app.use(this.mainPaths.main, mainRouter_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map