export const sumList = (list: (number | undefined)[]): number => {
    if (!list || list.length <= 0) {
        return 0;
    } else {
        return list.reduce((a: number, b: number | undefined) => a + (b || 0), 0);
    }
}


export const setDateToday = ():string=>{
    const today = new Date();
    const todayISO = today.toISOString();
    return todayISO;
}