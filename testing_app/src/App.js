import React from 'react';
import './dist/css/App.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Header from './component/header/Header';
import Velit from './component/header/Velit';

function App() {
  return (
    <div>
    <Header/>
    <Velit/>
    </div>
  );
}

export default App;
