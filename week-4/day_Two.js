const addButton = document.getElementById("addButton")
const textBox = document.getElementById("textBox")
const tasksUl = document.getElementById("tasksUl")
const completedTasksUl = document.getElementById("completedTasksUl")
const removeButton = document.getElementById("removeButton")

addButton.addEventListener("click", function(){
  
    
    const taskName = textBox.value
    const taskLi= document.createElement("li")
    taskLi.innerHTML = taskName
    tasksUl.appendChild(taskLi)
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    taskLi.appendChild(checkbox)
    
    


   
  let removeButton = document.createElement("input")
    removeButton.setAttribute("type","button")
    taskLi.appendChild(removeButton)
    removeButton.innerHTML = ("Remove")
    removeButton.addEventListener("click", function(){
        
        
        console.log("hello")})







})