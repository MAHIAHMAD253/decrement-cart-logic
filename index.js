function decrementCart (cart , product){

    const upDateCart = cart.map((item =>{

        if( item === product){
            const newUpdateItem ={...item , qty: item.qty - 1}

            return newUpdateItem.qty > 0 ? newUpdateItem :null;
        }

        return item

    })).filter(item => item !== null); // remove null value from the array
return upDateCart
}



let cart = [
    { id: 3, price: 300, discount: 0.1, qty: 2, total: 540 },
    { id: 5, price: 500, discount: 0.05, qty: 2, total: 950 },
    { id: 1, price: 100, discount: 0.1, qty: 1, total: 90 }
];

let product = cart[0];
cart = decrementCart(cart, product);
console.log(cart);


// const inrement = (cart,product)=>{
//     const update = cart.map((item =>{
//         if(item === product){
//             return { ...item , qty: item.qty +1}
//         }
//         return item
//     }))
//     return update
// }