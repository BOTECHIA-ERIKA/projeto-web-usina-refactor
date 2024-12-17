import { Request, Response } from "express";


export const getPage0= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-0.html',{root: 'build/views'  });    
};

export const getPage1= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-1.html',{root: 'build/views'  });    
};

export const getPage2= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-2.html',{root: 'build/views'  });    
};

export const getPage3= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-3.html',{root: 'build/views'  });    
};

export const getPage4= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-4.html',{root: 'build/views'  });    
};

export const getPage5= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-5.html',{root: 'build/views'  });    
};

export const getPage6= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-6.html',{root: 'build/views'  });    
};

export const getPage7= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-7.html',{root: 'build/views'  });    
};

export const getPage8= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-8.html',{root: 'build/views'  });    
};

export const getPage9= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-9.html',{root: 'build/views'  });    
};
export const getPage10= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-10.html',{root: 'build/views'  });    
};

export const getPage11= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-11.html',{root: 'build/views'  });    
};

export const getPage12= async(req: Request, res: Response) => {
    res.status(200).sendFile('page-12.html',{root: 'build/views'  });    
};