import './App.css';
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

function soma(a,b){
  alert(a + b)
};

function App(){
  return (
    <div className="App">
      <h1>Componentes</h1>
        <legend>Clique aqui:</legend>
      <Button onClick={() => soma(10,20)} name="Walesson Reis" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(20,30)} name="Danila Reis" />
        </ComponentB>
      </ComponentA>
    </div>
  )
}

export default App;
