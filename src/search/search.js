import React, {Component} from 'react';
import './search.css';


function formatParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: "",
            filter: "",
            printType: "all"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let bookSearch = {...this.state};
        console.log(bookSearch);
        const queryString = formatParams(bookSearch);
        console.log(queryString);
        const baseUrl = `https://www.googleapis.com/books/v1/volumes`;
        const apiKey = 'AIzaSyCpjXp4NnEKfYxXLcI2wz6RQO-IiykcbEs';
        const url = `${baseUrl}?key=${apiKey}&${queryString}`;
        console.log(url);

        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong');
                }
                return res.json();
            })
            .then(data => {
                this.setState({
                    q: "",
                    filter: "",
                    printType: "all"
                });
                this.props.handleList(data.items);
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
        
    }

    render() {
        const error = this.state.error
            ? <div className="error">{this.state.error}</div>
            : "";

        return (
            <div>
                {error}
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="search_bar">
                            <span>Search: </span>
                            <input 
                                type="text"
                                name="q"
                                id="search_bar"
                                placeholder="Something"
                                value={this.state.search}
                                onChange={this.handleInputChange}
                            />  
                        </label>
                        <button type="submit">Search</button>
                    </div>
                    <div>
                        <label htmlFor="print_type">
                            <span>Print Type: </span>
                            <select
                                name="printType"
                                id="print_type"
                                value={this.state.printType}
                                onChange={this.handleInputChange}
                            >
                                <option value="all">All</option>
                                <option value="books">Books</option>
                                <option value="magazines">Magazines</option>
                            </select>
                        </label>
                        
                        <label htmlFor="book_type">
                            <span>Book Type: </span>
                            <select
                                name="filter"
                                id="book_type"
                                value={this.state.filter}
                                onChange={this.handleInputChange}
                            >
                                <option value="">No Filter</option>
                                <option value="partial">Partial</option>
                                <option value="full">Full</option>
                                <option value="free-ebooks">Free Ebooks</option>
                                <option value="paid-ebooks">Paid Ebooks</option>
                                <option value="ebooks">Ebooks</option>
                            </select>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;
