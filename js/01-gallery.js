import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerItem = document.querySelector(".gallery");
const itemsMarkup = createItemsMarkup(galleryItems);
galleryContainerItem.insertAdjacentHTML("beforeend",  itemsMarkup);

function createItemsMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                <a class="gallery__link" href="${original.value}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
        })
        .join("");
}

const onContainerClick = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("gallery")) return;
        const source = e.target.dataset.source;
        
    const instance = basicLightbox.create(`
        <img src="${source}"width="800" height="600">`);
        
    instance.show();
};



galleryContainerItem.addEventListener("click", onContainerClick);
