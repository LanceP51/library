import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BookCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.props.BookProp.coverPhoto} alt="book-img" />
          </picture>
          <h3>Title: <span className="card-petname">{this.props.BookProp.title}</span></h3>
          <p>Author: {this.props.BookProp.author}</p>
          <Link to={`/books/${this.props.BookProp.id}/edit`}>
            <button>Edit</button>
          </Link>
          <Link to={`/books/${this.props.BookProp.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BookCard;