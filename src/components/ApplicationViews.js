import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import BookList from "./books/BooksList";
import PatronList from "./patrons/PatronsList";
import BookDetail from "./books/BookDetails";
import PatronDetail from "./patrons/PatronDetails";
import BookForm from "./books/BookForm";
import PatronForm from "./patrons/PatronForm";
import Login from "./auth/Login";
import BookEditForm from "./books/BookEditForm"
import PatronEditForm from "./patrons/PatronEditForm"

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/books"
          render={props => {
            return this.isAuthenticated() ? (
              <BookList {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/books/new"
          render={props => {
            return this.isAuthenticated() ? (
              <BookForm {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          exact path="/books/:bookId(\d+)"
          render={props => {
            return this.isAuthenticated() ? (
              <BookDetail
                {...props}
                bookId={parseInt(props.match.params.bookId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
  path="/books/:bookId(\d+)/edit" render={props => {
    return <BookEditForm {...props} />
  }}
/>
        <Route
          exact
          path="/patrons"
          render={props => {
            return this.isAuthenticated() ? (
              <PatronList {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/patrons/new"
          render={props => {
            return this.isAuthenticated() ? (
              <PatronForm {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          exact path="/patrons/:patronId(\d+)"
          render={props => {
            return this.isAuthenticated() ? (
              <PatronDetail
                {...props}
                patronId={parseInt(props.match.params.patronId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
  path="/patrons/:patronId(\d+)/edit" render={props => {
    return <PatronEditForm {...props} />
  }}
/>
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
