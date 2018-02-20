class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);
  }

  //Lifecycle method when component first mounts to the DOM
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //Do nothig, use default options
    }
  }

  //Lifecycle method fires after the component updates - if props or state values change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  //Lifecycle method fires when a component goes away
  componentWillUnmount() {
    console.log('component will unmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOneOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option){
    if (!option) {
      return 'Enter a valid option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));

  }

  render() {
    const subtitle = "Put your life in the hands of a computer.";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOneOption={this.handleDeleteOneOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <p>Options:</p>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started.</p>}
      <ol>
        {
          props.options.map((option) =>
          <Option
            key={option}
            optionText={option}
            handleDeleteOneOption={props.handleDeleteOneOption}
          />
         )
        }
      </ol>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <li>{props.optionText}
        <button onClick={(e) => {props.handleDeleteOneOption(props.optionText)}}>
          Remove
        </button>
      </li>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }

  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
