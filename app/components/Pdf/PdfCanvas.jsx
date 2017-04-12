const React = require('react');
const PropTypes = require('prop-types');

const Measure = require('react-measure');

export class PdfCanvas extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    pdfPage: PropTypes.object.isRequired,
    onPdfPageRendered: PropTypes.func
  }
  // getInitialState()
  state = {
    isPageRendered: false
  }

  getMainDivStyle() {
    return {
      display: 'block',
      margin: 0,
      float: 'left',
      width: this.props.width,
      height: this.props.height
    }
  }

  _getOriginalViewport(page) {
    return this._getScaledViewport(page, 1);
  }
  _getScaledViewport(page, scale) {
    return page.getViewport(scale || 1);
  }
  _getViewport(page, desiredWidth, desiredHeight) {
    const originalViewport = this._getOriginalViewport(page);
    if (desiredWidth) {
      const scaleW = desiredWidth / originalViewport.width;
      const scaleH = (desiredHeight || 0) / originalViewport.height;
      const scale = scaleH ? Math.min(scaleW, scaleH) : scaleW;
      console.log('scaleW', scaleW, 'scaleH', scaleH, 'scale', scale)
      return this._getScaledViewport(page, scale);
    } else {
      return originalViewport;
    }
  }

  componentDidMount() {
    const componentWidth = this.props.width || this.refs.mainDiv.offsetWidth;
    const componentHeight = this.props.height;

    const viewport = this._getViewport(this.props.pdfPage, componentWidth, componentHeight);

    let canvas = this.refs.pdfCanvas;
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    this.props.pdfPage.render(renderContext).promise
      .then(() => {
        this.props.onPdfPageRendered && this.props.onPdfPageRendered(this.props.pdfPage.pageIndex);
      });
  }
  render() {
    return (
      // <Measure onMeasure={this._updateDimensions.bind(this)}>
      <div ref="mainDiv" style={this.getMainDivStyle()}>
        {/*<h4>PDF {this.props.href}</h4>
        <p>Loaded: {this.state.isPdfLoaded.toString()}</p>
        <p>Pages: {this.state.numPages}</p>*/}
        <canvas ref="pdfCanvas" width="0" height="0"></canvas>
      </div>
      // </Measure>
    );
  }
}
