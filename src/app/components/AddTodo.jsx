import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Form, Input, Button, notification } from 'antd'

export default class AddTodo extends React.PureComponent {
  static propTypes /* remove-proptypes */ = {
    saveTodo: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.saveTodo = this.saveTodo.bind(this)
  }

  saveTodo(e) {
    e.preventDefault()
    if (this.input && this.input.value) {
      this.props.saveTodo(this.input.value)
      this.input.value = ''
    } else {
      notification.open({
        description: '您尚未输入内容！',
      })
      // window.alert('您尚未输入内容！')
    }
  }

  render() {
    return (
      <div className="addtodoitem">
        <Form.Item>
          <label htmlFor="newItem"></label>
          <Input id="newItem" ref={el => this.input = el.input} type="text" placeholder="请输入您的待办事项"></Input>
          <Button type="primary" className="pull-right" onClick={this.saveTodo}>保存</Button>
        </Form.Item>
        {/* <label htmlFor="newItem"></label>
        <input id="newItem" ref={el => this.input = el} type="text" placeholder="请输入您的待办事项"></input>
        <button type="primary" className="btn-info" onClick={this.saveTodo}>保存</button> */}
      </div>
    )
  }
}