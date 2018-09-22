import axios from "axios";

//make sure you don't use fat arrow funcitons
export default {
  search: function () {
    return axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=35.779600%7C-78.638200&gsradius=10000&gslimit=10");
  }
};