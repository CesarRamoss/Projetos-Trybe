import React from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile">
          Profile
        </div>
      </>
    );
  }
}

export default Profile;
