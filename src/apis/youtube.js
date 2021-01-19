import axios from 'axios';
const KEY = 'AIzaSyAj2pOrmfs7sWfigkb7f9d_-npmkAFVUmY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})