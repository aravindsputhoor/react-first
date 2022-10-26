import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const data = 'This is a data prop';
  return (
    <div>
      <Header data={data}/>
       <h1 style={{ backgroundColor: 'red', color: 'white' }}>Hello World!</h1>
       <Description/>
       <Description/>
       <Description/>
       <Description/>
       <p>{data}</p>
       <Footer data={data}/>
    </div>
  );
}

function Description() {
  return(
    <div>
       <p className="hello">This is simple description</p><br></br>
    </div>
  );
}

export default App;
