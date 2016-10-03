var React = require('react');

var PageMove = require('./PageMove');
var PageScaleType = require('./PageScaleType');
var PageDisplayed = require('./PageDisplayed');

class PdfReader extends React.Component {
  state = {
    currentPage: 1,
    pageCount: 15,
    scaleType: 'page-width',
    pageDisplayed: 1
  }

  handlePageChange = (change) => {
    this.setState({
      currentPage: this.state.currentPage + change
    });
  }

  handleScaleChange = (newScaleType) => {
    this.setState({
      scaleType: newScaleType
    });
  }

  handlePageDisplayedChange = (newNumber) => {
    this.setState({
      pageDisplayed: newNumber
    });
  }

  render() {
    return (
      <div>
        <PageMove
          currentPage={this.state.currentPage}
          pageCount={this.state.pageCount}
          onPageChange={this.handlePageChange}
        />
        <PageScaleType
          scaleType={this.state.scaleType}
          onSelectionChanged={this.handleScaleChange}
        />
      <PageDisplayed
          nPageDisplayed={this.state.pageDisplayed}
          onSelectionChanged={this.handlePageDisplayedChange}
        />
      </div>
    );
  }
}

module.exports = PdfReader;
