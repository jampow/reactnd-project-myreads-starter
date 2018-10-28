import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './views/Search';
import Home from './views/Home';

class BooksApp extends React.Component {
  state = {
    shelfs: {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want To Read',
      read: 'Read'
    },
    books: [],
    loading: true
  }

  componentDidMount = async () => {
    const books = await BooksAPI.getAll()
    this.setState({
      books,
      loading: false
    })
  }

  putBookOnShelf = (book, shelf) => {
    this.setState(prev => {
      const isUpdate = prev.books.find(b => b.id === book.id);
      let books;

      if (isUpdate) {
        books = prev.books.map(b => b.id === book.id ? { ...b, shelf } : b);
      } else {
        books = [ ...prev.books, { ...book, shelf }];
      }

      return { ...prev, books };
    }, async () => {
      try {
        await BooksAPI.update(book, shelf)
      } catch(err) {
        console.log(err)
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="app">

          <Route path="/" exact render={() => (
            <Home
              {...this.state}
              putBookOnShelf={this.putBookOnShelf} />
          )} />

          <Route path="/search" render={() => (
            <Search
              {...this.state}
              putBookOnShelf={this.putBookOnShelf} />
          )} />

        </div>
      </Router>
    );
  }
}

export default BooksApp;
