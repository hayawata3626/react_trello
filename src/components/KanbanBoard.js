import React, { Component } from 'react';
import List from './List';
import CardModal from './CardModal';
import '../css/Kanban.css';
import {status, Card} from '../model/card';

class KanbanBoard extends Component {
  constructor(){
    super();
    this.state = {
      needModal: false,
      cardList: [],
      cardInModal: new Card("", "", "#BD8D31")
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="pageTitle">Like a Trello</h1>
        <List
          title="To Do"
          todos={this.props.todos.filter(card => card.status === status.todo)}
        />
        <List
          title="In Progress"
          todos={this.props.todos.filter(card => card.status === status.progress)}
        />
        <List
          title="Done"
          todos={this.props.todos.filter(card => card.status === status.done)}
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
