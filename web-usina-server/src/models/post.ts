import { IdGenerator } from './../services/IdGenerator';
export class Post {


    private id:string|undefined;

    constructor(id:string|null){
        this.id=this.checkIdExists(id);
    }

    private checkIdExists(id:string|null):string{
        if(id==null){
            return new IdGenerator().generate();
        }
        return id;
    }
}