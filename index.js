// Define lightmode button by connecting it with the sun icon in navigation
var lightButton = document.getElementById("lightButton");

// Define hamburger menu button by connecting it with the menu icon in navigation
var menuButton = document.getElementById("menuButton");

// Define scroll up button by connecting it with the scroll up icon
var buttonUp = document.getElementById("buttonUp");

// Create a modal to be displayed wnem subscribe button clicked
// Subscribe button
var buttonWhite = document.getElementById("buttonSubscribeTop");
// Modal 
var popUp = document.getElementById("popUp");
var submitButton = document.getElementById("submitButton");
var closeButton = document.getElementById("closeButton");

// Create a function to toggle the light mode
function lightmode(){
    // Assign the html body to a variable
    var htmlBody = document.body;
    // Toggle the light mode
    htmlBody.classList.toggle("light-mode")
}

// Create a function to toggle the visibility
function menuFun(){
    // Assign the html body to a variable
    var htmlBody1 = document.body;
    // Toggle the visibility
    htmlBody1.classList.toggle("visibility")
}

// Create a function to scroll to the top of the page
function toTop(){
    //Scroll the html element to the top:0 coordinate
    document.documentElement.scrollTo({top:0,behavior:"smooth"})
}

// Create a function to display the modal
function displayPopUp(){
    //Show the modal by changing the display style to flex
   popUp.style.display = "flex";
}

// Create a function to close the modal
function closePopUp(){
    //Close the modal by changing the display style to none
    popUp.style.display = "none"; 
}

// Define the click behavior by connecting functions and the buttons
lightButton.addEventListener("click",lightmode)
menuButton.addEventListener("click",menuFun)
buttonUp.addEventListener("click",toTop)
buttonWhite.addEventListener("click",displayPopUp)
submitButton.addEventListener("click",closePopUp)
closeButton.addEventListener("click",closePopUp)