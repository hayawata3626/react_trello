import React, { Component } from 'react';
import '../css/Mordal.css'

class CardNewModal extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      description: ""
    }
  }

  componentDidMount() {
    const $closeMordalEl = document.getElementById("closeMordalEl")
    $closeMordalEl.addEventListener('click', () => this.props.actions.changeModalState(false));
    this.clearText();
  }

  clearText() {
    this.setState({
      title: "",
      description: ""
    })
  }

  render(){
    return(
      <div className="mordal" className={this.props.className} >
        <div className="mordal_content" id="mordalContent">
          <h2 className="mordal_title">{this.props.title}</h2>
          <input
            type="text"
            className="mordalContent_title"
            placeholder="タイトル"
            value={this.props.todo.title}
            onChange={(e) => this.setState({title: e.target.value})}

          />
          <input
            type="textarea"
            className="mordalContent_descriptiton"
            placeholder="文章"
            value={this.props.todo.description}
            onChange={(e) => this.setState({description: e.target.value})}

          />
          <div
            className="mordal_closeButton"
            onClick={() => {
              this.props.actions.changeModalState(false);
              this.props.actions.changeTodoEditable(this.props.todo.id, this.props.todo.status);
            }}
          />
          <button
            className="mordal_submit"
            onClick={(e) => {
              e.preventDefault();
              this.props.actions.changeModalState(false);
              this.props.actions.addTodo(this.state.title, this.state.description);
              this.clearText();
            }}>
            Submit
          </button>
        </div>
        <div className="mordal_bg" id="closeMordalEl"></div>
      </div>
    )
  }
}

export default CardNewModal;
