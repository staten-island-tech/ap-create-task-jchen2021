import {DOMSelectors} from "./DOM";



//get the user input time
const enter = function(){  
    let colors = []
    const userInput = DOMSelectors.time;
    DOMSelectors.numberSubmit.addEventListener('click', function(){
        colors.push(userInput);
    });
    return colors;    
};

//get a random color
const randomColor = function(){
  const colorPage = document.querySelector('.colorPage');
    const rgbId = function (){
        var r = Math.floor(Math.random() *256);
        var g = Math.floor(Math.random() *256);
        var b = Math.floor(Math.random() *256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }   
    colorPage.style.backgroundColor = rgbId();
};

// change color every x seconds
const randomBackgroundColor= function(){
    setInterval(function(){
    randomColor();
}, enter()); 
}

randomBackgroundColor();

export {randomBackgroundColor};