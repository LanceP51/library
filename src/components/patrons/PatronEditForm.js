import React, { Component } from "react"
import PatronManager from "../../Modules/PatronManager"
import "./PatronForm.css"

class PatronEditForm extends Component {
    //set the initial state
    state = {
      patronName: "",
      cardNumber: "",
        contact: "",
        archived: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingPatron = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedPatron = {
        id: this.props.match.params.patronId,
        name: this.state.patronName,
        cardNumber: this.state.cardNumber,
        contact: this.state.contact,
        archived: false
      };

      PatronManager.update(editedPatron)
      .then(() => this.props.history.push("/patrons"))
    }

    componentDidMount() {
      PatronManager.get(this.props.match.params.patronId)
      .then(patron => {
          this.setState({
            patronName: patron.name,
            cardNumber: patron.cardNumber,
            contact: patron.contact,
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
                id="patronName"
                value={this.state.patronName}
              />
              <label htmlFor="PatronName">Patron Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="cardNumber"
                value={this.state.cardNumber}
              />
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="contact"
                value={this.state.contact}
              />
              <label htmlFor="contact">Contact</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingPatron}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default PatronEditForm