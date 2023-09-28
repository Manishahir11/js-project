let arr = [
    { dp: "https://images.unsplash.com/photo-1695556406049-8ca4f2ff854c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80", story: "https://images.unsplash.com/photo-1695338035806-af02c934af38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
    { dp: "https://plus.unsplash.com/premium_photo-1681496294964-50f3bbd7158a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", story: "https://plus.unsplash.com/premium_photo-1695219820032-34cfa7950b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" },
    { dp: "https://plus.unsplash.com/premium_photo-1695207505941-1a331ee19385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", story: "https://images.unsplash.com/photo-1695338035806-af02c934af38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
    { dp: "https://images.unsplash.com/photo-1695556406049-8ca4f2ff854c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80", story: "https://images.unsplash.com/photo-1695338035806-af02c934af38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
]



var culter = ""
var str = document.querySelector(".story")
let full = document.querySelector("#full-screen")
arr.forEach(function (elem, idx) {
    // console.log(elem.dp)
    culter += `
            <div class="carcal">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
});
str.innerHTML = culter;

str.addEventListener("click", function (detel) {
    full.style.display = "block"
    full.style.backgroundImage = `url(${arr[detel.target.id].story})`
    setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"

    },3000)
});
full.addEventListener("click",function(){
    document.querySelector("#full-screen").style.display = "none"
})