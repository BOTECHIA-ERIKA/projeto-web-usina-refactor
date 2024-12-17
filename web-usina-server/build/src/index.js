"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = `${Number(process.env.PORT) || Number(3000)}`;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join('public')));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const mainRouter_1 = __importDefault(require("./routes/mainRouter"));
const apiRouter_1 = __importDefault(require("./routes/apiRouter"));
const docsRouter_1 = __importDefault(require("./routes/docsRouter"));
app.use('/', mainRouter_1.default);
app.use('/api', apiRouter_1.default);
app.use('/docs', docsRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map