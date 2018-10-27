import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { search } from '../BooksAPI';

class Search extends React.Component {
  state = {
    books: []
  }

  onChange = async e => {
    const { value } = e.currentTarget;

    if (value === '') { return; }

    let books;

    try {
      books = await search(value);
    } catch(error) {
      // TODO: display error
      console.log('error', error);
    }

    if (!books.hasOwnProperty('error')) {
      this.setState({ books });
    }
  }

  whichShelfIsThisBook = bookId => {
    const book = this.props.books.find(book => book.id === bookId);
    return book ? book.shelf : null;
  }

  render() {
    const { books } = this.state;
    const { shelfs } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search' />
          <div className="search-books-input-wrapper">
            <input onChange={this.onChange} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                id={book.id}
                title={book.title}
                authors={book.authors}
                shelfsList={shelfs}
                shelfName={this.whichShelfIsThisBook(book.id)}
                key={book.id}/>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  shelfs: PropTypes.objectOf(PropTypes.string).isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.string
  })).isRequired,
  loading: PropTypes.bool.isRequired
};

export default Search;
