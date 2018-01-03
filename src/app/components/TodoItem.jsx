import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Checkbox, Button } from 'antd'

export default class TodoItem extends React.PureComponent {
  static propTypes /* remove-proptypes */ = {
    toggleComplete: PropTypes.func,
    deleteTask: PropTypes.func,
    taskId: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  toggleComplete() {
    this.props.toggleComplete(this.props.taskId)
  }

  deleteTask() {
    this.props.deleteTask(this.props.taskId)
  }

  render() {
    let task = this.props.text
    let itemChecked
    if (this.props.completed === true) {
      task = <del>{task}</del>
      itemChecked = true
    } else {
      itemChecked = false
    }
    return (
      <li className="list-group-item">
        <Row>
          <Col span={12}>
            <Checkbox checked={itemChecked} onChange={this.toggleComplete} /> {task}
          </Col>
          <Col span={12}>
            <Button type="danger" className="pull-right" onClick={this.deleteTask}>删除</Button>
          </Col>
        </Row>
        {/* <div>
          <div span={12}>
            <input type="checkbox" checked={itemChecked} onChange={this.toggleComplete} /> {task}
          </div>
          <div span={12}>
            <button type="danger" className="btn-danger" onClick={this.deleteTask}>删除</button>
          </div>
        </div> */}
      </li>
    )
  }
}