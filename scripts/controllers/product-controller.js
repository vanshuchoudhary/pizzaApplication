//product controller-it is a glue b/w view and model
//controller-i/o view layer
//data exchange b/w view an model 

// document.getElementById('clickme').addEventListener(
//     'click',()=>{
//         alert('hello');
//     }
// )
import productOperations from "../services/product-operation.js";

// Data Exchange B/w View and Model.

async function loadPizzas()
{
    const pizza=await productOperations.loadProducts();
    console.log(pizza);
    for(let pizzas of pizza){
        preparePizzaCard(pizzas);
    }
    
    }


loadPizzas();

{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}



function preparePizzaCard(pizza){
    const outputDiv = document.querySelector('#output');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;";
    colDiv.appendChild(cardDiv);
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = 'card-text';
    pTag.innerText = pizza.desc;

    const button = document.createElement('button');
    button.setAttribute('product-id',pizza.id);
    button.addEventListener('click',addPizzaToCart);  //event bind
    button.innerText = 'Add to Cart';
    button.className = 'btn btn-primary';

    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);


}


function addPizzaToCart(){

    const pizzaId=this.getAttribute('product-id');   //this->reference of curr calling obj
    console.log(pizzaId);
       var pizza=productOperations.searchProducts(pizzaId);
    //  pizza.isPizzaAddedToCart=! pizza.isPizzaAddedToCart;
      if(!pizza.isPizzaAddedToCart)
     {
         this.innerText='remove from cart';
         this.className='btn btn-danger';
         pizza.isPizzaAddedToCart=!pizza.isPizzaAddedToCart;
         productOperations.addToCart(pizza);
      }
     else
     {
        this.innerText='Add to cart';
        this.className='btn btn-primary';
        pizza.isPizzaAddedToCart=!pizza.isPizzaAddedToCart;
        productOperations.removeFromCart(pizza);

     }

    addProductsToBasket();

}

function addProductsToBasket()
{
  const cartProducts=productOperations.getProducts();

  
//   if(pizza.isPizzaAddedToCart)
//   {
//       this.innerText='remove from cart';
//       this.className='btn btn-danger';
//    productOperations.addProductsToBaskets(pizza);
//    pizza.isPizzaAddedToCart=false;
//    }
//  //  else
//  //  {
 //     this.innerText='Add to cart';
 //     this.className='btn btn-primary';
 //     productOperations.removeFromCart(pizza);

 //  }


  const basket=document.querySelector('#Basket');
  const total1 =document.querySelector('#total');
  var sum=0;

  const gs =cartProducts.reduce((acc,currval)=>{acc+=0.18*currval.price;
    return acc;
  },0);
  const gst=Math.floor(gs*100)/100;
  basket.innerText='';
  total1.innerText='';
   for(let pizzas of cartProducts)
   {
     sum+=parseFloat(pizzas.price);
     console.log(sum);
    const li = document.createElement('li');
    li.innerText = `${pizzas.name}:$ ${pizzas.price}`;

    basket.appendChild(li);
    
   }
   const h1=document.createElement('h1');
    h1.innerText=`Subtotal : $${Math.floor(sum*100)/100}`;

    const h2=document.createElement('h2');
    h2.innerText=`Tax : $${gst}`;
    total1.appendChild(h1);
    total1.appendChild(h2);

}

