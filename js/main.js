var one = document.getElementById("svgone");
var two = document.getElementById("svgtwo");
var three = document.getElementById("svgthree");
var four = document.getElementById("svgfour");
var five = document.getElementById("svgfive");
var six = document.getElementById("svgsix");
var btn = document.getElementById("btn");
var dice =document.querySelector(".dice");


// dice-----------------------------------------------------


dice.addEventListener("click",function(){

    var num = Math.round(Math.random() * 5 + 1);
    if (num == 1) {
        one.style.visibility = "visible"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 2) {
        one.style.visibility = "hidden"
        two.style.visibility = "visible"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 3) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "visible"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 4) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "visible"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 5) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "visible"
        six.style.visibility = "hidden"
    }
    else if (num == 6) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "visible"
    }

})

// btn----------------------------------------

btn.addEventListener("click", function () {
    var num = Math.round(Math.random() * 5 + 1);
    if (num == 1) {
        one.style.visibility = "visible"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 2) {
        one.style.visibility = "hidden"
        two.style.visibility = "visible"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 3) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "visible"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 4) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "visible"
        five.style.visibility = "hidden"
        six.style.visibility = "hidden"
    }
    else if (num == 5) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "visible"
        six.style.visibility = "hidden"
    }
    else if (num == 6) {
        one.style.visibility = "hidden"
        two.style.visibility = "hidden"
        three.style.visibility = "hidden"
        four.style.visibility = "hidden"
        five.style.visibility = "hidden"
        six.style.visibility = "visible"
    }

});
