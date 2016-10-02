var React = require('react');

class PageMove extends React.Component {
  // static defaultProps = {
  //   currentPage: 0,
  //   pageCount: 0
  // }
  static propTypes = {
    currentPage: React.PropTypes.number.isRequired,
    pageCount: React.PropTypes.number.isRequired,
    onPageChange: React.PropTypes.func.isRequired
  }

  canDisablePrevButton() {
    return this.props.currentPage <= 1;
  }

  canDisableNextButton() {
    return this.props.currentPage >= this.props.pageCount;
  }

  prevPage = () => {
    this.props.onPageChange(-1);
  }

  nextPage = () => {
    this.props.onPageChange(+1);
  }

  render() {
    return (
      <div>
        <button disabled={this.canDisablePrevButton()} onClick={this.prevPage}>Prev</button>
        {this.props.currentPage} / {this.props.pageCount}
        <button disabled={this.canDisableNextButton()} onClick={this.nextPage}>Next</button>
      </div>
    );
  }
}

module.exports = PageMove;
