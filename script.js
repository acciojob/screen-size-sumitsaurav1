//your JS code here. If required.
let sizeinfo = document.getElementById("sizeinfo");



window.addEventListener('resize',(e)=>{
    sizeinfo.innerText=`Width: ${window.innerWidth} Height: ${window.innerHeight} `
})
