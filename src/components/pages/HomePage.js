import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

const HomePage = ({ isAuthentiscated, logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthentiscated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <Link to="/login">Login</Link>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthentiscated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthentiscated: !!state.user.token,
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
