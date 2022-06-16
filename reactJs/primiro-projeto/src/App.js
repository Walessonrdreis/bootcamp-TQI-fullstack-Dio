import logo from './logo.svg';
import './App.css';
function myName(){
  return(
    <div>
      Walesson
    </div>
  )
};
function sum(a,b ){
  return a + b
}

function App() {
  return (
    <div className="teste">
      {myName()}
      <h1>{sum(15,5)}</h1>
    </div>
  )
}

export default App;
