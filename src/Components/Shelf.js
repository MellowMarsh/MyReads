import React from 'react';
import Book from './Book'; 


    //When a new prop gets mounted, it's printed to the console
class Shelf extends React.Component {
    componentDidMount() {
        console.log(this);
    }

    render() {
        return (  //Instead of using the hardcoded bookshelf-title, we will use a jsx expression as the 
            //value in the <h2> tag for each shelf in order to read the props that were given to it
            <div> 
                <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name} </h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.books.map((book, key) => <Book updateBook={this.props.updateBook}  book={book} key={key}/>)
                    }
                </ol>
                </div>
                </div>
            </div>
        );
    }
}

// Export to render webpage                
export default Shelf; 