import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>Start of Community</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;