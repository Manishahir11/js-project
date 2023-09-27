let pas = document.querySelector("#password");
let check = document.querySelector("#check")


check.addEventListener("click",function() {

    if(pas.type=="password"){
    pas.type="text"
}
else{
    pas.type="password"

}
})