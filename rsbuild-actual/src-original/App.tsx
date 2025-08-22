import './App.css';
import { createSignal } from 'solid-js';

const App = () => {
  const [count, setCount] = createSignal(1);
  const increment = () => setCount(count() + 1);
  return (
    <div class="content">
      <h1>Rsbuild with Solid</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button type="button" onClick={increment}>
        {count()}
      </button>
    </div>
  );
};

export default App;
