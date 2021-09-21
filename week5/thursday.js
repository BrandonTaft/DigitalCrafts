const ulID = document.getElementById("ulid")
const clickMe =document.getElementById("clickMe")
const newsURL ='https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
let storyID = 28078575
const idURL = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`


async function getAllNews(){
   let response = await fetch(newsURL)
   let allNews = await response.json()
   console.log(allNews)
   }

async function getStory(storyID){
    let response = await fetch(idURL)
    let theStory = await response.json()
    console.log(theStory)
   
  
}
 function displayNews(theStory){
     let newsDisplay = `
     <ul>${theStory} </ul>`
   
   
ulID.innerHTML = newsDisplay.join("")   
}


clickMe.addEventListener("click", function(){
getAllNews()
getStory(storyID)
displayNews()

})