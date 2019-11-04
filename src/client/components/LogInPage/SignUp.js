import React from 'react';
import status from "../../../constants";

const SignUp = () => {
  return (
    <div className="reg-side">
      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className="reg-title">sign up</div>
          <input
            className="reg-input"
            placeholder="User Name"
            type="text"
          />
          <input
            className="reg-input"
            placeholder="Email Address"
            type="text"
          />
          <input
            className="reg-input"
            placeholder="Password"
            type="text"
          />
        </div>
        <div className="button-container">
          <button className="button">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  )
};

export default SignUp;