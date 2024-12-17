import { Request, Response } from "express";

export const getDocsCollection = async(req: Request, res: Response) => {
    res.status(200).send('DOCS Collection');	
};


