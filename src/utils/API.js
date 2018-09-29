import axios from "axios";

//make sure you don't use fat arrow funtions
export default {


  geoSearch: function (lat, lon, radius, limit) {
    console.log(lon, lat);
    let url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=geosearch&gscoord=" + lat + "|" + lon + "&gsradius=" + radius + "&gslimit=" + limit
    console.log(url);
    return new Promise(function (resolve, reject) {
      return axios.get(url)
        .then(function (res) {
          if (res.status === 200) {
            resolve(res);
          } else {
            reject(Error(res.statusText));
          }
        })
    })
  },
  idSearch: function (array) {
    console.log(array);
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&prop=info|extracts&inprop=url&redirects=1&pageids="
    array.forEach(element => {
      url += "|" + element;
    });
    console.log(url);
    return axios.get(url);
  }
};

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=35.789260899999995%7C-78.63376939999999&gsradius=10000&gslimit=10