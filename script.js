const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPassword = document.querySelector(".password-ui-1");
let secondPassword = document.querySelector(".password-ui-2");

function generatePassword() {
    let shuffled1 = [...characters].sort(() => 0.5 - Math.random());
    let shuffled2 = [...characters].sort(() => 0.5 - Math.random());

    firstPassword.textContent = shuffled1.slice(0, 15).join('');
    secondPassword.textContent = shuffled2.slice(0, 15).join(''); 

}


