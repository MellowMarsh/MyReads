import React from 'react';
import {Link} from 'react-router-dom';
import Shelf from '../Shelf'; 
import * as BooksAPI from '../../BooksAPI'

class MainPage extends React.Component {
    //Starting book state
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    //Setting up an ajax request to check for when a property of a book has been mounted
    componentDidMount(){
        BooksAPI.getAll()
        .then(resp => {
            console.log(resp);  //To ensure that when a new prop gets mounted, it's printed to the console
            this.setState({books: resp});
        });
    }

    // Updates the state of a book by updating the book and shelf properties
    updateBook= (book, shelf)=> {
        BooksAPI.update(book, shelf)
        .then( resp => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat(book)
            }));
        });
    }

    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              
                <Shelf updateBook={this.updateBook}  name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")} />
                    {/*currently reading*/}
                <Shelf updateBook={this.updateBook} name="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")} />
                    {/*want to read*/}
                <Shelf updateBook={this.updateBook} name="Read" books={this.state.books.filter(b => b.shelf ==="read" )} />
                    {/*read*/}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
            </div>    
        );
    }
}

//Export to render webpage
export default MainPage; 
