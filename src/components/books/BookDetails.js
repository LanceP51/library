import React, { Component } from "react";
import BookManager from "../../Modules/BookManager";

class BookDetail extends Component {
  state = {
        title: "",
      sku: "",
      author: "",
      coverPhoto: "",
      archived: false
  };

  handleDelete = () => {
    //invoke the delete function in BookManger and re-direct to the Book list.
    this.setState({ archived: true });
    BookManager.archive(this.props.bookId).then(() =>
      this.props.history.push("/books")
    );
  };

  componentDidMount() {
    // console.log("BookDetail: ComponentDidMount");
    //get(id) from BookManager and hang on to that data; put it into state
    BookManager.get(this.props.bookId).then(book => {
      this.setState({
        title: book.title,
        sku: book.sku,
        author: book.author,
        coverPhoto: book.coverPhoto,
        archived: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={this.state.coverPhoto} alt="book cover"/>
          </picture>
          <h3>Title: <span className="card-petname">{this.state.title}</span></h3>
          <p>Author: {this.state.author}</p>
          <p>Sku: {this.state.sku}</p>
          <button
            type="button"
            disabled={this.state.archived}
            onClick={this.handleDelete}
          >
            Archive Book
          </button>
          <div>
            <p>this is where we should see patrons who have checked out this book</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
