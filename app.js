var location1 = Math.round(Math.random()*6)
var location2 = Math.round(Math.random()*6)
var location3 = Math.round(Math.random()*6)
var guess
var guesses = 0
var hits = 0
var isSunk = false

while(isSunk == false){
    guess = prompt("Ready, ain, fire! (enter a number 0-6) : ")

    if(guess < 0 || guess > 6){
        alert("Please enter valid number!");
    } else {
        guesses++;

        if(guess == location1 || guess == location2 || guess == location3){
        hits++
        alert("HIT!");
        if(hits == 3){
            isSunk = true;
            alert("You sank my battleship");
        }
        }       
            else {
                alert("MISS!");
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);