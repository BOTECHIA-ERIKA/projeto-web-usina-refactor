import { Request, Response } from "express";
import endpoints from './../../../JSON/endpoints.json';

export const getSlash = async (req: Request, res: Response) => {
    try {
        res.status(200).json(endpoints);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};