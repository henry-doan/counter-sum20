import React, { Component } from 'react';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return(
      <div>
        <Counter counterName='red'  />
        <Counter counterName='blue' />
        <Counter counterName='pink' />
        <Counter counterName='purple' />
      </div>
    )
  }
}

// React.createElement(<h1></h1>)React.createElement(<p></p>)
// React.createElement(<div><h1></h1><p></p></div><h1></h1>)

export default App;