import {DOMSelectors} from "./DOM";
import {listen} from "./search";

const init = async function (){
    const DOMSelectors = {
      grid: document.querySelector(".anime-grid"),
    }
  const query = `https://api.jikan.moe/v3/search/anime?q=&page=${pageNumber}&sort=desc&order_by=score&limit=12`;
      try {
          const response = await fetch(query);
          const data = await response.json()
          data.results.forEach((anime) => {
              DOMSelectors.grid.insertAdjacentHTML(
                  "beforeend", text
              );
          });    
      } catch (error) {
          console.log(error);
      }
  };
  listen();
  init(pageNumber);