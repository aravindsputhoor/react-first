import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Employee from "./components/Employee";
import SampleComp from './components/SampleComp';
import {useState} from 'react';

function App() {
  const data = 'This is a data props';
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);
 
  const addCount = () => {
    setCount(count+1);
  }
  let obj = {
    title: 'First Counter',
    count
  }

  let emp = [
    {name: 'Akhil', age: 27},
    {name: 'Nikil', age: 29},
    {name: 'Manu PP', age: 20},
  ];

  return (
    <div>
      <Header data={data} />
      <h1 style={{ backgroundColor: 'red', color: 'white' }}>Hello World!</h1>
      <Description />
      <Description />
      <Description />
      <Description />
      <p>{data}</p><br></br>

      <h3>Counter</h3><hr></hr>
      <Counter {...obj} />
      <Counter title="Second Counter" count={count} />
      <button onClick={addCount}>Add</button>
      <br></br><br></br>
      
      <h3>Employees</h3><hr></hr>
      {
        // emp.map((value, index)=>{
        //   return(<Employee key={index} name={value.name} age={value.age} />);
        // })
        emp.map((value, index)=>{
          return(<Employee key={index} {...value} />);
        })
      }
      <br></br><br></br>

      <h3>Mounting Unmounting Update</h3><hr></hr>
      <button onClick={()=> setState(!state)}>Show/hide</button>
      {/* {state ? <SampleComp /> : null} */}
      {state && <SampleComp />}
      
      <br></br><br></br><br></br>
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
