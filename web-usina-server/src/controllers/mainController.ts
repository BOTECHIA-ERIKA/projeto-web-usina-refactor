import { Request, Response } from "express";

export const getMainCollection = async(req: Request, res: Response) => {
    res.status(200).sendFile('index.html', { root: 'public' });
};

