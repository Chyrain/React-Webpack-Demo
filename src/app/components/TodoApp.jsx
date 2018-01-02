import React from 'react'
import PropTypes from 'prop-types'
import {Button,Icon,Row,Col} from 'antd'
import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="well">
        <h1 className="text-center">React TodoList</h1>
        <TodoList />
        <AddTodo />
      </div>
    )
  }
}