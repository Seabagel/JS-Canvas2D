// ALIEN language Brandon
// (10,3)(5,2)( )(9,3)
// SQUARE[index]
// divided by word length, + 0.4, round
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var word = document.getElementById("textbox");
var answer = document.getElementById("answer");

function seedB(num, alp) {
    var numberB = num;
    var alphaB = alp;
    if (alphaB > numberB) alphaB *= 0.35;
    if (numberB > alphaB) numberB *= 1.15;
    var answer = Math.round(alphaB + numberB);
    while (answer >= 10) answer -= 8;
    return Math.abs(answer);
} 

function makeWord(){
    answer.innerHTML = "";
    var seedAlpha = 0;
    for (var x = 0; x < word.value.length; x++) {
        for (var y = 0; y <= alphabet.length; y++) {
            if (word.value[x] == alphabet[y]) {
                seedAlpha += y;
            }
        }
    }
    var ni = 15;
    var nj = 25;
    var counter = 0;
    for (var i = 1; i < ni; i+= ni/5, counter++) {
        for (var j = -1; j < nj; j+= nj/5, counter++) {
            answer.innerHTML += alphabet[counter] + " = ("+ seedB(i, seedAlpha) + ", " + seedB(j, seedAlpha) + ")"  + "<br/>";
            if (alphabet[counter] == "z") break;
        }
        if (alphabet[counter] == "z") break;
    }
}
