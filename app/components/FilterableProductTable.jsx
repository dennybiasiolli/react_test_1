var React = require('react');

var ProductTable = require('./ProductTable');
var SearchBar = require('./SearchBar');

class FilterableProductTable extends React.Component {
  static defaultProps = {}
  static propTypes = {
    products: React.PropTypes.array.isRequired
  }
  render(){
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

module.exports = FilterableProductTable;
