function randomColor(){
    let gradient = [];
    let x = Math.random();
    x *= 256;
    gradient.push(Math.floor(x));

    x = Math.random();
    x *= 256;
    gradient.push(Math.floor(x));

    x = Math.random();
    x *= 256;
    gradient.push(Math.floor(x));

    x = Math.random();
    x *= 256;
    gradient.push(Math.floor(x));


    x = Math.random();
    x *= 256;
    gradient.push(Math.floor(x));


    x = Math.random();
    x *= 256;
    gradient.push(Math.floor(x));


    return gradient;
}

let firstElementGradient = randomColor();
let secondElementGradient = randomColor();
let thirdElementGradient = randomColor();

let firstElement = document.getElementById("firstElement");
let secondElement = document.getElementById("secondElement");
let thirdElement = document.getElementById("thirdElement");

firstElement.style.background = "linear-gradient(30deg, rgb(" + firstElementGradient[0] + ","+ firstElementGradient[1] +"," + firstElementGradient[2] + "), rgb(" + firstElementGradient[3] + ","+ firstElementGradient[4] +"," + firstElementGradient[5] + "))";
secondElement.style.background = "linear-gradient(30deg, rgb(" + secondElementGradient[0] + ","+ secondElementGradient[1] +"," + secondElementGradient[2] + "), rgb(" + secondElementGradient[3] + ","+ secondElementGradient[4] +"," + secondElementGradient[5] + "))";
thirdElement.style.background = "linear-gradient(30deg, rgb(" + thirdElementGradient[0] + ","+ thirdElementGradient[1] +"," + thirdElementGradient[2] + "), rgb(" + thirdElementGradient[3] + ","+ thirdElementGradient[4] +"," + thirdElementGradient[5] + "))";

firstElement.addEventListener("mouseover", function(){
    document.body.style.background = "linear-gradient(30deg, rgb(" + firstElementGradient[0] + ","+ firstElementGradient[1] +"," + firstElementGradient[2] + "), rgb(" + firstElementGradient[3] + ","+ firstElementGradient[4] +"," + firstElementGradient[5] + "))";
});

secondElement.addEventListener("mouseover", function(){
    document.body.style.background = "linear-gradient(30deg, rgb(" + secondElementGradient[0] + ","+ secondElementGradient[1] +"," + secondElementGradient[2] + "), rgb(" + secondElementGradient[3] + ","+ secondElementGradient[4] +"," + secondElementGradient[5] + "))";
});

thirdElement.addEventListener("mouseover", function(){
    document.body.style.background = "linear-gradient(30deg, rgb(" + thirdElementGradient[0] + ","+ thirdElementGradient[1] +"," + thirdElementGradient[2] + "), rgb(" + thirdElementGradient[3] + ","+ thirdElementGradient[4] +"," + thirdElementGradient[5] + "))";
});