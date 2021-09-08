import React, {Component} from 'react';
import "./styles/App.css";
import Illustraion from './components/Illustration/Illustration';
import Nav from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Illustraion />
      <section className="wrapper relative">
        <Nav />
      </section>
    </div>
  );
}

export default App;
