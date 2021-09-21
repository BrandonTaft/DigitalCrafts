const GetAllOrders = 'https://troubled-peaceful-hell.glitch.me/orders'
const ulID = document.getElementById("ulID")



function getOrders(){
    fetch(GetAllOrders)
    .then(orders => {
        return orders.json()
    })
    .then((myOrders) =>{
        console.log(myOrders)
    })
}

getOrders()
