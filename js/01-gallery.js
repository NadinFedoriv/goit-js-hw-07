import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems
 .map(({preview, original, description}) => 
  `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
    </li>`)
.join('');
};

galleryList.insertAdjacentHTML("beforeend", createGallery(galleryItems));

galleryList.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery__image")){
        return;
    }
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src = "${evt.target.dataset.source}"width="1140" height="740">
    </div>`,
    {
        onShow: (instance) => {
            document.addEventListener('keydown', (onKey) )
        },
    
        onClose: (instance) => {
            document.removeEventListener('keydown', (onKey) )
        }
    }
    );

instance.show();

function onKey(event) {
 if (event.key === 'Escape') {
instance.close();
    }
};
};
