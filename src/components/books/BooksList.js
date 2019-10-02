import React, { Component } from 'react'
import BookCard from './BookCard'
import BookManager from '../../Modules/BookManager'

    class BookList extends Component {
        state = {
            books: [],
        }

    componentDidMount(){
        BookManager.getAll()
        .then((books) => {
            this.setState({
                books: books
            })
        })
    }

    render(){
        return(
            <>
            <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/books/new")}}>
      Store Book
  </button>
</section>
            <div className="container-cards">
                {this.state.books.map(singleBook =>
                singleBook.archived===false? <BookCard key={singleBook.id} BookProp={singleBook} />: null)}
            </div></>
        )
    }
}

export default BookList