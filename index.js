var lightButton = document.getElementById("lightButton");

function lightmode(){
    var htmlBody = document.body;
    htmlBody.classList.toggle("light-mode")

}

lightButton.addEventListener("click",lightmode)


var menuButton = document.getElementById("menuButton");

function menuFun(){
    var htmlBody1 = document.body;
    htmlBody1.classList.toggle("visibility")
}

menuButton.addEventListener("click",menuFun)


var buttonUp = document.getElementById("buttonUp");

function toTop(){
    document.documentElement.scrollTo({top:0,behavior:"smooth"})
}

buttonUp.addEventListener("click",toTop)


var buttonWhite = document.getElementById("buttonWhite");
var popUp = document.getElementById("popUp");
var closeButton = document.getElementById("closeButton");

function displayPopUp(){
   popUp.style.display = "flex";
}

function closePopUp(){
    popUp.style.display = "none"; 
 }

 buttonWhite.addEventListener("click",displayPopUp)
 closeButton.addEventListener("click",closePopUp)