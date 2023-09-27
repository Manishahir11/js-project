 let fr = document.querySelector("h5");
let btn1 =document.querySelector("#btn");
 let removefriend = 0

btn1.addEventListener("click",function(){
    if (removefriend == 0) {
    fr.innerHTML = "Friend"
    fr.style.color="green"
    btn1.innerHTML = "Remove"
    removefriend =1;   
    }
    else{
        fr.innerHTML = "Stranger"
    fr.style.color="red"
    btn1.innerHTML = "Add Friend"
    removefriend =0;   
    }
})


