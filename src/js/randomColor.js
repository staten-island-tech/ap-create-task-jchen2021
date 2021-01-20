import {DOMSelectors} from "./DOM";
var interval;
var timing = 50;
var time = DOMSelectors.time.value;
const showHistory = DOMSelectors.showHistory;
const history = DOMSelectors.history;
const colorHist = []

//get a random color
const colorPage = DOMSelectors.colorPage;
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

const randomColor = function(){
    var last = colorHist[colorHist.length -1]
    colorPage.style.backgroundColor = last;
    colorPage.innerHTML= historyArray(last);
};

//set timer
function createInterval(timing){
    interval = setInterval(randomColor(),timing);
    clearInterval(interval);
}

const userInput = function(){  
    timing = parseInt(time*1000);
    createInterval(timing);    
}; 
const displayArr = function(){
    showHistory.addEventListener("click", (e) =>{
    e.preventDefault();
    history.innerHTML='';    
    history.innerHTML=historyArray() + `<br>`;
    }
  )}

//get the user input time
const randomBackgroundColor= function(){
    DOMSelectors.numberSubmit.addEventListener('click', function(e){
        e.preventDefault();
        userInput();
        //setInterval(randomColor(),500)
        //randomColor();
    })
}    

export {randomBackgroundColor};
export {displayArr};
