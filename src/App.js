import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import {useState} from 'react';

function App() {
  const data = 'This is a data prop';
  const [count, setCount] = useState(0);
 
  const addCount = () => {
    setCount(count+1);
  }
  let obj = {
    title: 'First Counter',
    count
  }
  return (
    <div>
      <Header data={data} />
      <h1 style={{ backgroundColor: 'red', color: 'white' }}>Hello World!</h1>
      <Description />
      <Description />
      <Description />
      <Description />
      <p>{data}</p><br></br>

      <Counter {...obj} />
      <Counter title="Second Counter" count={count} />

      <button onClick={addCount}>Add</button>
      <Footer data={data} />
    </div>
  );
}

function Description() {
  return (
    <div>
      <p className="hello">This is simple description</p><br></br>
    </div>
  );
}

export default App;
