const React = require('react');
const PropTypes = require('prop-types');

const PDFJS = require('pdfjs-dist/build/pdf.combined.js');

const { PdfPage } = require('./PdfPage');

export class Pdf extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    pageIndex: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    onPdfLoaded: PropTypes.func,
    onPdfLabelsLoaded: PropTypes.func,
    onPdfPageLoaded: PropTypes.func,
    onPdfPageRendered: PropTypes.func
  }
  // getInitialState()
  state = {
    isPdfLoaded: false,
    numPages: 0
  }

  componentWillMount() {
    return this.props.href && PDFJS.getDocument(this.props.href)
      .then((pdfDocument) => {
        this.props.onPdfLoaded && this.props.onPdfLoaded(pdfDocument);
        return pdfDocument.getPageLabels()
          .then((pageLabels) => {
            this.props.onPdfLabelsLoaded && this.props.onPdfLabelsLoaded(pageLabels);
            this.setState({
              isPdfLoaded: true,
              numPages: pdfDocument.numPages,
              pdfDocument: pdfDocument,
              pageLabels: pageLabels
            });
            return pdfDocument;
          });
      });
  }

  _getPageLabel(pageIndex) {
    if (this.state.pageLabels && this.state.pageLabels[pageIndex]) {
      return this.state.pageLabels[pageIndex];
    } else {
      return pageIndex + 1;
    }
  }

  handlePageLoaded = (page) => {
    this.props.onPdfPageLoaded && this.props.onPdfPageLoaded(
      Object.assign(page, {
        pageLabel: this._getPageLabel(page.pageIndex)
      })
    );
  }

  render() {
    if (this.state.isPdfLoaded) {
      return <PdfPage
        pageIndex={this.props.pageIndex || 0}
        width={this.props.width}
        height={this.props.height}
        pdfDocument={this.state.pdfDocument}
        onPdfPageLoaded={this.handlePageLoaded}
        onPdfPageRendered={this.props.onPdfPageRendered}
      />;
    } else {
      return null;
    }
  }
}
