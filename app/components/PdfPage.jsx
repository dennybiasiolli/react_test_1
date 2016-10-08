var React = require('react');

class PdfPage extends React.Component {
  componentDidMount() {
    this._echoComponentSize();
  }

  componentWillUpdate(nextProps, nextState) {
    this._echoComponentSize();
  }

  _echoComponentSize() {
    console.log('_echoComponentSize', this.refs);
    console.log('_echoComponentSize', this.refs.pdfPage.offsetWidth, this.refs.pdfPage.offsetHeight);
  }

  render() {
    let pdPageStyle = {
      border: '1px solid black'
    };
    return (
      <div style={pdPageStyle} ref='pdfPage'>
        <h1>I am the page</h1>
      </div>
    );
  }
}

module.exports = PdfPage;
