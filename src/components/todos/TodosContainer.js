import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {

  renderTodos = () => (
    this.props.todos.map((todo, id) => (
      <Todo
        key={id}
        text={todo}
      />
    ))
  );

  render() {
    return (
      <ol>
        {/* {console.log(this.props.todos)} */}
        {this.renderTodos()}
      </ol>
    );
  };

};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodosContainer);