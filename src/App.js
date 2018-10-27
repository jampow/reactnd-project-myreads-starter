import React from 'react';
// import * as BooksAPI from './BooksAPI'
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
    books: [
      {
        id: 'PGR2AwAAQBAJ',
        authors: ['Harper Lee'],
        title: 'To Kill a Mockingbird',
        shelf: 'currentlyReading'
      },
      {
        id: 'yDtCuFHXbAYC',
        authors: ['Orson Scott Card'],
        title: 'Ender\'s Game',
        shelf: 'currentlyReading'
      },
      {
        id: 'uu1mC6zWNTwC',
        authors: ['David McCullough'],
        title: '1776',
        shelf: 'wantToRead'
      },
      {
        id: 'wrOQLV6xB-wC',
        authors: ['J.K. Rowling'],
        title: 'Harry Potter and the Sorcerer\'s Stone',
        shelf: 'wantToRead'
      },
      {
        id: 'pD6arNyKyi8C',
        authors: ['J.R.R. Tolkien'],
        title: 'The Hobbit',
        shelf: 'read'
      },
      {
        id: '1q_xAwAAQBAJ',
        authors: ['Seuss'],
        title: 'Oh, the Places You\'ll Go!',
        shelf: 'read'
      },
      {
        id: '32haAAAAMAAJ',
        authors: ['Mark Twain'],
        title: 'The Adventures of Tom Sawyer',
        shelf: 'read'
      }
    ]
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
