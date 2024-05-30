const toggleButton = document.getElementById('toggleButton');
const toggleImage = document.getElementById('toggleImage');
const body = document.body;

toggleButton.addEventListener('click', function () {
    if (toggleImage.src.endsWith('imge/sol.png')) {
        toggleImage.src = 'imge/sese.png';
        body.style.background = "black";
    } else {
        toggleImage.src = 'imge/sol.png';
        body.style.background = "linear-gradient(139deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 37%, rgba(0,212,255,1) 100%)";

    }
});