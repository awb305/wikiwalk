import axios from 'axios';
import { resolve } from 'url';
import { rejects } from 'assert';

export default {

  getFavorites: function (userId) {
    let url ='http://wikiwalking.azurewebsites.net/api/wikiResults/' + userId + '/true';
    return new Promise(function(resolve, reject) {
      return axios.get(url)
        .then(function (res) {
          if(res.status === 200) {
            resolve(res)
          } else {
            rejects(Error(res.statusText));
          }
        });
    });
  }, 

  postFavorite: function (data) {
    let url = 'http://wikiwalking.azurewebsites.net/api/wikiResults';
    return new Promise(function(resolve, reject) {
      return axios.post(url, data)
        .then(function (res) {
          if(res.status === 201) {
            resolve(res)
          } else {
            reject(Error(res.statusText));
          }
        });
    });
  }

}