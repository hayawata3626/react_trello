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
          title:'免許の更新',
          description: '試験開場へ行く',
          color: '#BD8D31',
          status: status.todo,
          tasks: []
        },
        {
          id:2,
          title:'髪を切る',
          description: '原宿へ行く',
          color: '#BD8D31',
          status: status.progress,
          tasks: []
        },
        {
          id:3,
          title:'Reactを開発する',
          description: 'porpsを勉強する',
          color: '#BD8D31',
          status: status.done,
          tasks: []
        },
        {
          id:4,
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
    const cards = this.state.cardList.map(card => {
      if (card.id === id) card.status = card.status + 1;
      return card;
    })
    this.setState({cardList: cards});
  }

  toPrevStatus(id) {
    const cards = this.state.cardList.map(card => {
      if (card.id === id) card.status = card.status - 1;
      return card;
    })
    this.setState({cardList: cards});
  }

  render(){
    return (
      <div className="app">
        <h1 className="pageTitle">Like a Trello</h1>
        <List
          id="todo"
          title="To Do"
          cards={
            this.state.cardList.filter(card => card.status === status.todo)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
        />
        <List
          id="in-progress"
          title="In Progress"
          cards={
            this.state.cardList.filter(card => card.status === status.progress)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
        />
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
