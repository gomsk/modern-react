import React from "react";
import PropTypes from "prop-types";

const Hello = (props) => {
  const { name, age, children } = props;
  return (
    <div>
      <div>name : {name}</div>
      <div>age: {age}</div>
      <div>children : {children}</div>
    </div>
  );
};

Hello.defaultProps = {};

Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default Hello;
