import React from 'react';
import PropTypes from 'prop-types';
import Hobby from './Hobby';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0,
      hobbies: ['ball', 'music'],
    };
  }

  render() {
    const { name, age } = this.props;
    const { liked, hobbies } = this.state;
    return (
      <div className="profile-component">
        <h1>
          My Name is
          {' '}
          {name}
        </h1>
        <h2>
          My age is
          {' '}
          {age}
        </h2>
        <h2>
          Liked:
          {' '}
          {liked}
        </h2>
        <h2>My Bobbies:</h2>
        <ul>
          {hobbies.map((hobby, i) => <Hobby hobby={hobby} v={i} />)}
        </ul>
      </div>
    );
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Profile;
