import React, { Component } from "react";
import PatronCard from "./PatronCard";
import PatronManager from "../../Modules/PatronManager";

class PatronList extends Component {
  state = {
    patrons: []
  };

  componentDidMount() {
    PatronManager.getAll().then(patrons => {
      this.setState({
        patrons: patrons
      });
    });
  }

  render() {
    return (
      <>
      <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/patrons/new")}}>
      Add Patron
  </button>
</section>
      <div className="container-cards">
        {this.state.patrons.map(singlePatron =>
          singlePatron.archived === false ? (
            <PatronCard key={singlePatron.id} PatronProp={singlePatron} />
          ) : null
        )}
      </div></>
    );
  }
}

export default PatronList;
