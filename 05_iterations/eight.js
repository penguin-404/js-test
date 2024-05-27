// reduce

const myNums = [1,2,3]
const initialValue = 0

const myTotal = myNums.reduce( (acc,currval)=>{
    // console.log(`acc: ${acc} and currval: ${currval}`);
    // return acc+currval
},0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Cap",
        price : 699
    },
    {
        itemName : "Mobile",
        price : 1699
    },
    {
        itemName : "Sunglasses",
        price : 999
    },
    {
        itemName : "Watch",
        price: 89999
    },
    {
        itemName : "Mouse",
        price : 499
    }
]

const priceToPay = shoppingCart.reduce( (acc,item)=> acc+item.price,0 )

console.log(priceToPay);