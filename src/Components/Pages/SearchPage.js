import React from "react";
//import the book component
import Book from "../Book";
// import all from  BooksAPI
import * as BooksAPI from "../../BooksAPI"; 
//importing Link from library 'react-router-dom'
import { Link } from "react-router-dom";

class SearchPage extends React.Component {
  // Start of book state
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      results: [],
      query: ""
    };
  }

  componentDidMount() {
    //Request to check for when a property of a book has been mounted
    BooksAPI.getAll().then(allBooks => {
      this.setState({ books: allBooks });
    });
  }

  //Update the state after a value is passed as an input in the search bar
  updateQuery = query => {
    this.setState({ query: query }, () => this.submitSearch(query));
  };

  //Submits the inputted query in the search
  submitSearch(query) {
      // This checks if the inputted query is empty or defined
    if (query === "" || query === undefined) {
      return this.setState({ results: [] });
    }
    BooksAPI.search(this.state.query.trim()).then(results => {
      if (results.error) {
        // This empties the results list
        return this.setState({ results: [] });
      } else {
        // The results list displays the desired query
        results.forEach(b => {
          let f = this.state.books.filter(B => B.id === b.id);
          b.shelf = f[0] ? f.shelf : "none"; 
          //No shelf property
         
          if (f[0]) {
            b.shelf = f[0].shelf;
          }
        });
        return this.setState({ results: results });
      }
    });
  }

  // Updating the book and shelf properties
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(_resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat({ book })
      }));
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query} 
              //New event query event 
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key}/>)
            }
          </ol>
        </div>
      </div>
    );
  }
}

//Export to Render Webpage
export default SearchPage; 