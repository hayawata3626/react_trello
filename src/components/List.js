import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


class List extends Component {
  toNextStatus(id) {
    this.props.toNextStatus(id)
  }
  toPrevStatus(id) {
    this.props.toPrevStatus(id)
  }
  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <Card
          card={card}
          toNextStatus={this.toNextStatus.bind(this)}
          toPrevStatus={this.toPrevStatus.bind(this)}
          key={index}
        />
      );
    });

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}


List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default List;
