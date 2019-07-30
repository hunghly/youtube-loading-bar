"use strict"
const loadingBarItemEl = document.querySelector(".loading-bar__item");
const button30PercentEl = document.getElementById("30%__button");
const button60PercentEl = document.getElementById("60%__button");
const button90PercentEl = document.getElementById("90%__button");


console.log(button30PercentEl);
console.log(button60PercentEl);
console.log(button90PercentEl);

function buttonPress() {
    let width = 1;
    button30PercentEl.addEventListener("click", function(){
        let loadingBar = setInterval(function(){
            if (width > 30) {
                clearInterval(loadingBar);
            } else {
                width++;
                loadingBarItemEl.style.width = width + "%";
            }
        }, 10);
    })
    button60PercentEl.addEventListener("click", function(){
        let loadingBar = setInterval(function(){
            if (width > 60) {
                clearInterval(loadingBar);
            } else {
                width++;
                loadingBarItemEl.style.width = width + "%";
            }
        }, 10);
    })
    button90PercentEl.addEventListener("click", function(){
        let loadingBar = setInterval(function(){
            if (width > 90) {
                clearInterval(loadingBar);
            } else {
                width++;
                loadingBarItemEl.style.width = width + "%";
            }
        }, 10);
    })
}

buttonPress();


