import React from 'react';
import Book from '../components/Book';
import PropTypes from 'prop-types';

const BookShelf = ({ shelfName, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelfName}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, i) => (
          <li key={i}>
            <Book
              id={book.id}
              author={book.author}
              title={book.title}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

export default BookShelf;
