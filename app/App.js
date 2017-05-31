import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path="instagram" component={Instagram} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const Home = () => <h1>Hello from home!</h1>
const Address = (props) => (
  <div>
    <br />
    <IndexLink activeClassName="active" to="/address">Twitter Feed</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to="/address/instagram">Instagram Feed</IndexLink>&nbsp;
    <h1>We are located at Whitefield, Bangalore</h1>
    {props.children}
  </div>
)
const NotFound = () => <h1>404 Not Found </h1>
const Nav = () => (
  <div>
    <IndexLink activeClassName="active" to="/">Home</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to="/address">Address</IndexLink>&nbsp;
    <IndexLink activeClassName="active" to='/about'>About</IndexLink>&nbsp;
  </div>
)
const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)
const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

export default App;
