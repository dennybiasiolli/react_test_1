const React = require('react');
const PropTypes = require('prop-types');

const { PdfCanvas } = require('./PdfCanvas');

export class PdfPage extends React.Component {
  static propTypes = {
    pdfDocument: PropTypes.object.isRequired,
    pageLabels: PropTypes.array,
    onPdfPageLoaded: PropTypes.func,
    onPdfPageRendered: PropTypes.func
  }
  // getInitialState()
  state = {
    isPageLoaded: false
  }

  componentDidMount() {
    return this.props.pdfDocument.getPage(this.props.pageNumber || 1)
      .then((page) => {
        this.props.onPdfPageLoaded && this.props.onPdfPageLoaded(page);
        this.setState({
          isPageLoaded: true,
          pdfPage: page
        });
        return page;
      });
  }

  render() {
    if (this.state.isPageLoaded) {
      return <PdfCanvas
        width={this.props.width}
        height={this.props.height}
        pdfPage={this.state.pdfPage}
        onPdfPageRendered={this.props.onPdfPageRendered}
      />
    } else {
      return null;
    }
  }
}
