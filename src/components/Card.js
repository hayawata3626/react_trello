import React, { Component } from 'react';
import CheckList from './CheckList';
import PropTypes from 'prop-types';
import css from './../App.css';


class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false,
    };
  }
  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }
  render() {
    let cardDetails;
    if (this.state.showDetails){
      cardDetails = (
        <div className="card__details">
          {this.props.description}
           <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }
    const sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };
    return (
      <div className="card">
        <div style={sideColor}></div>
        <div
          className={this.state.showDetails ? 'card__title card__title--is-open' : 'card__title'}
          onClick={this.toggleDetails.bind(this)}
          role="presentation">
          {this.props.title}
        </div>
        {cardDetails}
        <button className="cardButton prev" onClick={() => this.props.toPrevStatus(this.props.id)}>Previous</button>
        <button className="cardButton next" onClick={() => this.props.toNextStatus(this.props.id)}>Next</button>
      </div>
     );
  }
}

function createCustomPropType(isRequired) {
  return (props, propName, componentName) => {
    const prop = props[propName];
    if (prop == null) {
      if (isRequired) {
        return new Error(
          `The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\`.`,
        );
      }
    } else if (typeof prop !== 'string' || prop.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`,
      );
    }
    return null;
  };
}

// Using the factory, create two different versions of your prop type
const customPropType = createCustomPropType(false);
customPropType.isRequired = createCustomPropType(true);



Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: customPropType.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
