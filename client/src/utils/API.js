import axios from "axios";


export default {
    getRepos: function() {
    return axios.get("https://api.github.com/users/mdothman/repos");
  }
}
