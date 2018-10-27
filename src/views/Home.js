import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import PropTypes from 'prop-types';

class Home extends React.Component {

  filterBooksOfShelf = (books, shelf) => books.filter(book => book.shelf === shelf)

  render() {
    const { books, shelfs } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.keys(shelfs).map(shelfName => (
              <BookShelf
                key={shelfName}
                title={shelfs[shelfName]}
                books={this.filterBooksOfShelf(books, shelfName)}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  shelfs: PropTypes.objectOf(
    PropTypes.string
  ),
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired
  }))
};

export default Home;
