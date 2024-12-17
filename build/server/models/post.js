"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const IdGenerator_1 = require("./../services/IdGenerator");
class Post {
    constructor(id) {
        this.id = this.checkIdExists(id);
    }
    checkIdExists(id) {
        if (id == null) {
            return new IdGenerator_1.IdGenerator().generate();
        }
        return id;
    }
}
exports.Post = Post;
//# sourceMappingURL=post.js.map