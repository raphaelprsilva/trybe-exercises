import './App.css';

function App() {
  const element = (
  <div>
    <div> Hello World!</div>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
  );
  return (element);
}

export default App;
