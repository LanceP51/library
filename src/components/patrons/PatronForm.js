import React, { Component } from 'react';
import PatronManager from '../../Modules/PatronManager';
import './PatronForm.css'

class PatronForm extends Component {
    state = {
        patronName: "",
        cardNumber: "",
        contact: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create Patron      object, invoke the PatronManager post method, and redirect to the full Patron list
    */
    constructNewPatron = evt => {
        evt.preventDefault();
        if (this.state.patronName === "" || this.state.cardNumber === "" || this.state.contact === "") {
            window.alert("Please input all fields");
        } else {
            this.setState({ loadingStatus: true });
            const patron = {
                name: this.state.patronName,
                cardNumber: this.state.cardNumber,
                contact: this.state.contact,
                archived: false,
                libraryId: localStorage.getItem('userId')
            };

            // Create the Patron and redirect user to Patron list
            PatronManager.post(patron)
            .then(() => this.props.history.push("/patrons"));
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
                        id="patronName"
                        placeholder="Patron Name"
                        />
                        <label htmlFor="patronName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="cardNumber"
                        placeholder="Card Number"
                        />
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="contact"
                        placeholder="Contact"
                        />
                        <label htmlFor="contact">Contact</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewPatron}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default PatronForm