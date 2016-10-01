var React = require('react');

class SearchBar extends React.Component {
  static propTypes = {
    filterText: React.PropTypes.string.isRequired,
    inStockOnly: React.PropTypes.bool.isRequired
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} />
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
module.exports = SearchBar;
