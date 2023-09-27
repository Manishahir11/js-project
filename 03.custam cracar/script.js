let main = document.querySelector(".main");
let crsr = document.querySelector(".cursor");

main,addEventListener("mousemove",function(detels){
 crsr.style.left = detels.x+"px"
 crsr.style.top = detels.y+"px"
})