var player1 = prompt("Enter the player first name.");
var player2 = prompt("Enter the player second name.");
if (player1 == "" || player1 == null)
    player1 = "Player 1";
if (player2 == "" || player2 == null)
    player2 = "Player 2";

var c = prompt("How many times you want to play?");
if (c == 0 || c == null) c = 5;
document.querySelector("#player1").innerHTML = player1;
document.querySelector("#player2").innerHTML = player2;
var dice1;
var dice2;

var sum1 = 0;
var sum2 = 0;

var count1 = 0;
var count2 = 0;

var newgame = document.querySelector("#newgame");
var reset = document.querySelector("#reset");

newgame.addEventListener("click", function () {
    location.reload();
})

var button1 = document.querySelector("#firstbutton");
var countdisplay1 = document.querySelector("#countfirst");
var sumfirst = document.querySelector("#sumfirst");
var winner = document.querySelector("#winner");
var winnername = document.querySelector("#winnername");
var image1 = document.querySelector("#image1");
winnername.addEventListener("click", function () {
    if ((button1.disabled) && (button2.disabled)) {
        if (sum1 > sum2) {
            winner.innerHTML = player1 + " is the Winner";
            document.querySelector("#player1").style.background = "green";
            document.querySelector("#player2").style.background = "red";
            document.querySelector("#player1").style.color = "black";
            document.querySelector("#player2").style.color = "black";
        }
        else if (sum1 < sum2) {
            winner.innerHTML = player2 + " is the Winner";
            document.querySelector("#player1").style.background = "red";
            document.querySelector("#player2").style.background = "green";
            document.querySelector("#player1").style.color = "black";
            document.querySelector("#player2").style.color = "black";
        }
        else {
            winner.innerHTML = "Match is draw";
            document.querySelector("#player1").style.background = "blue";
            document.querySelector("#player2").style.background = "blue";
            document.querySelector("#player1").style.color = "black";
            document.querySelector("#player2").style.color = "black";

        }
    }
    else {
        winner.innerHTML = "Winner is not diclared";
    }
})
button1.addEventListener("click", function () {
    if (count1 < c) {
        count1++;
        if ((c - count1) == 0) {
            countdisplay1.innerHTML = "Your turn is over..";
            button1.disabled = true;
        }
        else
            countdisplay1.innerHTML = "only " + (c - count1) + " chance left";

        dice1 = Math.random();
        dice1 = Math.floor(dice1 * 6) + 1;
        sum1 += dice1;
        sumfirst.innerHTML = "Sum = " + sum1;
        if (dice1 == 1) {
            image1.src = "one.png";
        }
        if (dice1 == 2) {
            image1.src = "two.png";
        }
        if (dice1 == 3) {
            image1.src = "three.png";
        }
        if (dice1 == 4) {
            image1.src = "four.png";
        }
        if (dice1 == 5) {
            image1.src = "five.png";
        }
        if (dice1 == 6) {
            image1.src = "six.png";
        }
    }
})


var button2 = document.querySelector("#secondbutton");
var countdisplay2 = document.querySelector("#countsecond");
var sumsecond = document.querySelector("#sumsecond");
var image2 = document.querySelector("#image2");
button2.addEventListener("click", function () {
    if (count2 < c) {
        count2++;
        if (c - count2 == 0) {
            countdisplay2.innerHTML = "Your turn is over..";
            button2.disabled = true;
        }
        else
            countdisplay2.innerHTML = "only " + (c - count2) + " chance left";
        dice2 = Math.random();
        dice2 = Math.floor(dice2 * 6) + 1;
        sum2 += dice2;
        sumsecond.innerHTML = "Sum = " + sum2;
        if (dice2 == 1) {
            image2.src = "one.png";
        }
        if (dice2 == 2) {
            image2.src = "two.png";
        }
        if (dice2 == 3) {
            image2.src = "three.png";
        }
        if (dice2 == 4) {
            image2.src = "four.png";
        }
        if (dice2 == 5) {
            image2.src = "five.png";
        }
        if (dice2 == 6) {
            image2.src = "six.png";
        }
    }
})
reset.addEventListener("click", function () {
    button1.disabled = false;
    button2.disabled = false;
    c = prompt("How many times you want to play?");
    count1 = 0;
    count2 = 0;
    sum1 = 0;
    sum2 = 0;
    sumfirst.innerHTML = "Sum = " + sum1;
    sumsecond.innerHTML = "Sum = " + sum2;
    countdisplay1.innerHTML = "You are not Started";
    countdisplay2.innerHTML = "You are not Started";
    document.querySelector("#player1").style.background = "black";
    document.querySelector("#player2").style.background = "black";
    document.querySelector("#player1").style.color = "white";
    document.querySelector("#player2").style.color = "white";
})



