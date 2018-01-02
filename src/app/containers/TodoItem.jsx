import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'
import { delTodo, toggleTodo } from '../actions'

const mapStateToProps = (state) => { }
const mapDispatchToProps = (dispatch) => {
  return {
    toggleComplete: (taskId) => {
      dispatch(toggleTodo(taskId))
    },
    deleteTask: (taskId) => {
      dispatch(delTodo(taskId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)