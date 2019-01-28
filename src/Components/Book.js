import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 130, height: 192, backgroundImage: `url("${(this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) || "" }")` }}></div>
                    <div className="book-shelf-changer">
                        {/*Call for updateBook method*/}
                        <select value ={this.props.book.shelf || "None"} onChange={(event) => {this.props.updateBook(this.props.book, event.target.value) }}> {}
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            <div className="book-title">{this.props.book.title || "No Author"}</div>
            <div className="book-authors">{(this.props.book.authors && this.props.book.authors[0]) || "No Author" } </div> 
            {/*No Aurthor Exist if this is called*/}
            </div>
            </li>   
        );
    }
}

//Export to render webpage
export default Book; 
            