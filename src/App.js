import React from 'react';
import Footer from './components/Footer/Footer';
import './global.css';
import ButtonScreen from './components/ButtonScreen/ButtonScreen';

function App() {

  return (
    <div className="app">
      <ButtonScreen />
      <div className="content" />
      <Footer />
    </div>
  );
}

export default App;
