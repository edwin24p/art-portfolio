export interface Work{
    _id:string;
    title: string;
    description: string;
    image:{
        asset:{
            _id:string;
            url:string;
        }
    }
}