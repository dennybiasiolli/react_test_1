const React = require('react');
const PropTypes = require('prop-types');

const PDFJS = require('pdfjs-dist/build/pdf.combined.js');

const { PdfPage } = require('./PdfPage');

export class Pdf extends React.Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
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

  constructor(props) {
    super(props);
    // this.handlePageRendered = this.handlePageRendered.bind(this);
  }

  componentDidMount() {
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

  handlePageRendered = (pageIndex) => {
    this.props.onPdfPageRendered && this.props.onPdfPageRendered(pageIndex);
  }

  render() {
    if (this.state.isPdfLoaded) {
      return <PdfPage
        width={this.props.width}
        height={this.props.height}
        pdfDocument={this.state.pdfDocument}
        pageLabels={this.state.pageLabels}
        onPdfPageLoaded={this.props.onPdfPageLoaded}
        onPdfPageRendered={this.handlePageRendered}
      />;
    } else {
      return null;
    }
  }
}
