import {DOMSelectors} from "./DOM";
import {randomBackgroundColor} from "./randomColor";

const showHistory = function colorArr(num){
    let array = []
    for(let i = 0; i < num; i++){
      array.push(randomBackgroundColor.rgbColor())
    }
    return array;
}
const displayArr = function(){
    for(var i = 0; i < DomSelectors.historyArr.length; i++){
        showHistory[i].addEventListener("click", showHistory());
    
        
}}
