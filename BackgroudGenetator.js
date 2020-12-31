var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var backGround = document.getElementById("gradient");
var random = document.getElementById("random")

function backgroundChange() {
    backGround.style.background = "linear-gradient(to right, " 
    + color1.value + ", " + color2.value + ")";

    css.textContent = backGround.style.background + ";"
    var verbose = document.createElement("p");
    verbose.innerHTML = color1.value;
    css.appendChild(verbose)
}

function randomRGB() {
    var rgb = "rgb(" 
    + Math.floor(Math.random()*255) + ", "
    + Math.floor(Math.random()*255) + ", " 
    + Math.floor(Math.random()*255) + ")";
    return rgb;
}

color1.addEventListener("input", backgroundChange)

color2.addEventListener("input", backgroundChange)

random.addEventListener("click", function(){
    var rgb1 = randomRGB();
    var rgb2 = randomRGB();
    backGround.style.background = "linear-gradient(to right, " 
    + rgb1 + ", " + rgb2 + ")";    
})
