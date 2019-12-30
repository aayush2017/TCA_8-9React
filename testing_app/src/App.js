import React from 'react';
import './dist/css/App.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import Menubar from './component/MenuBar';
import Header from './component/header/Header';
import Velit from './component/header/Velit';

function App() {
  return (
    <Router>
      <div className="App">
        <Menubar />
        <Route exact path="/" component={Header} />
        <Route exact path="/Velit" component={Velit} />
      </div>
    </Router>
  );
}
export default App;