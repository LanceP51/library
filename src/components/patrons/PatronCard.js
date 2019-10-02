import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PatronCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./card1.jpg')} alt="cardScan" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.PatronProp.name}</span></h3>
          <p>Card Number: {this.props.PatronProp.cardNumber}</p>
          <Link to={`/patrons/${this.props.PatronProp.id}/edit`}>
            <button>Edit</button>
          </Link>
          <Link to={`/patrons/${this.props.PatronProp.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PatronCard;