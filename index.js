const image = document.getElementsByTagName('img');
const divs = document.getElementsByClassName('divs')
var beforeImageName = null ;
var beforeImageIndex = null;
var correct = 0;     

onStart();

function onStart() {
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = "none";
        divs[i].setAttribute("onclick", `showImage(${i})`)
    } 
}

function showImage(index) {
    image[index].style.display = "inline"

    setTimeout(() => compare(index), 1000);
}

function compare(index) {
    const imageName = image[index].alt;

   if (beforeImageName === null) {
    beforeImageIndex = index;
    beforeImageName = imageName

   } else if(beforeImageName !== imageName) {
    image[beforeImageIndex].style.display = "none";
    image[index].style.display = "none";

    beforeImageName = null;
    beforeImageIndex = null;

   } else if (beforeImageName === imageName) {
    image[index].style.display = "inline";
     divs[index].removeAttribute("onclick")

    image[beforeImageIndex].style.display = "inline";
    divs[beforeImageIndex].removeAttribute("onclick")

    beforeImageIndex = null;
    beforeImageName = null;
    correct++;

    if (correct === 8) {
        document.getElementById('infos').innerHTML += /*html*/ `
        <h2 id="success">&#127881 You won! &#127881</h2>
        <button onclick="reload()">New Game</button>`;
    }
   }
}

function reload() {
    location.reload()
}