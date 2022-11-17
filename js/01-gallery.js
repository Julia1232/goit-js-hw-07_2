import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Change code below this line


const gallery = document.querySelector('.gallery');

function makeGallery(items) {
    return items
        .map(el => `<div class="gallery__item">
    <a class="gallery__link" href='${el.original}'>
    <img 
    class="gallery__image"
    src = '${el.preview}' 
    data-source='${el.original}' 
    alt = '${el.description}' >
   </a>
   </div>`)
        .join(" ");
}

const addGallaryMarkup = makeGallery(galleryItems);
gallery.innerHTML = addGallaryMarkup;

gallery.addEventListener("click", showPhoto)


function showPhoto(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
 
    const instance = basicLightbox.create(
        `<img src ="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();

    gallery.addEventListener("keydown", (event) => {
        if (event.code === "Escape")
            instance.close()
    });
}