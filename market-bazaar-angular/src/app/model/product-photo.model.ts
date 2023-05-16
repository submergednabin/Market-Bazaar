import { Product } from "./product.model";
export class ProductPhoto {
    private id:number;
    private productPhoto:string;
    private Product;

    constructor(id:number, productPhoto:string, Product:any){
        this.id=id;
        this.productPhoto=productPhoto;
        this.Product=Product;
    }

    getProductPhoto():string{
       return this.productPhoto;
    }

    getProduct(){
        return this.Product;
    }
}
