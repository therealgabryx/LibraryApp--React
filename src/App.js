import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';

// components
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/book-info">Book-info</Link>
              </li>
              <li>
                <Link to="/saved">Saved</Link>
              </li>
              <li>
                <Link to="/account">My Account</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/left-slider">left-slider</Link>
              </li>
            </ul>
          </div>
        </Route>

        <Route exact path="/home">
          <Home/>
        </Route>

        
        {/*<Route exact path="/search">
          <Search/>
        </Route>

        <Route exact path="/book-info">
          <BookInfo/>
        </Route>

        <Route exact path="/saved">
          <Saved/>
        </Route>

        <Route exact path="/account">
          <Account/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/signup">
          <Signup/>
        </Route>

        <Route exact path="/left-slider">
          <LeftSlider/>
        </Route> */}
      </Switch>
    </Router>
    
  );
} 

export default App;
