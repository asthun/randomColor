/**
 * Created by Admin on 09.10.2016.
 */

var randomColours = document.getElementById('randomColours');
function changeColour() {

    var randomNum0 = random(0, 250);
    var randomNum1 = random(0, 250);
    var randomNum2 = random(0, 250);
    function random (min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }
    var color = 'rgb(' + randomNum0 + ',' +  randomNum1 + ',' + randomNum2 + ')';
    document.getElementById("randomColours").style.backgroundColor = color;
}
// console.log (changeColour());
randomColours.addEventListener('mouseover', changeColour, false);