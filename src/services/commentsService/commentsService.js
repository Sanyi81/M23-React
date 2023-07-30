import {apiService} from "../apiService/apiService";
import {urls} from "../../constants";

const commentsService = {
    getAll: () => apiService.get(urls.comments)
};

export {commentsService};
