var React = require('react');

class PdfPage extends React.Component {
  render() {
    let pdPageStyle = {
      border: '1px solid black'
    };
    return (
      <div style={pdPageStyle}>
        <h1>I am the page</h1>
      </div>
    );
  }
}

module.exports = PdfPage;
