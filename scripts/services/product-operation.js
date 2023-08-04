//contains the logic for fetching adding sorting,deletion,update
//it talk to network layer to bring the json and convert json into objects vice-versa

import Product from "../models/product.js";
import makenetworkcall from "./api-client.js";

const productOperations = {

    pizzas:[],
    carts:[],

     addToCart(product)
    {
         this.carts.push(product);
    },

     removeFromCart(product){
          this.carts= this.carts.filter((p)=>p.id!=product.id);
    },

     async loadProducts (){
        const pizzas = await makenetworkcall();

        const pizzaArray = pizzas['Vegetarian'];
        console.log(pizzaArray);
        const productsArray = pizzaArray.map(pizza =>{
            const currPizza = new Product(pizza.id , pizza.name , pizza.menu_description , pizza.price , pizza.assets.product_details_page[0].url);
            return currPizza;
        });
        console.log(productsArray);
        this.pizzas=productsArray;
        return productsArray;
    },

     searchProducts(id)
    {
        const pizza=this.pizzas.find((currPizza)=>currPizza.id==id);
        // pizza.isPizzaAddedToCart=true; 
        return pizza;
        
    },

    getProducts()
    {
        // const productInBasket=this.pizzas.filter((p)=>p.isPizzaAddedToCart);
        // return productInBasket;

        // this.carts=this.pizzas.filter((p)=>p.isPizzaAddedToCart);
        // this.carts.isPizzaAddedToCart=false;
        return this.carts;


    }




    // addToCart(){
    //     addEventListener('onclick',addingToCart(sum){

    //          const op1=document.getElementsByClassName('card');
    //          op1.innerText=sum+1;
    //     })
    // }

   
}


export default productOperations; 












