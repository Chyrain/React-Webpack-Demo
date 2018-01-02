import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions'

const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)