import { Request, Response } from "express";
import { IdGenerator } from "../../services/IdGenerator";

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

    const {idPost:id=undefined, authorPost:author, checkAnonymous:checkedOk, emailPost:email, contentPost:content} = body;
    
    if(!id || id == undefined){ 
        const idGenerator = new IdGenerator();
        const idPost = idGenerator.generate();
        return idPost;
    }

    if(checkedOk==true){ 
        const authorPost = 'Anonymous';
        const emailPost = '';
    }
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