
const button = document.querySelectorAll("button");
const body = document.querySelector("body");

function randomColor(){
    let color ="#";
    for (let i=0; i<6; i++){
        const random = Math.random();
        const bit = (random*16)|0;
        color+=(bit).toString(16);

    };
    return color
};

button.addEventListener("click", function(){
    body.style.backgroundColor = randomColor();
})

body.addEventListener("keydown",  (e) => {
    if(e.code === "Space") {
        body.style.backgroundColor = randomColor();

    }

})
