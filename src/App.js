import React, {  useEffect, useState } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import BooksList from './BooksList';
import SearchBooks from './SearchBooks';


function App (props) {
const [books,setbooks] = useState([]);
const [, setrerender] = useState('ayhagteen')
const [opensearch , setopensearch] = useState(false);
const [searchText , setsearchText] = useState('')

useEffect(() => {
  BooksAPI.getAll().then(
    (books) => {
      setbooks(books);
      })
    },[])

 const handleSearch = (e) => {
  setsearchText(e);
}


const handleSelect =(e , book) => {
    setrerender('')
    book.shelf= e
    console.log(book.shelf)

}

    
    return (
      opensearch ? (
        <div className="search-books">
        <div className="search-books-bar">
            <button className="close-search" onClick={() => setopensearch(false)}>Close</button>
            <div className="search-books-input-wrapper">
                <input 
                type="text"
                placeholder="Search by title or author"
                value={searchText}
                onChange={e => handleSearch(e.target.value)} />
            </div>
        </div>
      <SearchBooks searchText = {searchText} handleSelect={handleSelect} /> 
      </div>
      ) : (
      <div className="app">
        <BooksList books={books} handleSelect={handleSelect} />
        <div className="open-search">
            <button onClick={() => setopensearch(true)} >Add a book</button>
          </div>
      </div> 
    )
    )
}



export default App;
