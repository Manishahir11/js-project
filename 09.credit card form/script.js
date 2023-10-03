var names = document.querySelector("#name");
var number = document.querySelector("#number");
var valid = document.querySelector("#valid");
var ccv = document.querySelector("#ccv");
var cardNumber = document.querySelector("#card-number");
var expiry = document.querySelector("#expiry");
var cname = document.querySelector("#cname");
var cardccv = document.querySelector("#card-cvv");
var i 
var backside =document.querySelector(".card-back")

// number.addEventListener("click",function(){
//     cardNumber.style.border = "1px solid black"
// })
ccv.addEventListener("click",function(){
    backside.style.transition = "transform linear 1s"
    backside.style.display = "block"
    cardccv.style.border = "2px solid white"
    
})

    number.addEventListener("click",function(){
        backside.style.display = "none"
        cardNumber.style.border = "2px solid white"
        cardNumber.style.borderRadius = "12px"
        expiry.style.border = "none"
        cname.style.border = "none"


    })
    
    names.addEventListener("click",function(){
        cname.style.border = "2px solid white"
        backside.style.display = "none"
        cardNumber.style.border = "none"
        expiry.style.border = "none"
    })
    
     valid.addEventListener("click",function(){
        expiry.style.border = "2px solid white"
        backside.style.display = "none"
        cardNumber.style.border = "none"
        cname.style.border = "none"


    })