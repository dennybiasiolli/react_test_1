const React = require('react');
const PropTypes = require('prop-types');

const { PdfCanvas } = require('./PdfCanvas');

export class PdfPage extends React.Component {
  static propTypes = {
    pdfDocument: PropTypes.object.isRequired,
    pageIndex: PropTypes.number.isRequired,
    onPdfPageLoaded: PropTypes.func,
    onPdfPageRendered: PropTypes.func
  }
  // getInitialState()
  state = {
    isPageLoaded: false
  }

  getPageNumber() {
    return (this.props.pageIndex || 0) + 1;
  }

  _getPdfPage() {
    return this.props.pdfDocument.getPage(this.getPageNumber())
      .then((page) => {
        this.props.onPdfPageLoaded && this.props.onPdfPageLoaded(page);
        this.setState({
          isPageLoaded: true,
          pdfPage: page
        });
        return page;
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.pdfDocument !== nextProps.pdfDocument || this.props.pageIndex !== nextProps.pageIndex;
  }
  componentWillUpdate(nextProps, nextState) {
    return this._getPdfPage();
  }
  componentWillMount() {
    return this._getPdfPage();
  }

  render() {
    console.log('render PdfPage', this.props.pageIndex);
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
