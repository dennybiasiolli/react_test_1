var React = require('react');

var PageMove = require('./PageMove');

class PdfReader extends React.Component {
  state = {
    pdfCurrentPage: 1,
    pdfPageCount: 15
  }

  handlePageChange = (change) => {
    this.setState({
      pdfCurrentPage: this.state.pdfCurrentPage + change
    });
  }

  render() {
    return (
      <div>
        <PageMove
          currentPage={this.state.pdfCurrentPage}
          pageCount={this.state.pdfPageCount}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

module.exports = PdfReader;
