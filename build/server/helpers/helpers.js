"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDateToday = exports.sumList = void 0;
const sumList = (list) => {
    if (!list || list.length <= 0) {
        return 0;
    }
    else {
        return list.reduce((a, b) => a + (b || 0), 0);
    }
};
exports.sumList = sumList;
const setDateToday = () => {
    const today = new Date();
    const todayISO = today.toISOString();
    return todayISO;
};
exports.setDateToday = setDateToday;
//# sourceMappingURL=helpers.js.map