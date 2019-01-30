import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';
import List from './List.jsx';
import "../custom.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // handleChange(e) {
  //   this.setState({
  //     name: e.target.value
  //   });
  // }

  handleKeyDown(e) {
    if(e.keyCode === 13) {
      e.preventDefault();

      this.setState({
        isLoggedIn: true,
      });

      let name = {
        name: e.target.value,
      }

      const options = {
        method: 'POST',
        body: JSON.stringify(name),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      fetch('/users', options)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log('error: ', err))
    }
  }

  render () {
    return (
      <div>
        <form className="container">
          <div className="row justify-content-md-center">
            <h2 className="col-md-auto loginPadding">Please Log in To Enter the site
            </h2>
          </div>
          <div className="row justify-content-md-center">
            <label className="col-md-auto inputPadding">Enter your name: 
              <input type='text' value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange}/> 
            </label>   
          </div>
        </form> 
        <ProtectedRoute isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
};

export default Login;