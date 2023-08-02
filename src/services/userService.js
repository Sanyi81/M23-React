import {jsonApiService} from "./jsonApiService";
import {urls} from "../constants/urls";

class UserService {
    getAll() {
        return jsonApiService.get(urls.json.users)
    }
};

export const userService = new UserService();