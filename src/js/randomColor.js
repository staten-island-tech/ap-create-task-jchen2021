import {DOMSelectors} from "./DOM";
let interval;

const showHistory = DOMSelectors.showHistory;
const history = DOMSelectors.history;
const colorHist = []

//get a random color
// const colorPage = DOMSelectors.colorPage;
const rgbId = function (r,g,b){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}; 

const historyArray = function(){
    colorHist.push(rgbId());
    return colorHist;
};
/* 
const randomColor = function(){
    var last = colorHist[colorHist.length -1]
    colorPage.style.backgroundColor = last;
    colorPage.innerHTML= colorHist[colorHist.length -1];
};  */

//set timer


const displayArr = function(){
    showHistory.addEventListener("click", (e) =>{
    e.preventDefault();
    history.innerHTML='';    
    history.innerHTML=historyArray();
    }
  )}

//get the user input time
const testFunction = function(){
    DOMSelectors.numberSubmit.addEventListener('click', function(e){
    e.preventDefault();
    const input = DOMSelectors.time.value;
    const timing = parseInt(input*1000);
    if(interval){ 
    clearInterval(interval);
    }
        interval = setInterval(() => {
        historyArray();
        const testPage = DOMSelectors.testPage;
        testPage.style.backgroundColor = colorHist[colorHist.length -1];
    }, timing);
        
        console.log(timing);

        
    })
}    


const resetButton = function(){ 
    DOMSelectors.reset.addEventListener("click", (e) =>{
        while(colorHist.length > 0){
            colorHist.pop();
        }
      })
}



export {displayArr}; 
export {testFunction};
export {resetButton};