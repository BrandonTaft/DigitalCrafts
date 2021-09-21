const ulID = document.getElementById("ulID")
let request = new XMLHttpRequest()


request.addEventListener("load", function() {
    const result = JSON.parse(this.responseText)
    
    console.log(result.Search)
 
    
    
    const  movieItems = result.Search.map((movie) => {
        return siteItem = `<h1>${movie.Title}</h1>
          <h2>${movie.Title}</h2>
          <img src = "${movie.Poster}"/>
        `
        
    })
    ulID.innerHTML = movieItems.join("")
 
})
request.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=5687779e')
request.send()
