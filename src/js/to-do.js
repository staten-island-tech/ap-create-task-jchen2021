const clear = document.querySelector(".clear");


const dateElement = document.getElementById("date");


const list = document.getElementById("list");
    function addToDo(toDo){
        const text = 
    `<li class="item">
        <i class="fa fa-circle-ani" job="complete"></i>
    <p class="text">${toDo}</p>
        <i class="fa fa-trash-o" job="delete"></i>
    </li>`;

    list.insertAdjacentHTML("beforeend",text);
    }
addToDo();

const input = document.getElementById("input");
document.addEventListener("keyup",function(event)){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo{toDo};
        }
        input.value = "";
    }
}