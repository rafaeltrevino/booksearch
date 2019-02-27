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
    this.searchBooks("The Cay");
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

  checkThumbnail

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
        />
      </div>
    );
  }
}

export default SearchResults;
