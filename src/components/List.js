import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


class List extends Component {
  render() {
    const todos = this.props.todos.map((todo, index) => {
      return ( <Card todo={todo} key={index} /> );
    });

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {todos}
      </div>
    );
  }
}


List.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default List;
