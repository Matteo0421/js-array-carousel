const itemsSlide = document.querySelector('.items-slide');
const botton = document.querySelector('.botton');
const sopra = document.querySelector('.sopra');

sopra.classList.add('hide');

let counterImg = 0;
// 1
const images = [
  './consegna/img/01.webp',
  './consegna/img/02.webp',
  './consegna/img/03.webp',
  './consegna/img/04.webp',
  './consegna/img/05.webp',
];
// 2
for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsSlide.innerHTML += `<img class="img hide" src="${img}"> `
  console.log(img);
  console.log(itemsSlide);
}

const itemsCollection = document.getElementsByClassName('img');

itemsCollection[counterImg].classList.remove('hide');

sopra.addEventListener('click', function (){
  botton.classList.remove('hide');

itemsCollection[counterImg--].classList.add('hide');

if (counterImg === 0){
  sopra.classList.add('hide')
}

itemsCollection[counterImg].classList.remove('hide');

})

botton.addEventListener('click', function (){
  

  sopra.classList.remove('hide');

  itemsCollection[counterImg++].classList.add('hide');
  
  itemsCollection[counterImg].classList.remove('hide');
  
  if (counterImg === images.length - 1){
    botton.classList.add('hide')
  }
  })