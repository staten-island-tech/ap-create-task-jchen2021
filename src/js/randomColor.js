import {DOMSelectors} from "./DOM";
var time = DOMSelectors.time.value;

//get a random color
const colorPage = DOMSelectors.colorPage;
const rgbId = function (){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

const randomColor = function(){
    colorPage.style.backgroundColor = rgbId();
    colorPage.innerHTML=rgbId();
};

//get the user input time
const userInput = function(){  
    var interval;
    var timing = 2000;
    if(interval){
        console.log('Clear');
        clearInterval(interval);
    }
    console.log('Enter a time interval');
    interval = setInterval(randomColor(),timing);
};


//history
const showHistory = DOMSelectors.showHistory;
const history = DOMSelectors.history;
const historyArr = DOMSelectors.historyArr;
const colorHist = []

//push the rgb# into array
const historyArray = function(){
    for(let i = 0; i < colorHist.length; i++){
        colorHist.push(rgbId());
    }
    return colorHist;
  }
const displayArr = function(){
  history.innerHTML='';
    showHistory.addEventListener("click", (e) =>{
    e.preventDefault();    
    historyArray();
    console.log(historyArray());
    historyArr.innerHtml="Color RGB#" + colorHist;
    }
  )}

// change color every x milliseconds
const randomBackgroundColor= function(){
    DOMSelectors.numberSubmit.addEventListener('click', function(e){
        e.preventDefault();
        const timing = parseInt(time*1000);
        userInput(timing);
    })
}

export {randomBackgroundColor};
export {displayArr};
