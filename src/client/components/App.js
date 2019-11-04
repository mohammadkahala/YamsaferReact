import React from 'react';
import { logInFromLocalStorage } from '../redux/actions';
import { connect } from 'react-redux';
import status from '../../constants';
import LoadingPage from "./LoadingPage";

class App extends React.Component{
  componentDidMount() {
    // the app is so fast to see the loading page, so why not waiting 1s to see it in action
    setTimeout( () => {
      this.props.logInFromLocalStorage();
    }, 1000);
  }

  render() {
    if (this.props.registrationStatus === status.PENDING)
      return <LoadingPage/>;

    return (
      this.props.children
    )
  }
}

const mapStateToProps = (state) => {
  return { registrationStatus: state.loggedIn };
};

export default connect(mapStateToProps, { logInFromLocalStorage })(App);