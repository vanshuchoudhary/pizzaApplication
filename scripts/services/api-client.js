//http/https call
import URL from '../utils/constant.js'

async function makenetworkcall(){
    try{
        const response=await fetch(URL);    //BLOCK
        const object=await response.json(); //BLOCK
        return object;                      //WRAP PROMISE
    }

    catch(err){
       console.log("there is some problem in API",err);
       throw err;
    }
}


// function makenetworkCall(){
//     const promise=fetch(URL);  //assign to thread
//     console.log('promise is',promise);
//     promise.then(response=>{
//         console.log('response is',response);
//         const promise2=response.json(); //deserialization
//         promise2.then(respone=>{

//         })
//     })
// }

// var makeNetworkCall=async()=>{
//     const promise=await fetch('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
//     const data1=await promise.json();
//      console.log(data1);

//     console.log("in fn");


// }

// makeNetworkCall();
// console.log("out of fn"


export default makenetworkcall;



 