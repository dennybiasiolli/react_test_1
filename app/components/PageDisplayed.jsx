var React = require('react');

class PageDisplayed extends React.Component {
  static propTypes = {
    nPageDisplayed: React.PropTypes.number.isRequired,
    onSelectionChanged: React.PropTypes.func.isRequired
  }

  onPageDisplayedChanged = (newNumber) => {
    if (newNumber !== this.props.nPageDisplayed) {
      this.props.onSelectionChanged(newNumber);
    }
  };

  setSinglePage = () => this.onPageDisplayedChanged(1);
  setDoublePage = () => this.onPageDisplayedChanged(2);

  render() {
    let styleBtnSelected = {
      fontWeight: 'bold',
      textDecoration: 'underline'
    };
    let styleBtnSingle = this.props.nPageDisplayed === 1 ? styleBtnSelected : null;
    let styleBtnDouble = this.props.nPageDisplayed === 2 ? styleBtnSelected : null;
    return (
      <div>
        <button onClick={this.setSinglePage} style={styleBtnSingle}>single page</button>
        <button onClick={this.setDoublePage} style={styleBtnDouble}>double page</button>
      </div>
    );
  }
}

module.exports = PageDisplayed;
