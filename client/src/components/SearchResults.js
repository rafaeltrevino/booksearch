import React, {Component} from "react";
import SearchBox from "./SearchBox";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResults extends Component {

  state = {
    search: "",
    results: [],
    saveBook: ""
  };

  componentDidMount() {
    this.searchBooks("");
  }

  searchBooks = query => {
    API.searchBooks(query)
      .then(res => this.setState({results: res.data.items}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  checkSnippet(snippet) {
    if (snippet === undefined) {
      return "No description.";
    } else {
      return snippet.textSnippet;
    };
  };

  saveBook = event => {
    // event.preventDefault();
    console.log(this)
    let bookId = this.id;
    console.log(bookId)
    let book = this.state.results.find({id: bookId})
    console.log(book)
    API.saveBook({book})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <SearchBox
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList
          results={this.state.results}
          checkSnippet={this.checkSnippet}
          saveBook={this.saveBook}/>
      </div>
    );
  }
}

export default SearchResults;
