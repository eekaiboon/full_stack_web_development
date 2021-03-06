var target;
var guess_input_text;
var guess_input;      
var finished = false;   
var guesses = 0;
var colors = ["blue", "cyan", "gold", "grey", "magenta", "orange", "red", "white", "yellow"]

function do_game() {
    var random_number = Math.random() * colors.length;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer;
    alert("Target: " + colors[target]);

    while (!finished) {
        guess_input = prompt("I am thinking of one of these colors:\n\n" +
                        colors.join(", ") + "\n\n" +
                        "What color am I thinking of?");
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess() {
    var guess_index = colors.indexOf(guess_input);
    if (guess_index == -1) {
        alert("Sorry, I don't recognize your color.\n\n" +
                "Please try again.");
        return false;
    }
    if (guess_index > target) {
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically higher than mine.\n\n" +
            "Please try again.");
        return false;
    }
    if (guess_index < target) {
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically lower than mine.\n\n" +
            "Please try again.");
        return false;
    }
    myBody=document.getElementsByTagName("body")[0];
    myBody.style.background = colors[target];
    alert("Congratulations! Your have guessed the color!\n\n" +
        "It took you " + guesses + " guesses to finish the game!\n\n" +
        "You can see the colour in the background.");
    return true;   
}