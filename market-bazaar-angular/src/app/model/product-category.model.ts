export class ProductCategory {

    private id !:number;
    private categoryName !:string;

    constructor(id:number, categoryName:string){
        this.id=id;
        this.categoryName=categoryName;
    }
    
    getCategoryName():string{
        return this.categoryName;
    }

}
