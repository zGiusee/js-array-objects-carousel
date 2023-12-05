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

let i = 0;

// Recupero il contenitore dello slider
let img_slide = document.getElementById('img_slide');


// Definisco i contatori ++ & --
prevBtn.addEventListener('click', function(){
    if(i == 0){
        i = 4;
    }

    i--;

    console.log(i);
});

nextBtn.addEventListener('click', function(){
    if(i == 4){
        i = 0;
    }

    i++;

    console.log(i);
});


images.forEach((elem, index) => {

    let img = `<img src="./${elem.image}" alt="${elem.title}">`
    
    img_slide.innerHTML = img;
    
    console.log(elem, index)
});
