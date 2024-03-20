const todos = document.querySelectorAll(".todo");
const allStatus = document.querySelectorAll(".status");
let draggableTodo = null;


todos.forEach((td)=>{
    td.addEventListener("dragstart", StartMove);
    td.addEventListener("dragend", StopMove);
});

function StartMove(){
    draggableTodo = this;
    // console.log("drag start");
    
}
function StopMove(){
    draggableTodo = null;
    // console.log("drag stop");
    
}

allStatus.forEach((stat)=>{
    stat.addEventListener("dragover", MoveOver);
    stat.addEventListener("dragenter", MoveEnter);
    stat.addEventListener("dragleave", MoveLeave);
    stat.addEventListener("drop", Dropped);
});

function MoveOver(e){
    e.preventDefault();
    // console.log("drag over");
    
}
function MoveEnter(){
    this.style.border = "2px dashed #ccc";
    console.log("drag enter");
    
}
function MoveLeave(){
    console.log("drag leave");
    
}
function Dropped(){
    this.appendChild(draggableTodo);
    console.log("dropped");
    
}