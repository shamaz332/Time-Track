import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//imports de los componentes
import IndexPage from './layout/IndexPage';


class App extends React.Component {
  render() {
    return (
      <main className="main">
        <Router>
          <IndexPage/>
        </Router>
      </main>
    )
  }
}

export default App;
