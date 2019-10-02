import React, { Component } from 'react';
import BookManager from '../../Modules/BookManager';
import './BookForm.css'

class BookForm extends Component {
    state = {
        title: "",
        sku: "",
        author: "",
        coverPhoto: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewBook = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.sku === "" || this.state.author === "" || this.state.coverPhoto === "") {
            window.alert("Please input all fields");
        } else {
            this.setState({ loadingStatus: true });
            const book = {
                title: this.state.title,
                sku: this.state.sku,
                author: this.state.author,
                coverPhoto: this.state.coverPhoto,
                archived: false
            };

            // Create the Book and redirect user to Book list
            BookManager.post(book)
            .then(() => this.props.history.push("/books"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="title"
                        placeholder="Book Title"
                        />
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="sku"
                        placeholder="sku"
                        />
                        <label htmlFor="sku">Sku</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="author"
                        placeholder="Author"
                        />
                        <label htmlFor="author">Author</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="coverPhoto"
                        placeholder="Photo URL"
                        />
                        <label htmlFor="coverPhoto">Photo URL</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewBook}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default BookForm