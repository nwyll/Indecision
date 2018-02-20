class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibile: false
    };

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent() {
    this.setState((prevState) => {
      return { visible: !prevState.visible }
    });
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleContent}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && (
          <div>
            <p>Hey! Here are some details you can now see.</p>
          </div>
        )}
        </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const state = {
//   showing: false,
// }
// const toggleContent = () => {
//   state.showing = !state.showing;
//   render();
// };
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleContent}>
//         {state.showing ? 'Hide Details' : 'Show Details'}
//       </button>
//       {state.showing && (
//         <div>
//           <p>Hey! Here are some details you can now see.</p>
//         </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// render();
