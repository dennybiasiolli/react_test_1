var React = require('react');
const PropTypes = require('prop-types');

class ProductRow extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render(){
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

module.exports = ProductRow;
