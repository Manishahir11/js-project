var bar = document.querySelector(".bar");
var namv = document.querySelector(".logo");
var navbar = document.querySelector(".nav");
var bar2 = document.querySelector(".bar2")
let itams = document.querySelector(".cantenar");

bar.addEventListener("click",function(){  
    navbar.style.width = "250px"
    itams.style.opacity = "1";
    namv.style.opacity = "1";
    bar2.style.display ="block";
    bar.style.opacity ="0" 
    console.log("hello")
})
bar2.addEventListener("click",function () {
    itams.style.opacity = "0";
    bar2.style.display ="none";
    bar.style.opacity ="1" 
    namv.style.opacity = "0"
    navbar.style.width = "50px"

})