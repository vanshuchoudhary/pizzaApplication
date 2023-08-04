//product.js contains the structure of pizza
//pizza object-id,name,desc,price

class Product{
    constructor(id , name , desc , price , url){
        this.id = id ;
        this.name = name ;
        this.desc = desc;
        this.price=price;
        this.url = url;
        this.isPizzaAddedToCart=false;
    }
}
export default Product;



