import React from 'react';
//import the book component
import Book from './Book';
//importing Link from library 'react-router-dom'
import { Link } from 'react-router-dom'
//import all from BooksAPI
import * as BooksAPI from '../BooksAPI'


class Searchpage extends React.Component {
  // Start of book state 
  constructor(props) {
      super(props);
      this.state = {
         books: [],
         results: [],
         query: ""
      }
   }
   //commence request for book has been mounted
   componentDidMount() {
      BooksAPI.getAll()
      .then(allBooks => {
         this.setState({books:allBooks});
      })
   }
  //executeUpdate method for the query
   executeUpdate = (query) => {
      this.setState({query: query}, this.submitSearch);
   }

   submitSearch() {
     //handler for an empty or undefined string
      if(this.state.query === '' || this.state.query === undefined) {
         return this.setState({ results: [] })
      }
      BooksAPI.search(this.state.query.trim()).then(response => {
        //handler for undefined or error with no defined image or book title
         if(response === undefined || response.error) {
            return this.setState({results: [] })
         }
         else {
            response.forEach(bt => {
               let fltr = this.state.books.filter(Bt => Bt.id === bt.id)
               if(fltr[0]) { 
                 bt.shelf = fltr[0] ? fltr[0].shelf: null;}               
            });
            return this.setState({results: response })
         }
      })
   }
  //This method is for updating the book
   updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(response => {
         book.shelf = shelf;
         this.setState(state => ({
            books: state.books.filter(bt => bt.id !== book.id).concat({book})
         }))
      })
    }

   render() {
      return ( 
         <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.state.query}
              //new query event
                onChange={(event) => this.executeUpdate(event.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                 this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key} />)
              }
              </ol>
            </div>
          </div>
      );
   }
} 
//Export to Render Webpage
export default Searchpage;