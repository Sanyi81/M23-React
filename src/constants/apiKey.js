import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/find/external_id',
    params: {external_source: ''},
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmViOWRkNDU5OWY1M2JhMzlhYmFlNzcwYjMyOGMwYyIsInN1YiI6IjYzNGE1YzAyZTI2M2JiMDA5YzRmMzBmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ixMf1mylZoetOTk2iC3MKQ6C-_L_146BQzDRS0YKG5Y'
    }
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });