import axios from 'axios';

const API_KEY = "51737021-87f818cc1ae3d02e4bfd7c05a"
const BASE_URL = "https://pixabay.com/api/";


export  function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    }
    return axios.get(BASE_URL, {params})
    .then(response => response.data)
}


