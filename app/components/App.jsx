var React = require('react');

class App extends React.Component {
  // getDefaultProps()
  static defaultProps = {
    prop1: 'default value',
    prop2: 123
  }
  static propTypes = {
    prop1: React.PropTypes.string.isRequired,
    prop2: React.PropTypes.number
  }

  // getInitialState()
  state = {
    stateProp1: this.props.prop2
  }

  /**
   * updating lifecycle methods
   *
   * - componentWillMount()
   * - render()
   * - componentDidMount()
   */
  componentWillMount() {
    console.log('componentWillMount');
  }
  /* render() happens here */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /**
   * updating lifecycle methods
   *
   * - componentWillReceiveProps(nextProps)
   * - shouldComponentUpdate(nextProps, nextState) => return boolean
   * - componentWillUpdate(nextProps, nextState)
   * - render()
   * - componentDidUpdate(prevProps, prevState)
   */
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }
  /* render() happens here */
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>My first React app</h1>
        <p>{this.props.prop1}</p>
        <p>{this.props.prop2}</p>
      </div>
    );
  }
}

module.exports = App;
