import React from "react";
import PropTypes from "prop-types";

Todo.propTypes = {
  todo: PropTypes.object,
};
Todo.defaultProps = {
  todo: {},
};

function Todo(props) {
  const { todo } = props;
  return <div>{todo?.name}</div>;
}

export default Todo;
