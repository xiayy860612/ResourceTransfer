import React from 'react';
import PropTypes from 'prop-types';

function Hobby({ hobby, v }) {
  return <li>{`${hobby}-${v}`}</li>;
}

Hobby.propTypes = {
  hobby: PropTypes.string.isRequired,
  v: PropTypes.number.isRequired,
};

export default Hobby;
