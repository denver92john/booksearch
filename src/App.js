import React from 'react';
import './App.css';
import Search from './search/search';
import BookList from './booklist/booklist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /*  
  componentDidMount() {
    const baseUrl = `https://www.googleapis.com/books/v1/volumes`;
    const apiKey = 'AIzaSyCpjXp4NnEKfYxXLcI2wz6RQO-IiykcbEs';
    const url = `${baseUrl}?key=${apiKey}&q=henry`;

    console.log(url);

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  */

  updateBooklist(bookSearch) {
    this.setState({
      books: bookSearch
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1>Google Book Search</h1>
        </header>
        <Search handleList={bookSearch => this.updateBooklist(bookSearch)} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}


export default App;
