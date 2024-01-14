var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');  
var button = document.querySelector('button');

function updateColor(){
    body.style.background = 
    'linear-gradient(to right, ' 
    + color1.value 
    + ', ' 
    + color2.value 
    + ')';
    css.textContent = body.style.background + '';
}

function randomValue(){
    var stringColor= '#'
    for (i=0; i<6; i++){
        stringColor+=Math.floor(Math.random()*16).toString(16);
    };
    return stringColor
};

function randomColor(){
    color1.value = randomValue();
    color2.value = randomValue();
    updateColor();
};

updateColor();
css.textContent = body.style.background + '';

color1.addEventListener('input', updateColor);

color2.addEventListener('input', updateColor);

button.addEventListener('click', randomColor);