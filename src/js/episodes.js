import {DOMSelectors} from "./DOM";

let episodes = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}
const init = async function (pageNumber){
  const DOMSelectors = {
    grid: document.querySelector(".anime-grid"),
  }
const query = `https://api.jikan.moe/v3/search/anime?q=&page=${pageNumber}&sort=desc&order_by=score&limit=12`;
    try {
        const response = await fetch(query);
        const data = await response.json()
        data.results.forEach((anime) => {
            DOMSelectors.grid.insertAdjacentHTML(
                "beforeend",
                `<div class="anime-card">
                <div class="anime-card-front">
                  <img
                    src="${anime.image_url}"
                    alt=""
                    class="poster"
                  />
                </div>
                <div class="anime-card-back">
                  <h3 class="anime-card-header">${anime.title}</h3>
                  <div class="score-box">
                    <p class="user-score">Community Score</p>
                    <p class="user-score">${anime.score}</p>
                </div>
                            
                  <div class="release-box">
                    <p class="release-date">Released</p>
                    <p class="rating">${anime.rated} </p>
                    <p class="synopsis">${anime.synopsis}</p>
                    <a  class="user-score" href="${anime.url}" target="_blank"> MyAnimeList</a>
                  </div>`
            );
        });    
    } catch (error) {
        console.log(error);
    }
};

init(pageNumber);
