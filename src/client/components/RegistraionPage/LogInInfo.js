import React from 'react';

const LogInInfo = ({ switchSlider }) => {
  return (
    <div className="reg-side">
      <div className="info-section info-section-right">
        <div className="info-section__title">Have an account?</div>
        <div className="info-section__body">Click below to sign in, enter admin admin</div>
        <button className="info-section__Button" onClick={() => switchSlider()}>
          LOG IN
        </button>
      </div>
    </div>
  )
};

export default LogInInfo;