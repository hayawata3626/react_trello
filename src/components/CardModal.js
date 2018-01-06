import React, { Component } from 'react';
import '../css/Mordal.css'

class CardModal extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      description: ""
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', () => this.props.closeModal(false));
  }

  render(){
    return(
      <div className="mordal" className={this.props.className}>
        <div className="mordal_content">
          <h2 className="mordal_title">{this.props.title}</h2>
          <input
            type="text"
            name="text"
            className="mordalContent_title"
            placeholder="タイトル"
          />
          <input
            type="textarea"
            name="textarea"
            className="mordalContent_descriptiton"
            placeholder="文章"
          />
          <div
            className="mordal_closeButton"
            onClick={() => this.props.closeModal(false)}
          />
          <button
            className="mordal_submit"
          >
          </button>
        </div>
      </div>
    )
  }
}

export default CardModal;
