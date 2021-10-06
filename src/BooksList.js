import React from "react";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";

const BooksList = ({books , handleSelect}) => {
    return ( 
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <CurrentlyReading handleSelect={handleSelect} books={books.filter(book => book.shelf === "currentlyReading")} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <WantToRead handleSelect={handleSelect} books={books.filter(book => book.shelf === "wantToRead")} />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <Read handleSelect={handleSelect} books={books.filter(book => book.shelf === "read")} />
              </div>
            </div>
          </div>
          
        </div>
     );
}
 
export default BooksList;