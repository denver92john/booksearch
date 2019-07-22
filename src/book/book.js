import React, {Component} from 'react';
import './book.css';

export default function Book(props) {
    return (
        <li className="book">
            <h2>{props.volumeInfo.title}</h2>
            <p>{props.volumeInfo.authors}</p>
            
            

            <p>{props.volumeInfo.description}</p>
            <img src={props.volumeInfo.imageLinks.thumbnail} alt="thumbnail" />
        </li>
    );
}

/*

{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(props.saleInfo.retailPrice.amount) }            
<p>{props.saleInfo.retailPrice.amount}</p>            
*/