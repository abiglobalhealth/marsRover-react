import React from 'react';
import PropTypes from "prop-types";

const Button = ({ onClick, title }) => (
  <button type="button" onClick={onClick}>
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => { }
}

export default Button;
