import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/index';
import Details from './pages/Details/index';

class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </div>
    );
  }
}

export default App;
