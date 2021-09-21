const ulID = document.getElementById("ulID")
const getAllOrders = document.getElementById("getAllOrders")
const search = document.getElementById("search")
const nextDiv = document.getElementById("nextDiv")
const deleteMe = document.getElementById("deleteMe")
const addNewOrder = document.getElementById("addNewOrder")






function newTextBox()
{
    var removeMe = document.getElementById("search");
    var root = document.body;
    removeMe.parentNode.removeChild(removeMe);
    var addMe = document.createElement("input");
    var addMeToo = document.createElement("button")
    addMe.setAttribute("type","text");
    addMeToo.setAttribute("type","button",);
    addMeToo.textContent = "submit"
    root.appendChild(addMe);
    root.appendChild(addMeToo);
    
    
    
}


getAllOrders.addEventListener("click", function(){
    let request = new XMLHttpRequest()
    request.open('GET','https://troubled-peaceful-hell.glitch.me/orders')
    request.send()

    request.addEventListener('load', function(){                          
        const coffeOrder = JSON.parse(this.responseText)
        let orderItems = coffeOrder.map(function(order){
            console.log(order.email)
            return`
               <ul> ${order.email}</ul>
               <ul> ${order.type}</ul>
               <ul> ${order.size}</ul>
               <ul> ${order.price}</ul>`

        })
    ulID.innerHTML= orderItems.join("")
    })
})

search.addEventListener("click", newTextBox)


deleteMe.addEventListener("click",function(){
     let deleteBTN = document.createElement("button")
     deleteBTN.innerHTML = "Delete"
     document.body.appendChild(deleteBTN)
     let deleteBox = document.createElement("input", Text)
     deleteBox.innerHTML = "Delete"
     document.body.appendChild(deleteBox)
 deleteBTN.addEventListener("click",function(){
     let orderToDelete= "https://troubled-peaceful-hell.glitch.me/orders/deleteBox.value"
     let deleteRequest = new XMLHttpRequest()
     deleteRequest.open("DELETE", orderToDelete)
    deleteRequest.send()
    alert("YOUR ORDER HAS BEEN DELETED!!!")
     })
})

addNewOrder.addEventListener("click", function(){

    let addBTN = document.createElement("button")
     addBTN.innerHTML = "ADD"
     document.body.appendChild(addBTN)
     let addBox = document.createElement("input", Text)
     addBox.innerHTML = "ADD"
     document.body.appendChild(addBox)
 addBTN.addEventListener("click",function(){
     let orderToAdd= "https://troubled-peaceful-hell.glitch.me/orders"
     let addRequest = new XMLHttpRequest()
     addRequest.open("DELETE", orderToDelete)
    addRequest.send()
    alert("YOUR ORDER HAS BEEN DELETED!!!")
     })
})


