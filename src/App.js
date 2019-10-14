import React, {Component} from 'react';
import { Button } from './components';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Hello, World!</h1>
        <Button className='qwe' type='primary'>
          This is button
        </Button>
      </div>
    );  
  }
}

export default App;
