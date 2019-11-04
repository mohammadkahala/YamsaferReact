import React, { useState } from 'react';
import LogInPage from "./LogIn";
import {connect} from 'react-redux';
import SignUp from "./SignUp";
import SignUpInfo from "./SignUpInfo";
import LogInInfo from "./LogInInfo";
import status from "../../../constants";

const FIRST_LOAD = '', LEFT = 'slideToLeft', RIGHT = 'slideToRight';

const RegistrationPage = ({ history, registrationStatus }) => {
  const [ sliderPosition, setSliderPosition ] = useState(FIRST_LOAD);

  if (registrationStatus === status.LOGGED_IN){
    history.push('/shopping');
    return null;
  }

  const switchSlider = () => {
    switch (sliderPosition) {
      case FIRST_LOAD: setSliderPosition(LEFT); break;
      case RIGHT: setSliderPosition(LEFT); break;
      case LEFT: setSliderPosition(RIGHT);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className={`white-slider ${sliderPosition}`}/>
        {
          sliderPosition === RIGHT || sliderPosition === FIRST_LOAD
          ? <SignUpInfo switchSlider={switchSlider}/>
          : <SignUp />
        }
        {
          sliderPosition === RIGHT || sliderPosition === FIRST_LOAD
            ? <LogInPage />
            : <LogInInfo switchSlider={switchSlider}/>
        }
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return { registrationStatus: state.loggedIn };
};

export default connect(mapStateToProps)(RegistrationPage);