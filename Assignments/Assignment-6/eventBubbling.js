let grandParentEl=document.querySelector("#grandParent");
let ParentEl=document.querySelector("#parent");
let childEl=document.querySelector("#child");


function handleGranParent(){
    console.log("GrandParent clicked!");
}
function handleParent(){
    console.log("Parent clicked!");
}
function handleChild(event){
    console.log("Child clicked!");
    // event.stopPropagation();   Method To Stop Event Bubbling In JavaScript
}


grandParentEl.addEventListener("click",handleGranParent,false);
ParentEl.addEventListener("click",handleParent,false);
childEl.addEventListener("click",handleChild,false);