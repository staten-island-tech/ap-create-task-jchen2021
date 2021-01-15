import {DOMSelectors} from "./DOM";

const enter = function(){  
    const userInput = [];
    DOMSelectors.numberSubmit.addEventListener('click', function(){
        userInput.push(DOMSelectors.time.value);
    });    
};

const randomColor = function(){
    function rad(min,max){
        Math.floor(Math.random()*(max-min+1)) + min
    };

    function changeColor(){
        let colorRGB = 'rgb'+'('+rad(0,255)+','+rad(0,255)+','+rad(0,255)+')';
        DOMSelectors.page.style.backgroundColor = colorRGB;
    };

    setInterval(function(){
        changeColor();
    }, enter()); 
}

const randomBackgroundColor= function(){
    enter();
    randomColor();
};

randomBackgroundColor();

/* function push(color){
    let a =[];
    for (let i = 0; i < color; i++){
        a.push(i*2);
    }
    return a;
}
 */

/* push(color);
const showNumber = function(){
    document.querySelector('button').addEventListener("click", push(color));
   }
     */
    
