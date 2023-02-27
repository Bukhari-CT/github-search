import {API_BASE_URL, SEARCH} from "../utlis/urls";
import axios from "axios";

class GithubSearchService {

  static async getAllUsersByName(userData: object, userOrRepo: string) {
    try {
      const url = `${API_BASE_URL}${SEARCH}/${userOrRepo}?`;
      const {data} = await axios.get(url, {params: userData});
      return data;
    } catch (error) {
      return [];
    }
  }
}

export default GithubSearchService
