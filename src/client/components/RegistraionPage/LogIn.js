import React, { useState } from 'react';
import { connect } from 'react-redux';
import { verifyUser } from '../../redux/actions';
import status from '../../../constants';

const LogIn = ({ registrationStatus, verifyUser }) => {
  const [ emailInput, setEmailInput ] = useState("");
  const [ passwordInput, setPasswordInput ] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
    verifyUser(emailInput, passwordInput);
  };

  return (
    <div className="reg-side">
      <form className="form-container" onSubmit={handleLogIn}>
        <div>
          <div className="reg-title">Log In</div>
          <input
            className="reg-input"
            placeholder="Email Or User Name"
            value={emailInput}
            onChange={({ target }) => setEmailInput(target.value)}
            type="text"
          />
          <input
            className="reg-input"
            placeholder="Password"
            value={passwordInput}
            onChange={({ target }) => setPasswordInput(target.value)}
            type="password"
          />
          {
            registrationStatus === status.INVALID_USER &&
            <div className="error" >Wrong Email Or Password</div>
          }
        </div>
        <div className="button-container">
          <button className="button">
            LOG IN
          </button>
        </div>
      </form>
    </div>
    )
};

const mapStateToProps = (state) => {
  return { registrationStatus: state.loggedIn };
};

export default connect(mapStateToProps, { verifyUser })(LogIn);