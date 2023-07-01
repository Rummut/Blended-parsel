import axios from 'axios';

class UnsplashAPI {
  #BASED_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = '';
  async getPopularImg(page) {
    try {
      const response = await axios.get(
        `${this.#BASED_URL}?client_id=${
          this.#API_KEY
        }&page=${page}&query=popular&per_page=12`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getImagesByQuery(page) {
    try {
      const response = await axios.get(
        `${this.#BASED_URL}?client_id=${this.#API_KEY}&page=${page}&query=${
          this.#query
        }&per_page=12`
      );
      return response.data;
    } catch (error) {
        console.log(error.message);
    }
    }
    
    set query(newQuery) {
        this.#query = newQuery
    }
}

export default UnsplashAPI;
