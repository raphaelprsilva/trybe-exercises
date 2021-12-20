import React from 'react';

const appointments = ['task 01', 'task 02', 'task 03', 'task 04'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        {
          appointments.map((appointment, index) => (
              <ul key={ index }>{ Task(appointment) }</ul>
          ))
        }
      </div>
    );
  }
}

export default App;
