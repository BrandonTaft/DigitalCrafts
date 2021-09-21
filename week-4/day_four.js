
const articleUL = document.getElementById("articleUL")
news.articles.map((newsArticle) => {                                                 
    const newsItem = `

<ul>
  
  <img id = image src="${newsArticle.urlToImage}" alt="" >
  <li>${newsArticle.title}</li>
  <li>${newsArticle.author}</li>
  <li>${newsArticle.description}</li>
  
 


</ul>

`
 articleUL.insertAdjacentHTML("beforeend", newsItem)
})











 