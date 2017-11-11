const React = require('react');
const PropTypes = require('prop-types');

const {
  Header, ListaDiProva, ComportiamociCosì
} = require('./QualcheProva');

const { Pdf } = require('./Pdf');

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
    prop2: 123,
    LOGME: false
  }
  static propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.number
  }

  // getInitialState()
  state = {
    stateProp1: this.props.prop2,
    pdfPageIndex: 0
  }

  /**
   * updating lifecycle methods
   *
   * - componentWillMount()
   * - render()
   * - componentDidMount()
   */
  componentWillMount() {
    this.props.LOGME && console.log('componentWillMount');
  }
  /* render() happens here */
  componentDidMount() {
    this.props.LOGME && console.log('componentDidMount');
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
    this.props.LOGME && console.log('componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    this.props.LOGME && console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    this.props.LOGME && console.log('componentWillUpdate', nextProps, nextState);
  }
  /* render() happens here */
  componentDidUpdate(prevProps, prevState) {
    this.props.LOGME && console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    this.props.LOGME && console.log('componentWillUnmount');
  }

  render() {
    this.props.LOGME && console.log('render');
    return (
      <div>
        {/*<h1>My first React app</h1>
        <p>{this.props.prop1}</p>
        <p>{this.props.prop2}</p>
        <FilterableProductTable products={PRODUCTS} />
        <hr />*/}
        {/*<Header />
        <ListaDiProva elenco={[1, 2, 3, 'a', 'b', 'c']} />
        <ComportiamociCosì>
          <b>"<i>bravo me, bravo me, oserei dire bravissimo me</i>"</b>
        </ComportiamociCosì>*/}
        {/*<Pdf
          href="example/relativity.pdf"
          pageIndex={this.state.pdfPageIndex}
          width={400}
          height={400}
          onPdfLoaded={(p) => console.log('onPdfLoaded', p)}
          // onPdfLabelsLoaded={(p) => console.log('onPdfLabelsLoaded', p)}
          onPdfPageLoaded={(p) => console.log('onPdfPageLoaded', p)}
          onPdfPageRendered={(p) => console.log('onPdfPageRendered', p)}
        />*/}
        <Pdf
          href="example/9788858319611.pdf"
          pageIndex={this.state.pdfPageIndex}
          width={400}
          height={400}
          onPdfLoaded={(p) => console.log('onPdfLoaded', p)}
          // onPdfLabelsLoaded={(p) => console.log('onPdfLabelsLoaded', p)}
          onPdfPageLoaded={(p) => console.log('onPdfPageLoaded', p)}
          onPdfPageRendered={(p) => console.log('onPdfPageRendered', p)}
        />
        <button onClick={() => {
          this.setState({
            pdfPageIndex: this.state.pdfPageIndex + 1
          });
        }}>Click me {this.state.pdfPageIndex}</button>
      </div>
    );
  }
}

module.exports = App;
