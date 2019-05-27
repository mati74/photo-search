import axios from 'axios';
export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID b87c622116cdec111b480841eb2e445efa20c39e2663fab7ad1d0496be1616cd'
    }
})