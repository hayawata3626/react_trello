import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component {
  render() {
    const tasks = this.props.tasks.map(task => (
      <li key={task.id} className="checklist__task">
       <input type="checkbox" defaultChecked={task.done} />
       {task.name}
      <span className="checklist__task--remove" />
      </li>
    ));

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input
          type="text"
          className="checklist--add-task"
          placeholder="Type then hit Enter to add a task"
        />
      </div>
    );
  }
}

CheckList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

 export default CheckList;