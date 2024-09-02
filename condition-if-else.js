const age=20;
// if(age>=18){
//     console.log('You are an adult');
//     }
// else{
//     console.log('You are a child');
//     }

// ternary operator
//  ? : 
// decision or condition ? true : false


age>=21 ? console.log('You are an adult') : console.log('You are a child');

// let price=500;
// let isLeader=false;
// price = isLeader === true ? 100 : 200;

let price=500;
let isLeader=false;
if(isLeader){
    if(price>1000){
        price=price/2;
    }
    else{
        price=0;
    }
}
else{
    price=price+100;    
}

// price= isLeader ? price>1000 ? price/2 : 0 : price+100;

price= isLeader ?
    price>1000 ? 
        price/2 : 0 
: price+100;

console.log(price);