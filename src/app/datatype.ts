export class user
 {
     _id!:string;
     name!:string;
     email!:string;
}
export class Product
{
    _id!:string;
    _rev!:string;
    productName!:string;
    price!:number;
    quantity!:number;
    category!:string;
    imageUrl!:string;
    description!:null;
    totalAmount!:number;
    user!:user;
    products!:[];

    setdata(_productData:any)
    {
        this.productName = _productData.productName;
        this.price = _productData.price;
        this.quantity=_productData.quantity;
        this.category=_productData.category;
        this.imageUrl=_productData.imageUrl;
        this.description=_productData.description;
        this.totalAmount=_productData.totalAmount;
        this.user=_productData.user;
        this.products=_productData.products;
    }
}
