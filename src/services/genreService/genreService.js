import {apiService} from "../apiService/apiService";
import {urls} from "../../constants";

const genreService = {
    getAll: () => apiService.get(urls.genres),
    getById: (id) => apiService.get(urls.genres.byId(id))
};

export {genreService};
