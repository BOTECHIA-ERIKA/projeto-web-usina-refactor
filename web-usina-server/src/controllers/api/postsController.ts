import { Request, Response } from "express";

export const getSlash = async(req: Request, res: Response) => {
    res.status(200).json({message: 'Hello, CLUB'  });	
};
export const getAll= async(req: Request, res: Response) => {
    res.status(200).json({message: 'LIST'  });    
};

export const getItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    res.status(200).json({message: 'ITEM ', id: id  });    
};


export const postItem= async(req: Request, res: Response) => {
    const {body} = req;
    res.status(201).json({message: 'CREATE' , body });    
};

export const putItem = async(req: Request, res: Response) => {
    const {id} =req.params;
    const {body} = req;
    res.status(200).json({message: 'ITEM Updated', body  });    
};

export const deleteItem = async(req: Request, res: Response) => {
    res.status(200).json({message: 'ITEM DELETE'  });    
};