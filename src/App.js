import React from 'react'
import './App.css'

// import './auth/auth.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'

// ** components ** //
// standard
import Home from './pages/Home'
import Saved from './pages/Saved'
import Account from './pages/Account'
// alt header
import Search from './pages/Search'
import About from './pages/About'
import BookInfo from './pages/BookInfo'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'

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
                <Link to="/bookInfo/:id">Book-info</Link>
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to='/resetPassword'>Reset Password</Link>
              </li>
            </ul>
          </div>
        </Route>

        <Route exact path="/home">
          <Home/>
        </Route>

        <Route exact path="/saved">
          <Saved/>
        </Route> 

        <Route exact path="/account">
          <Account/>
        </Route>

        <Route exact path="/search">
          <Search/> 
        </Route> 

        <Route exact path="/about">
          <About/>
        </Route>
        
        <Route path='/bookInfo/'>
          <BookInfo/>
        </Route> 

        <Route path='/signup'>
          <Signup/>
        </Route> 

        <Route path='/login'>
          <Login/>
        </Route> 

        <Route path='/resetPassword'>
          <ResetPassword/>
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
