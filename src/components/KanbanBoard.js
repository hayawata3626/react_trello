import React, { Component } from 'react';
import List from './List';
import PropTypes from 'prop-types';

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
          status: 'progress',
          tasks: []
        }
      ]
    }
  }
  toNextStatus(id) {
    const targetCard = this.state.cardList.find(card => card.id === id)
    targetCard.status = "done"
    this.setState({cardList: [targetCard]})
  }
  toPrevStatus(id) {
    const targetCard = this.state.cardList.find(card => card.id === id)
    targetCard.status = "todo"
    this.setState({cardList: [targetCard]})
  }

  render(){
    return (
      <div className="app">
        <List
          id="todo"
          title="To Do"
          cards={
            this.state.cardList.filter(card => card.status === 'todo')
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
        />,
        <List
          id="in-progress"
          title="In Progress"
          cards={
            this.state.cardList.filter(card => card.status === 'progress')
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}

        />,
        <List
          id="done"
          title="Done"
          cards={
            this.state.cardList.filter(card => card.status === 'done')
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}

        />
      </div>
    )
  }
}


export default KanbanBoard;
