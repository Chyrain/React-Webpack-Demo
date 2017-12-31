import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        <i className="icon-warn icon-4x icon-spin icon-pull-left"></i>
        Clicked for: {value} times 
        {' '}
        <button className="add icon-play" onClick={onIncrement}></button>
        {' '}
        <button className="sub icon-mute" onClick={onDecrement}></button>
        <br/><br/>
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
        <i class="icon-like icon-2x icon-border icon-muted icon-pull-left icon-pulse-4"></i>
      </p>
    )
  }
}

Counter.propTypes /* remove-proptypes */ = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

Counter.defaultProps = {
  value: 99
}

export default Counter
