/*
1. Creare l'array contente le immagini
2. Creo le variabili const querySelector
3. Inserisco le immagini dall'array al miniWrapper con un ciclo
4. Inserisco le funzioni del btnDown e del btnUp
*/


//1.
const archive = [
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
console.log(archive)

//2.
const imageWrapper = document.querySelector('.image_wrapper');
const miniWrapper = document.querySelector('.mini_wrapper');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');

let counterImg = 0;

//3.
archive.forEach((game) =>{
    imageWrapper.innerHTML += `<div class="full hide">
    <img src="${game.image}"></div>`
  miniWrapper.innerHTML += `<div class="thumbnail">
  <img src="${game.image}"></div>`
})

const fullCollection = document.getElementsByClassName('full');
fullCollection[counterImg].classList.remove('hide')


const thumbnailCollection = document.getElementsByClassName('thumbnail');
thumbnailCollection[counterImg].classList.add('active');


btnDown.addEventListener('click', function(){

  fullCollection[counterImg].classList.add('hide')
  thumbnailCollection[counterImg].classList.remove('active');

  counterImg++;

  if(counterImg === archive.length) counterImg = 0;
    fullCollection[counterImg].classList.remove('hide')
    thumbnailCollection[counterImg].classList.add('active');
});

btnUp.addEventListener('click', function(){

  fullCollection[counterImg].classList.add('hide')
  thumbnailCollection[counterImg].classList.remove('active');

  counterImg--;

  if(counterImg < 0) counterImg = archive.length - 1;
    fullCollection[counterImg].classList.remove('hide')
    thumbnailCollection[counterImg].classList.add('active');
  });

