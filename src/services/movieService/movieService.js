import {apiService} from "../apiService/apiService";
import {urls} from "../../constants";

const movieService = {
    getAll: () => apiService.get(urls.movies),
    getById: (id) => apiService.get(urls.movies.byId(id))
};

export {movieService};
