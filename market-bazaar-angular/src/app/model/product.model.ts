import { ProductCategory } from './product-category.model';
export class Product {
  private productName!: string;
  private brandName !:string;
  private size !:string;
  private amount!: number;
  private quantity!: number;
  private status!: boolean;
  private description!: string;
  private manufacturedDate !:Date;
  private expiryDate !:Date;
  private productCategory;

  constructor(
    productName: string,
    amount: number,
    quantity: number,
    status: boolean,
    description: string,
    productCategory: any
  ) {

    this.productName=productName;
    this.amount=amount;
    this.quantity=quantity;
    this.status=status;
    this.description=description;
    this.productCategory=productCategory;
  }


  getProductName():string{
    return this.productName;
  }

  getAmount():number{
    return this.amount;
  }

  getQuantity():number{
    return this.quantity;
  }

  getStatus(){
    return this.status;
  }
  getDescription():string{
    return this.description;
  }

  getProductCategory():ProductCategory{
    return this.productCategory;
  }
}
