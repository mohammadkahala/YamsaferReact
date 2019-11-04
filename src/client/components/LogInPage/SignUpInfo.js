import React from 'react';

const SignUpInfo = ({ switchSlider }) => {
  return (
    <div className="reg-side">
      <div className="info-section info-section-left">
        <div className="info-section__title">Don't Have an account?</div>
        <div className="info-section__body">I just created it for the animation, click below to see it</div>
        <button className="info-section__Button" onClick={() => switchSlider()}>
          SIGN UP
        </button>
      </div>
    </div>
  )
};

export default SignUpInfo;