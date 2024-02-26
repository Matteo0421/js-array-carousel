const itemsSlide = document.querySelector('.items-slide');
const bottom = document.querySelector('.bottom');
const top = document.querySelector('.top');

// 1
const images = [
  'consegna/img/01.webp',
  'consegna/img/02.webp',
  'consegna/img/03.webp',
  'consegna/img/04.webp',
  'consegna/img/05.webp',
];

// 2
for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsSlide.innerHTML += `<img class="img hide" scr=" ${img} "> `
  console.log(img);
  console.log(itemsSlide);
}