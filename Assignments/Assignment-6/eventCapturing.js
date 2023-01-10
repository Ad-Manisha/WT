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
    //event.stopPropagation();   Method To Stop Capture Bubbling In JavaScript
}


grandParentEl.addEventListener("click",handleGranParent,true);
ParentEl.addEventListener("click",handleParent,true);
childEl.addEventListener("click",handleChild,true);