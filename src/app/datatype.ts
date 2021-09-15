export class user
 {
     _id!:string;
     name!:string;
     email!:string;
}
export class datatype
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

    setdata(datatypeData:any)
    {
        this.productName = datatypeData.productName;
        this.price = datatypeData.price;
        this.quantity=datatypeData.quantity;
        this.category=datatypeData.category;
        this.imageUrl=datatypeData.imageUrl;
        this.description=datatypeData.description;
        this.totalAmount=datatypeData.totalAmount;
        this.user=datatypeData.user;
        this.products=datatypeData.products;
    }
}
