import {DOMSelectors} from "./DOM"
let anime = [];

function addAnime(text) {
  DOMSelectors.addAnime.addEventListener("click", function () {
    const DOMSelectors = {
    grid: document.querySelector(".anime-grid"),
  }
    const init = async function (){
        const query = `https://api.jikan.moe/v3/search/anime?q=&page=${pageNumber}&sort=desc&order_by=score&limit=12`;
    try {
        const response = await fetch(query);
        const data = await response.json()
        data.results.forEach((anime) => {
        const todo = {
            text,
            checked: false,
            id: `${anime.title}`,
        }
        todoItems.push(anime);
        renderTodo(anime);
        })
    }catch (error) {
        console.log(error);
    }}
    }
}

