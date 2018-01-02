import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

class TodoList extends React.Component {
  static propTypes /* remove-proptypes */ = {
    todos: PropTypes.array
  }

  render() {
    const taskList = (this.props.todos || []).map(item => (
      <TodoItem
        key={item.id}
        taskId={item.id} 
        text={item.text}
        completed={item.completed}
        />
    ))
    return (
      <ul className="list-group">
        {taskList}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos || []
})
const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)