import React, { Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';

const status = {
  todo: 0,
  progress: 1,
  done: 2
}

class KanbanBoard extends Component {
  constructor(){
    super();
    this.state = {
      cardList: [
        {
          id:1,
          title:'Read the Book',
          description: 'I should read the whole book',
          color: '#BD8D31',
          status: status.progress,
          tasks: []
        }
      ]
    }
  }
  toNextStatus(id) {
    const targetCard = this.state.cardList.find(card => card.id === id)
    if(targetCard.status === status.done) return;
    targetCard.status = targetCard.status+1
    this.setState({cardList: [targetCard]})

  }
  toPrevStatus(id) {
    const targetCard = this.state.cardList.find(card => card.id === id)
    if(targetCard.status === status.todo) return;
    targetCard.status = targetCard.status-1
    this.setState({cardList: [targetCard]})
  }

  render(){
    // debugger;
    return (
      <div className="app">
        <List
          id="todo"
          title="To Do"
          cards={
            this.state.cardList.filter(card => card.status === status.todo)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
        />,
        <List
          id="in-progress"
          title="In Progress"
          cards={
            this.state.cardList.filter(card => card.status === status.progress)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}

        />,
        <List
          id="done"
          title="Done"
          cards={
            this.state.cardList.filter(card => card.status === status.done)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}

        />
      </div>
    )
  }
}


export default KanbanBoard;
