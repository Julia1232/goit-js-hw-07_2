import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function makeGallery(items) {
    return items
        .map(el => `
    <a class="gallery__link" href='${el.original}'>
    <img 
    class="gallery__image"
    src = '${el.preview}' 
    alt = '${el.description}' >
   </a>`)
        .join(" ");
}

const addGallaryMarkup = makeGallery(galleryItems);
gallery.innerHTML = addGallaryMarkup;

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt' , captionDelay:250});