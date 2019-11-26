// show gallery of 6 images in random order, rearranged on button press
//fade in/out transitions one after the other to simulate laying down of cards

const myrioramaImages = [
    './imgs/myriorama1.png',
    './imgs/myriorama2.png',
    './imgs/myriorama3.png',
    './imgs/myriorama4.png',
    './imgs/myriorama5.png',
    './imgs/myriorama6.png',
]

var row = document.getElementById('image-row')
var clicker = document.getElementById('button-click')

function clicks() {
    row.innerHTML = ''
    for (let i = 0; i < 6; i++) {
        let randInt = Math.floor(Math.random() * myrioramaImages.length);
        let picture = document.createElement('img')
        picture.src = myrioramaImages[randInt]
        picture.classList.add('col-md-2')
        row.appendChild(picture)
        // include check for row including previous array image
    }
    
}

clicker.addEventListener('click', clicks)