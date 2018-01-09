import React, { Component } from 'react';
import List from './List';
import CardNewModal from './CardNewModal';
import CardEditModal from './CardEditModal';
import '../css/Kanban.css';

const status = {
  todo: 0,
  progress: 1,
  done: 2
}

class KanbanBoard extends Component {
  render() {
    const editModal = this.props.todos.find(todo => todo.editable) ? (
      <CardEditModal
      className={this.props.editModal.state ? "mordal" : "hide"}
      actions={this.props.actions}
      todo={this.props.todos.find(todo => todo.editable)}
      />
    ) : "";

    return (
      <div className="app">
        <h1 className="pageTitle">Like a Trello</h1>
        <List
          title="To Do"
          todos={this.props.todos.filter(todo => todo.status === status.todo)}
          actions={this.props.actions}
        />
        <List
          title="In Progress"
          todos={this.props.todos.filter(todo => todo.status === status.progress)}
          actions={this.props.actions}
        />
        <List
          title="Done"
          todos={this.props.todos.filter(todo => todo.status === status.done)}
          actions={this.props.actions}
        />
        <div className="newEdit" onClick={() => this.props.actions.changeNewModalState(true)}></div>
        <CardNewModal
          className={this.props.newModal.state ? "mordal" : "hide"}
          actions={this.props.actions}
          todo={this.props.todos}
        />
        {editModal}
      </div>
    )
  }
}

export default KanbanBoard;
