import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import KanbanBoard from '../components/KanbanBoard'

const App = ({todos, newModal, editModal, actions}) => (
  <div>
    <KanbanBoard todos={todos} newModal={newModal} editModal={editModal} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  newModal: PropTypes.object.isRequired,
  editModal: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos,
  newModal: state.newModal,
  editModal: state.editModal,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
