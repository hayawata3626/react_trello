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

  addCard(title, description) {
    const card = new Card(
       title, description, "#BD8D31"
    );
    this.state.cardList.push(card);
    this.setState({
      cardList: this.state.cardList
    })
  }

  toNextStatus(id) {
    const cards = this.state.cardList.map(card => {
      if (card.id === id && card.status !== status.done) {
        card.status = card.status + 1;
      }
      return card;
    })
    this.setState({cardList: cards});
  }

  toPrevStatus(id) {
    const cards = this.state.cardList.map(card => {
      if (card.id === id && card.status !== status.todo) {
        card.status = card.status - 1;
      }
      return card;
    })
    this.setState({cardList: cards});
  }

  changeModal(state, card){
    this.setState({
      needModal: state,
      cardInModal: card || new Card("", "", "#BD8D31")
    })
  }

  render(){
    return (
      <div className="app">
        <h1 className="pageTitle">Like a Trello</h1>
        <List
          title="To Do"
          cards={
            this.state.cardList.filter(card => card.status === status.todo)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
          changeModal={this.changeModal.bind(this)}
        />
        <List
          title="In Progress"
          cards={
            this.state.cardList.filter(card => card.status === status.progress)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
          changeModal={this.changeModal.bind(this)}
        />
        <List
          title="Done"
          cards={
            this.state.cardList.filter(card => card.status === status.done)
          }
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
          changeModal={this.changeModal.bind(this)}
        />
        <div className="newEdit" onClick={() => this.changeModal(true)}></div>
        <CardModal
          className={this.state.needModal ? "mordal" : "hide"}
          changeModal={this.changeModal.bind(this)}
          addCard={this.addCard.bind(this)}
          card={this.state.cardInModal}
          title={"Add Card"}
        />
      </div>
    )
  }
}


export default KanbanBoard;
