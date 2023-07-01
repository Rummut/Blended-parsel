import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import UnsplashAPI from "./UnspleshAPI";
import { createGalleryCard } from "./create-card"

const services = new UnsplashAPI()

const galleryEl = document.querySelector('.js-gallery')
const formEl = document.querySelector('.js-search-form')

const options = {
  totalItems: 10,
  itemsPerPage: 10,
  visiblePages: 10,
  page: 1,
//   centerAlign: false,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//       '</a>'
//   }
};

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);

async function loadData() {
    try {
        const {total, results} = await services.getPopularImg(1)
        const markup = createGalleryCard(results)

        galleryEl.insertAdjacentHTML("afterbegin", markup)
    } catch (error) {
         console.log(error.message)
    }
}

loadData()

formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    
    const searchQuery = event.target.elements.query.value.trim()
    services.query = searchQuery

    async function getImages() {
        try {
            const { total, results } = await services.getImagesByQuery(1)
            const markup = createGalleryCard(results)
            galleryEl.innerHTML = ''
            galleryEl.insertAdjacentHTML("afterbegin", markup)
        } catch (error) {
            console.log(error.message)
        }
    }

    getImages()
}