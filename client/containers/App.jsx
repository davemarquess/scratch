import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Main from './Main';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
});

const App = props => (
  <BrowserRouter>
    <div className="container">
      <Main />
    </div>
  </BrowserRouter>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
