import React, {Component} from 'react';
import './booklist.css';
import Book from '../book/book';

class Booklist extends Component {
    render() {
        const list = this.props.books.map((book, i) => <Book {...book} key={i} />);

        console.log(list);

        return (
            <ul className="booklist">
                {list}
            </ul>
        );
    }
}

Booklist.defaultProps = {
    books: []
}

export default Booklist;

/*
{
    "kind": "books#volumes",
    "items": [
     {
      "kind": "books#volume",
      "id": "_ojXNuzgHRcC",
      "etag": "OTD2tB19qn4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
      "volumeInfo": {
       "title": "Flowers",
       "authors": [
        "Vijaya Khisty Bodach"
       ],
      ...
     },
     {
      "kind": "books#volume",
      "id": "RJxWIQOvoZUC",
      "etag": "NsxMT6kCCVs",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
      "volumeInfo": {
       "title": "Flowers",
       "authors": [
        "Gail Saunders-Smith"
       ],
       ...
     },
*/