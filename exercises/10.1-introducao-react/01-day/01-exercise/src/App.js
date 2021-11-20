const Task = (value) => <li>{value}</li>;

const tasks = ['Tarefa 01', 'Tarefa 02', 'Tarefa 03'];

function App() {
  return (
    <ul>{tasks.map((task) => Task(task))}</ul>
  );
}

export default App;
