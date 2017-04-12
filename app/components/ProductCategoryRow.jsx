var React = require('react');
const PropTypes = require('prop-types');

class ProductCategoryRow extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired
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
