var React = require('react');

class ProductCategoryRow extends React.Component {
  static propTypes = {
    category: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

module.exports = ProductCategoryRow;
