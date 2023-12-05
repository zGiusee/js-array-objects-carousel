const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Recupero i due bottoni 'previous' & 'next'
let nextBtn = document.getElementById('prev');
let prevBtn = document.getElementById('next');

// Recupero titolo e testo dal dom
let text = document.getElementById('text');
let title = document.getElementById('title');

let currentImg = 1;

// Recupero il contenitore dello slider
let img_slide = document.getElementById('img_slide');

console.log(images[currentImg].image)
// Definisco i contatori ++ & --
prevBtn.addEventListener('click', function(){

    if(currentImg == 0){
        currentImg = 4;
    }

    let img = `<img src="./${images[currentImg].image}" alt="${images[currentImg].title}">`
    let div = `<div class='position-absolute bottom-50 text-right color-white padding-text'><h2>${images[currentImg].title}</h2><h5>${images[currentImg].text}</h5></div>`
    img_slide.innerHTML = img + div;

    
    console.log(currentImg);
    console.log(images[currentImg].image)

    currentImg--;
});

nextBtn.addEventListener('click', function(){

    if(currentImg == 5){
        currentImg = 0;
    }

    let img = `<img src="./${images[currentImg].image}" alt="${images[currentImg].title}">`
    let div = `<div class='position-absolute bottom-50 text-right color-white padding-text'><h2>${images[currentImg].title}</h2><h5>${images[currentImg].text}</h5></div>`
    img_slide.innerHTML = img + div;

    console.log(currentImg);
    console.log(images[currentImg].image)

    currentImg++;
});


