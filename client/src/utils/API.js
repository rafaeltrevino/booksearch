import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyC9f9yvMXZKAl2QjZP_2a83UNnc3px0_c0";

export default {
  searchBooks: function(query) {
    return axios.get(BASE_URL + query + APIKEY);
  },
  saveBook: function(book) {
    return axios.post("/api/books", book);
  }
};
