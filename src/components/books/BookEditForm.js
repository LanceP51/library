import React, { Component } from "react"
import BookManager from "../../Modules/BookManager"
import "./BookForm.css"

class BookEditForm extends Component {
    //set the initial state
    state = {
      title: "",
      sku: "",
        author: "",
        coverPhoto: "",
        archived: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingBook = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedBook = {
        id: this.props.match.params.bookId,
        title: this.state.title,
        sku: this.state.sku,
        author: this.state.author,
        coverPhoto: this.state.coverPhoto,
        archived: false,
      };

      BookManager.update(editedBook)
      .then(() => this.props.history.push("/books"))
    }

    componentDidMount() {
      BookManager.get(this.props.match.params.bookId)
      .then(book => {
          this.setState({
            title: book.title,
            sku: book.sku,
            author: book.author,
            coverPhoto: book.coverPhoto,
            archived: false,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              <label htmlFor="bookName">Book Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="sku"
                value={this.state.sku}
              />
              <label htmlFor="sku">sku</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="author"
                value={this.state.author}
              />
              <label htmlFor="author">author</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="coverPhoto"
                value={this.state.coverPhoto}
              />
              <label htmlFor="coverPhoto">Image url</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingBook}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default BookEditForm