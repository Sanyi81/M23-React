import {apiService} from "../apiService/apiService";
import {urls} from "../../constants";

const albumService = {
    getAll: () => apiService.get(urls.albums)
};

export {albumService};
