// show gallery of 6 images in random order, rearranged on button press
// fade in/out transitions one after the other to simulate laying down of cards

// Card images 

const myrioramaImages = [
    './imgs/myriorama1.png',
    './imgs/myriorama2.png',
    './imgs/myriorama3.png',
    './imgs/myriorama4.png',
    './imgs/myriorama5.png',
    './imgs/myriorama6.png',
    './imgs/myriorama7.png',
    './imgs/myriorama8.png',
    './imgs/myriorama9.png',
    './imgs/myriorama10.png',
]

//Elements

const row = document.getElementById('image-row')
const clicker = document.getElementById('button-click')

// Animations

function shuffle() {
    // stop multiple clicks producing many rows of cards
    clicker.removeEventListener('click', shuffle)
    // remove old cards
    slideOut()
    // add new cards
    setTimeout(() => {
    row.classList.remove('slide-out')
    let usedPics = []
    // if image has not been used previously, add it to the row, otherwise skip it
    // and choose a different card
    for (let i = 0; Array.from(row.children).length < 6; i++) {
        let randInt = Math.floor(Math.random() * myrioramaImages.length);
        if (!usedPics.includes(randInt)) {
        let picture = document.createElement('img')
        picture.src = myrioramaImages[randInt]
        picture.classList.add('pre-slide')
        picture.classList.add('card')
        row.appendChild(picture)
        let pictures = Array.from(row.children)
        pictures.forEach(picture => {
                picture.classList.add('slide')
                picture.classList.add('col-md-2')
                row.appendChild(picture)
        })
        usedPics.push(randInt)
    } else {
            continue
        }
        // if the row is empty, don't wait, 
        // but if it has cards, wait for the animation to finish
    }}, Array.from(row.children).length ? 1200: 0)
    clicker.addEventListener('click', shuffle)
}

// remove cards from visibility
function slideOut() {
    let pictures = Array.from(row.children)
    pictures.forEach(picture => {
        picture.classList.remove('slide');
        picture.classList.remove('pre-slide')
        picture.classList.add('slide-out')
        setTimeout(() => {
        picture.remove()
        }, 1000)
    })
    
}

// Event Listeners
shuffle() // show initial row of cards
clicker.addEventListener('click', shuffle)