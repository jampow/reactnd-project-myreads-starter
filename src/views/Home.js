import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';

class Home extends React.Component {
  state = {
    shelfs: [
      {
        shelfName: 'Currently Reading',
        books: [
          {
            id: 'PGR2AwAAQBAJ',
            author: 'Harper Lee',
            title: 'To Kill a Mockingbird',
          },
          {
            id: 'yDtCuFHXbAYC',
            author: 'Orson Scott Card',
            title: 'Ender\'s Game',
          }
        ]
      },
      {
        shelfName: 'Want to Read',
        books: [
          {
            id: 'uu1mC6zWNTwC',
            author: 'David McCullough',
            title: '1776',
          },
          {
            id: 'wrOQLV6xB-wC',
            author: 'J.K. Rowling',
            title: 'Harry Potter and the Sorcerer\'s Stone',
          }
        ]
      },
      {
        shelfName: 'Read',
        books: [
          {
            id: 'pD6arNyKyi8C',
            author: 'J.R.R. Tolkien',
            title: 'The Hobbit',
          },
          {
            id: '1q_xAwAAQBAJ',
            author: 'Seuss',
            title: 'Oh, the Places You\'ll Go!',
          },
          {
            id: '32haAAAAMAAJ',
            author: 'Mark Twain',
            title: 'The Adventures of Tom Sawyer',
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelfs.map(shelf => (
              <BookShelf key={shelf.name} {...shelf} />
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

export default Home;
