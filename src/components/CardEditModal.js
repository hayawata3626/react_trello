import React, { Component } from 'react';
import '../css/Mordal.css'

class CardEditModal extends Component {
  componentDidMount() {
    const $closeMordalEl = document.getElementById("closeMordalEl")
    $closeMordalEl.addEventListener('click', () => this.props.actions.changeEditModalState(false));
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
            ref="title"
            defaultValue={this.props.todo.title}
            onChange={(e) => this.setState({title: e.target.value})}
          />
          <input
            type="textarea"
            className="mordalContent_descriptiton"
            placeholder="文章"
            ref="description"
            defaultValue={this.props.todo.description}
            onChange={(e) => this.setState({description: e.target.value})}
          />
          <div
            className="mordal_closeButton"
            onClick={(e) => {
              this.props.actions.changeTodoEditable(this.props.todo.id, this.props.todo.status);
              this.props.actions.changeEditModalState(false);
            }}
          />
          <button
            className="mordal_submit"
            onClick={(e) => {
              e.preventDefault();
              this.props.actions.changeEditModalState(false);
              this.props.actions.changeTodoEditable(this.props.todo.id, false);
              this.props.actions.editTodo(this.props.todo.id, this.refs.title.value, this.refs.description.value);
            }}>
            Submit
          </button>
        </div>
        <div className="mordal_bg" id="closeMordalEl"></div>
      </div>
    )
  }
}

export default CardEditModal;
