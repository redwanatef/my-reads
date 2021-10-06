import React from "react";
import * as BooksAPI from './BooksAPI';
import './App.css'

class SearchBooks extends React.Component {
    state = {
        showSearchPage: false,
        books: [],
        shelf: "",
        searchText: ''
    }
    
    componentDidMount() {
        BooksAPI.getAll().then(
            (books) => {
                this.setState({
                    books
                })
            }
        )
    }
    
    
    options = <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
    

    render() {
        console.log(this.state.books );
        return (
            
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.filter(book => (book.title.toLowerCase().includes(this.props.searchText.toLowerCase()) ||
                         book.authors.map((b) => b.toLowerCase()).includes(this.props.searchText.toLowerCase())))
                        .map(
                            book => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                {this.options}
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            )
                        )
                        }
                    </ol>
                </div>
            );
    }
}

export default SearchBooks;