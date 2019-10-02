import React, { Component } from "react";
import PatronManager from "../../Modules/PatronManager";

class PatronDetail extends Component {
  state = {
    name: "",
    cardNumber: "",
    contact: "",
    archived: true
  };

  handleDelete = () => {
    //invoke the delete function in PatronManger and re-direct to the Patron list.
    this.setState({ archived: true });
    PatronManager.archive(this.props.patronId).then(() =>
      this.props.history.push("/patrons")
    );
  };

  componentDidMount() {
    // console.log("PatronDetail: ComponentDidMount");
    //get(id) from PatronManager and hang on to that data; put it into state
    PatronManager.get(this.props.patronId).then(patron => {
      this.setState({
        name: patron.name,
        cardNumber: patron.cardNumber,
        contact: patron.contact,
        archived: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./card1.jpg")} alt="cardScan" />
          </picture>
          <h3>
            Name:<span className="card-petname">{this.state.name}</span>
          </h3>
          <p>Card Number: {this.state.cardNumber}</p>
          <p>Contact: {this.state.contact}</p>
          <button
            type="button"
            disabled={this.state.archived}
            onClick={this.handleDelete}
          >
            Mark Inactive
          </button>
        </div>
      </div>
    );
  }
}

export default PatronDetail;
