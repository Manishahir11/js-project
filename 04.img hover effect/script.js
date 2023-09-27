var cantnar = document.querySelectorAll(".cantenar");
// let crsr = document.querySelectorAll(".cantenar img");
// let cr = document.querySelectorAll

cantnar.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[0].style.opacity = 1
        console.log(val.childNodes)
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[0].style.opacity = 0
    });
    val.addEventListener("mousemove",function(detels){
        val.childNodes[0].style.left = detels.x+"px"
        
    });
});
