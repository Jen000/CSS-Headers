document.addEventListener("load", run()) //wait for all the html elements to be loaded in before they can run
document.cookie = "SameSite=Strict"


function run() {
document.getElementById("user_input").addEventListener("input", showInput);
    
//change the "Major" text to the users input
function showInput() {
    console.log("Hi, i made it here")
    var userInput = document.getElementById("user_input").value;
    document.getElementById("major").innerHTML = userInput;
    }
}