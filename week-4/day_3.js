const starters = dishes.filter((dish) => dish.course == "Starters")
const entrees = dishes.filter((dish) => dish.course == "Entrees")
const desserts = dishes.filter((dish) => dish.course == "Desserts")



const starterButton = document.getElementById("starterButton")
const entreeButton = document.getElementById("entreeButton")
const dessertButton = document.getElementById("dessertButton")
const menuDiv = document.getElementById("menuDiv")




starterButton.addEventListener("click", () => {
  menuDiv.innerHTML = ""
  starters.map((dish) =>{
  const starterMenu = `
  <ul id = "starters">
    <li>
        <img src = ${dish.imageURL} width = 300px height = 200px> 
        <div> ${dish.title}</div>
        <div> ${dish.description}</div>
        <div> ${dish.price}</div>
    </li>    
  </ul>      
 ` 
  menuDiv.insertAdjacentHTML("beforeend", starterMenu)        
  })
    
})
entreeButton.addEventListener("click", () => {
  menuDiv.innerHTML = ""
  entrees.map((dish) =>{
  const entreesMenu = `
  <ul id = "entrees">
    <li>
        <img src = ${dish.imageURL} width = 300px height = 200px>
        <div> ${dish.title}</div>
        <div> ${dish.description}</div>
        <div> ${dish.price}</div>
    </li>    
  </ul>      
 `
 menuDiv.insertAdjacentHTML("beforeend", entreesMenu) 
 })
}) 
dessertButton.addEventListener("click", () => {
  menuDiv.innerHTML = ""
  desserts.map((dish) =>{
  const dessertsMenu = `
  <ul id = "desserts">
    <li>
        <img src = ${dish.imageURL} width = 300px height = 200px>
        <div> ${dish.title}</div>
        <div> ${dish.description}</div>
        <div> ${dish.price}</div>
    </li>    
  </ul>      
 ` 
 menuDiv.insertAdjacentHTML("beforeend", dessertsMenu)
})
})
