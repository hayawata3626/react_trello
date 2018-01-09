import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import KanbanBoard from '../components/KanbanBoard'

const App = ({todos, modal, actions}) => (
  <div>
    <KanbanBoard todos={todos} modal={modal} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  modal: PropTypes.object.isRequired,
  newmodal: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  modal: state.modal,
  newmodal : state.newmodal
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
