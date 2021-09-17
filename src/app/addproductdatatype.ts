export class Addproductdatatype {
    _id!: string;
    _rev!: string;
    productName!: string;
    price!: number;
    quantity!: string;
    imageUrl!: string;

    setdata(addProductData: any) 
    {
      this.productName=addProductData.productName;
      this.price=addProductData.price;
      this.quantity=addProductData.quantity;
      this.imageUrl=addProductData.imageUrl;
    }
}

