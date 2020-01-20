var y = Math.floor(Math.random() * 100) + 1;

var input = 1;

let calculate;

document.getElementById("submitguess").onclick = function () {

    var x = document.getElementById("numberguess").value;

    if (input <= 10) {
        if (x == y) {
            document.querySelector('.result').textContent = "Congratulation!!! You got it right in " + input + " GUESS!!";
            input = 12;
        } else if (x > y) {
            input++;
            document.querySelector('.result').textContent = "Last guess wass too High!!";
        } else {
            input++;
            document.querySelector('.result').textContent = "Last guess wass too Too Low!!";
        }
        if (input == 2) {
            calculate = x;
        } else {
            calculate += ", " + x;
        }
        document.querySelector('.history').textContent = calculate;

    }

    if (input == 11) {
        document.querySelector('.result').textContent = "You lose !!! THE NUMBER IS" + y + ".";
    }

}