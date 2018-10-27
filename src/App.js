import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './views/Search';
import Home from './views/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

  render() {
    return (
      <Router>
        <div className="app">

          <Route path="/" exact render={() => (
            <Home {...this.state} />
          )} />

          <Route path="/search" render={() => (
            <Search {...this.state} />
          )} />

        </div>
      </Router>
    );
  }
}

export default BooksApp;
