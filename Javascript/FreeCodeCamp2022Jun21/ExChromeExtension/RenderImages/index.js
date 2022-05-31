
// Create a function that renders the three tema images

const imgs = [
    "images/apple.PNG",
    "images/banana.PNG",
    "images/coconut.PNG",
    "images/watermelon.PNG"
];

imgContainerEl = document.getElementById("img-container-el");
console.log(imgContainerEl);

function renderImg(imgPaths){
    for(let i = 0; i < imgPaths.length; i++){
        imgContainerEl.innerHTML +=
        `
        <img class="fruit-img" src=${imgPaths[i]}>
        `
    }
}

renderImg(imgs);
