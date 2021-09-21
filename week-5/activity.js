const ulID = document.getElementById("ulID")


let request = new XMLHttpRequest()
request.open('POST',https://endurable-bead-polo.glitch.me/stocks)
request.setRequestHeader('Content-Type', 'application/json')
request.addEventListener('load', function(){
   console.log(this.responseText)
        const stock = JSON.parse(this.responseText)
        const stockItem = `<li>${stock.title}</li>`
        usersUL.insertAdjacentHTML('beforeend', stockItem) 
        console.log(stock)
   
   
   
})


const body = {

   title: string 
   symbol: string 
   price: float
   quantity: int

}

})
request.send(JSON.stringify(body))