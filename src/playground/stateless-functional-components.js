//stateless funtional components
//they are stateless, they are React components, created with a function
//they still allow for props to be passed down

const User = function() {
  //just return the jsx
  //this function is basically the equivalent of render
};

//same  with an arrow function
const Member = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  );
};

//render just like a regular component <Member name="Natalie"/>

//faster than class based components
//use these for presentational components
