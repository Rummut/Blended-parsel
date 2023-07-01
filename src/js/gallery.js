import UnsplashAPI from "./UnspleshAPI";
import { createGalleryCard } from "./create-card"

const services = new UnsplashAPI()

const galleryEl = document.querySelector('.js-gallery')
const formEl = document.querySelector('.js-search-form')

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