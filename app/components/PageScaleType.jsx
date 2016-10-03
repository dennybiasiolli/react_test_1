var React = require('react');

class PageScaleType extends React.Component {
  static propTypes = {
    scaleType: React.PropTypes.string.isRequired,
    onSelectionChanged: React.PropTypes.func.isRequired
  }

  onScaleChanged = (newType) => {
    if (newType !== this.props.scaleType) {
      this.props.onSelectionChanged('page-' + newType);
    }
  }

  setPageWidth = () => this.onScaleChanged('width');
  setPageHeight = () => this.onScaleChanged('height');
  setPageFit = () => this.onScaleChanged('fit');

  render() {
    let styleBtnSelected = {
      fontWeight: 'bold',
      textDecoration: 'underline'
    };
    let styleBtnWidth = this.props.scaleType === 'page-width' ? styleBtnSelected : null;
    let styleBtnHeight = this.props.scaleType === 'page-height' ? styleBtnSelected : null;
    let styleBtnFit = this.props.scaleType === 'page-fit' ? styleBtnSelected : null;
    return (
      <div>
        <button onClick={this.setPageWidth} style={styleBtnWidth}>width</button>
        <button onClick={this.setPageHeight} style={styleBtnHeight}>height</button>
        <button onClick={this.setPageFit} style={styleBtnFit}>fit</button>
      </div>
    );
  }
}

module.exports = PageScaleType;
