import React, { Component } from 'react';
import List from './List';
import CardModal from './CardModal';
import '../css/Kanban.css';
const status = {
  todo: 0,
  progress: 1,
  done: 2
}
class KanbanBoard extends Component {
  render() {
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
        <div className="newEdit" onClick={() => this.props.actions.changeModalState(true)}></div>
        <CardModal
          className={this.props.modal.state ? "mordal" : "hide"}
          changeModalState={this.props.actions.changeModalState}
        />
      </div>
    )
  }
}

export default KanbanBoard;
