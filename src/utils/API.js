import axios from "axios";

//make sure you don't use fat arrow funcitons
export default {
  geoSearch: function () {
    return axios.get("https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=35.779600%7C-78.638200&gsradius=10000&gslimit=10");
  },
  idSearch: function (array) {
    console.log(array);
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&prop=info|extracts&inprop=url&redirects=1&pageids="
    array.forEach(element => {
      url += "|" + element;
    });
    console.log(url);
    return axios.get(url);
  }
};