import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerItem = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);
galleryContainerItem.insertAdjacentHTML("beforeend",  itemsMarkup);

function createItemsMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<ul class="gallery">
                <li>
                    <a class="gallery__item" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"          
                            alt="${description}"
                        />
                    </a>
                </li>
            </ul>`;
        })
        .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    fadeSpeed: 300,
    captionType: "alt",
    showCounter: false,
    loop: false,
});