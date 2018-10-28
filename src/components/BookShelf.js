import React from 'react';
import Book from '../components/Book';
import PropTypes from 'prop-types';

const BookShelf = ({ title, books, shelfsList, shelfName, putBookOnShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, i) => (
          <li key={i}>
            <Book
              id={book.id}
              authors={book.authors}
              title={book.title}
              shelfsList={shelfsList}
              shelfName={shelfName}
              putBookOnShelf={putBookOnShelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelfName: PropTypes.string.isRequired,
  shelfsList: PropTypes.objectOf(PropTypes.string).isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
  })),
  putBookOnShelf: PropTypes.func.isRequired
};

export default BookShelf;
