import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css';


class Card extends Component {
  constructor(props){
    super(props);
    this.state = { showDetails: false };
  }

  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    let todoDetails;
    if (this.state.showDetails){
      todoDetails = (
        <div className="card__details">
          {this.props.todo.description}
        </div>
      );
    }
    return (
      <div className="card">
        <div className="card__decorationColor"/>
        <div
          className={this.state.showDetails ? 'card__title card__title--is-open' : 'card__title'}
          onClick={this.toggleDetails.bind(this)}
          role="presentation"
        >
          {this.props.todo.title}
        </div>
        {todoDetails}
        <button className="cardButton prev" onClick={() =>
          this.props.actions.changeTodoState(this.props.todo.id, -1)
        }>Previous</button>
        <button className="cardButton next" onClick={() =>
          this.props.actions.changeTodoState(this.props.todo.id, 1)
        }>Next</button>
        <button className="cardButton edit">Edit</button>
      </div>
     );
  }
}

Card.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Card;
