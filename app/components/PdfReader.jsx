var React = require('react');

var PageMove = require('./PageMove');
var PageScaleType = require('./PageScaleType');
var PageDisplayed = require('./PageDisplayed');
var PdfPage = require('./PdfPage');

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
    let arr = Array.apply(null, {length:this.state.pageDisplayed});
    let pdfPages = arr.map((elem, index) => {
      return <PdfPage />;
    });
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
      {pdfPages}
      </div>
    );
  }
}

module.exports = PdfReader;
