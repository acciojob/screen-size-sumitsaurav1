//your JS code here. If required.
let height = document.getElementById("width");
let width = document.getElementById("height")


window.addEventListener('resize',(e)=>{
    width.innerHTML=window.innerWidth;
    height.innerText=window.innerWidth;
})
