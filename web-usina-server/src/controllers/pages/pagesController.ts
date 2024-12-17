import { Request, Response } from "express";

export const getHome = async(req: Request, res: Response) => {
    res.status(200).sendFile('index.html', { root: 'public' });
};

export const getColetivo = async(req: Request, res: Response) => {
    res.status(200).sendFile('pages/coletivo.html', { root: 'public' });
};
