let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let login = document.getElementById("div1-1")
let signup = document.getElementById("div1-2")
// console.log(login);
// console.log(signup);
login.addEventListener("click",()=>{
    login.style.color = "#ffc800"
    div2.style.display = "block";
    div3.style.display = "none";
    signup.style.color = "white"
})
signup.addEventListener("click",()=>{
    signup.style.color = "#ffc800"
    login.style.color = "white"
    div3.style.display = "block";
    div2.style.display = "none";

})