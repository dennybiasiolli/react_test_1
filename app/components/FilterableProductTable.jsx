var React = require('react');
const PropTypes = require('prop-types');

var ProductTable = require('./ProductTable');
var SearchBar = require('./SearchBar');

class FilterableProductTable extends React.Component {
  static defaultProps = {}
  static propTypes = {
    products: PropTypes.array.isRequired
  }

  state = {
    filterText: '',
    inStockOnly: false
  }

  handleUserInput = (filterText, inStockOnly) => {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

module.exports = FilterableProductTable;
