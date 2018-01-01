import React, { Component } from 'react'
import PropTypes from 'prop-types'
import md5 from '../../public/lib/md5'
import $ from '../../public/lib/jqlite'

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
    if (value === 3) {
      // 异步按需加载
      require.ensure([], function(){
          // var md5 = 
          require('../../public/async/lame');
          console.log('lame:', window.Mp3Encoder);
          console.log('md5 of 123456:', md5('123456'));
      }, 'lame'); // 第三个参数设置打包名称
    }
    return (
      <p>
        <i className="icon-warn icon-4x icon-spin icon-pull-left"></i>
        Clicked in for: {value} times 
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
