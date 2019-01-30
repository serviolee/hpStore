import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';
import List from './List.jsx';

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
        <form className="form">
          <h2>Please Log in To Enter the site</h2>
            <label>Enter your name: 
             <input type='text' value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange}/> 
            </label>   
        </form> 
        <ProtectedRoute isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
};

export default Login;