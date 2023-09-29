let str = "";
let str1 = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
     button.addEventListener("click",(e)=>{
        //   console.log("hello")
        if (e.target.innerHTML == "=") {
            str = eval(str);
            document.querySelector("input").value = str;
        }
        else if(e.target.innerHTML == "++"){
            str = eval(str);
            document.querySelector("input").value = str;

        }
        else if (e.target.innerHTML == "AC") {
            str = "";

            document.querySelector("input").value = str;
            
        } 
        else 
        {
            str += e.target.innerHTML;
            document.querySelector("input").value = str;

        }
     })
})