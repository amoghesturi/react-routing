import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const Home = () => <h1>Hello from home!</h1>
const Address = () => <h1>We are located at Whitefield, Bangalore</h1>
const NotFound = () => <h1>404 Not Found </h1>
const Nav = () => (
  <div>
    <Link to="/">Home</Link> <br />
    <Link to="/address">Address</Link>
  </div>
)
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

export default App;
