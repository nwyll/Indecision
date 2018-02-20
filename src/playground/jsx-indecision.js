console.log('App.js is running.')

//JSX - JavaScript XML, javascript syntax extension
const app = {
  title: 'Indecision App',
  subtitle: 'The coolest app ever made.',
  options: ['Steeping Room',"Wok'n Express", "Titaya's"]
};

const submitHandler = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:': 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>Select Option</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((item, index) => <li key={index}>{item}</li>)
        }
      </ol>

      <form onSubmit={submitHandler}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
