//set a variable for code 1
let code1;
//set a variable for code 2
let code2;
//set a variable for code 3
let code3;


// set a constant string for the instructions
const instructions = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

//set constants interctive divs
const instructionsDiv = document.getElementById("instructions-div");
const secretCodeDiv = document.getElementById("secret-code");
const vaultButton = document.getElementById("vault-button");
const backdropDiv = document.getElementById("backdrop");

//use + operator to define variable for code 1
code1 = 5 + 5;
//use * operator to define variable for code 1
code2 = code1 * 4;
//use - operator to define variable for code 1
code3 = code2 - 1;

window.onload = function() {
    instructionsDiv.innerHTML = instructions;
    secretCodeDiv.innerHTML = ` ${code1} - ${code2} - ${code3}`;
}

//add listeners
vaultButton.addEventListener('mouseover', function() {
    // Change the background color of the div when hovering over the button
    backdropDiv.style.backgroundColor = 'black';
    instructionsDiv.style.color = 'white'; 
});

vaultButton.addEventListener('mouseout', function() {
    backdropDiv.style.backgroundColor = '';
    instructionsDiv.style.color = ''; 
});