const React = require('react');
const PropTypes = require('prop-types');

const {
  Header, ListaDiProva, ComportiamociCosì
} = require('./QualcheProva');

var FilterableProductTable = require('./FilterableProductTable');

var PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class App extends React.Component {
  // getDefaultProps()
  static defaultProps = {
    prop1: 'default value',
    prop2: 123
  }
  static propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.number
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
        {/*<h1>My first React app</h1>
        <p>{this.props.prop1}</p>
        <p>{this.props.prop2}</p>
        <FilterableProductTable products={PRODUCTS} />
        <hr />*/}
        <Header />
        <ListaDiProva elenco={[1, 2, 3, 'a', 'b', 'c']} />
        <ComportiamociCosì>
          <b>"<i>bravo me, bravo me, oserei dire bravissimo me</i>"</b>
        </ComportiamociCosì>
      </div>
    );
  }
}

module.exports = App;
