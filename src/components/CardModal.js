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

  clearState(){
    this.setState({
      title: "",
      description: ""
    })
  }

  render(){
    return(
      <div className="mordal" className={this.props.className}>
        <div className="mordal_content">
          <h2 className="mordal_title">Hello</h2>
          <input
            type="text"
            name="text"
            className="mordalContent_title"
            placeholder="タイトル"
            value={this.state.title}
            onChange={(e) => this.setState({title: e.target.value})}
          />
          <input
            type="textarea"
            name="textarea"
            className="mordalContent_descriptiton"
            placeholder="文章"
            value={this.state.description}
            onChange={(e) => this.setState({description: e.target.value})}
          />
          <div
            className="mordal_closeButton"
            onClick={() => {
              this.props.changeModal(false);
              this.clearState();
            }}/>
          <button
            className="mordal_submit"
            onClick={() => {
              this.props.addCard(this.state.title, this.state.description);
              this.props.changeModal(false);
              this.clearState();
            }}>
            submit
          </button>
        </div>
      </div>
    )
  }
}

export default CardModal;
