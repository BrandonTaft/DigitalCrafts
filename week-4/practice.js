
const firstNameBox = document.getElementById("firstNameBox")
const lastNameBox = document.getElementById("lastNameBox")
const submitButton = document.getElementById("submitButton")
const firstDiv = document.getElementById("firstDiv")




submitButton.addEventListener("click", function(){
    const firstName = firstNameBox.value
    const lastName = lastNameBox.value
    console.log(firstName)

    const newDiv = `
    
    ${firstName} ${lastName}
    
    
    `

    firstDiv.innerHTML += newDiv
})



  
