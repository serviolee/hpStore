import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import preload from '../../../test_data.json';
import ListItem from './ListItem.jsx';

{/*<pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Guest',
      users: [],
      view: '',
      filter: '',
      products: [],
    };

    this.handleSort = this.handleSort.bind(this);
    this.getLastUser = this.getLastUser.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);

  }

  componentDidMount() {
    this.getLastUser()
  }

  getLastUser(){
   const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, "/"',
        'Content-Type': 'application/json'
      }
    }
    fetch('/users/last', options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          userName: data.name 
        })
      })
      .catch(err => console.log('error: ', err))
  }
  
  handleSort(e) {
    this.setState({
      filter: e.target.value
    })
  }

  getAllUsers() {
   const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, "/"',
      }
    }
    fetch('/users', options)
      .then(res => res.json())
      .then(data => console.log(data))
      .then(data => {
        this.setState({
          users: data
        })
      })
      .catch(err => console.log('error: ', err))
  }

  render() {
    return (
      <div>
        {/*<Navbar />*/}
        <nav>
          <h1>Welcome {this.state.userName}!</h1>
            <label>Sort by
              <select onChange={this.handleSort}>
                <option> 
                price   
                </option>
                <option>
                time
                </option>
                <option>
                name
                </option>
              </select>
            </label><br/>
          <button onClick={this.getAllUsers}>See all users
          </button>
        </nav>
        <div>
          {preload.data.map(item => (
            <div key={item.product_id} className="container">
              <div className="row justify-content-center loginPadding">
              <Link to={`/products/${item.product_id}`}>
                <img alt={`${item.title}`} src={item.media[0].sizes[0].url} width="100"/>
              </Link>
              <div>
                <h3 className="col-md-auto">{item.title}</h3>
                <h4 className="col-md-auto">${item.price}</h4>
                <h4 className="col-md-auto">{item.created_at}</h4>
               </div>
              </div>
            </div>
          ))}
        </div>  
          <Route path="/products/:product_id" render={ ({ match }) => (
              <Detail detail={preload.data.find(item => item.product_id === match.params.product_id)} />
          )}/>
      </div>
    )
  }
}

export default List;
