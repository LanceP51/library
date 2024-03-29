import React, { Component } from "react";
import UserManager from "../../Modules/UserManager";

class Login extends Component {
  // Set initial state
  state = {
    libraryName: "",
    password: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = (e) => {
    e.preventDefault();
    UserManager.getOneUser(this.state.libraryName).then(user => {
      console.log(user)
      if (user[0].password === this.state.password) {
        localStorage.setItem("userId", user[0].id);
      }else(alert("Incorrect password"))
    });

    // localStorage.setItem(
    //   "credentials",
    //   JSON.stringify({
    //     id: this.state.id,
    //   })
    // );
    this.props.history.push("/books");
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="libraryName"
              placeholder="Username"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputEmail">Username</label>

            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
