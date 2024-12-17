import { Request, Response } from "express";


export const getMain= async(req: Request, res: Response) => {
    res.status(200).sendFile('index.html',{root: 'build/public'  });    
};


export const getApi =async(req: Request, res: Response) => {
    res.status(200).sendFile('api.html',{root: 'build/public'  });    
};