import React from 'react';
import Frontheader from './Components/Frontheader/Frontheader';
import Frontbody from './Components/Frontbody/Frontbody';
import Frontbottom from './Components/Frontbottom/Frontbottom';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
         <Frontheader />
         <Frontbody />
         <Frontbottom />
         <Footer />
    </div>
  );
}

export default App;
