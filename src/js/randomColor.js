import {DOMSelectors} from "./DOM";
const interval;
const timing = 500;
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
const test = function(){
    setInterval(() => {
        historyArray();
        const testPage = DOMSelectors.testPage;
        testPage.style.backgroundColor = colorHist[colorHist.length -1];
    }, timing);
}
const userInput = function(){ 
    if(interval){ 
    clearInterval(interval);
    }
    interval = test();
}; 


const displayArr = function(){
    showHistory.addEventListener("click", (e) =>{
    e.preventDefault();
    history.innerHTML='';    
    history.innerHTML=historyArray();
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
const testFunction = function(){
    DOMSelectors.numberSubmit.addEventListener('click', function(e){
        e.preventDefault();
        const time = DOMSelectors.time.value;
        timing = parseInt(time*1000);
        userInput();
        console.log(timing);
    })
}    


export {displayArr}; 
export {testFunction};
