import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount(){
    window.setTimeout(() =>{
      this.setState({ 
        copo: 'suco'
      })
    },2000)
  }
  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
    //this.state.copo = 'refrigerante'má prática
  }

  render() {
    const {clock, copo} = this.state
    return (
      <div>
      
          <h1>{clock}</h1>
          <button onClick={() => this.alterarCopo()}>
           <h1>{copo}</h1>
          </button>

        
      </div>//fim do Pai


    )
  }

}



export default App;
