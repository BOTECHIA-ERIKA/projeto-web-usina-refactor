"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagesController = __importStar(require("../../controllers/pages/pagesController"));
const router = (0, express_1.Router)();
router.get('/educar', pagesController.getPage0);
router.get('/usina', pagesController.getPage1);
router.get('/coletivo', pagesController.getPage2);
router.get('/timeline', pagesController.getPage3);
router.get('/blog', pagesController.getPage4);
router.get('/agenda', pagesController.getPage5);
router.get('/loja', pagesController.getPage6);
router.get('/doar', pagesController.getPage7);
router.get('/apoio-e-patrocinio', pagesController.getPage8);
router.get('/contact', pagesController.getPage9);
router.get('/login', pagesController.getPage10);
router.get('/registration', pagesController.getPage11);
router.get('/recovery', pagesController.getPage12);
exports.default = router;
//# sourceMappingURL=pagesRouter.js.map