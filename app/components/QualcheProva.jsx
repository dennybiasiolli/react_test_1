const React = require('react');


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props, {
      value: props.value || ''
    });
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.onChange && this.props.onChange(this.state.value);
    });
  }
  render() {
    return <input {...this.state}
      ref="myInput"
      onChange={this.handleChange}
    />
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleChangeInput(newText) {
    console.log('handleChangeInput', newText);
  }
  render() {
    const InputStyle = {
      background: '#999'
    };
    return (
      <div>
        <Input
          type="text"
          value={this.props.value}
          style={InputStyle}
          onChange={this.handleChangeInput}
        />
        <button>search</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        I'm the Header bar!
        <Search value="search text" />
      </div>
    );
  }
}

class ListaDiProva extends React.Component {
  render() {
    return (
      <ul>
        {this.props.elenco.map((elem, key) => <li key={key}>{elem}</li>)}
      </ul>
    );
  }
}

const StyledComponentH1 = (styleParam) => {
  return class StyledComponentH1 extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.refs.theH1.setAttribute('style', styleParam || '');
    }
    componentDidUpdate() {
      this.refs.theH1.setAttribute('style', styleParam || '');
    }
    render() {
      return (
        <h1 ref="theH1">{this.props.children}</h1>
      );
    }
  };
};

const MyStyledH1 = StyledComponentH1(`
  color: #fedcba;
  background: #abcdef;
`);

class ComportiamociCosì extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
  }
  render() {
    return (
      <div>
        <hr />
        <h3>Contenuto</h3>
        <MyStyledH1>Ciao a tutti</MyStyledH1>
        <hr />
        {this.props.children}
        <hr />
      </div>
    );
  }
}

module.exports = {
  Header, ListaDiProva, ComportiamociCosì
};
