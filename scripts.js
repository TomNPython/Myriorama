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

const row = document.getElementById('image-row')
const clicker = document.getElementById('button-click')

console.log(Array.from(row.children))

function clicks() {
    slideOut()
    //row.innerHTML = ''
    setTimeout(() => {
    row.classList.remove('slide-out')
    for (let i = 0; i < 6; i++) {
        let randInt = Math.floor(Math.random() * myrioramaImages.length);
        let picture = document.createElement('img')
        picture.src = myrioramaImages[randInt]
        picture.classList.add('pre-slide')
        row.appendChild(picture)
        let pictures = Array.from(row.children)
        //console.log(pictures)
        pictures.forEach(picture => {
                picture.classList.add('slide')
                picture.classList.add('col-md-2')
                row.appendChild(picture)
        })
        
        // picture.classList.add('post-slide')
        // include check for row including previous array image
    }}, Array.from(row.children).length ? 1200: 0)
}

function slideOut() {
    let pictures = Array.from(row.children)
    // row.classList.add('slide-out')
    //console.log(pictures)
    pictures.forEach(picture => {
        picture.classList.remove('slide');
        picture.classList.remove('pre-slide')
        picture.classList.add('slide-out')
        setTimeout(() => {
        picture.remove()
        }, 1000)
    })
    
}

// Animations:
// at start, images slide off to left
// then images fade in from left

clicker.addEventListener('click', clicks)