import React from 'react';
import routes from './routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';









const App = (props) => {




  toast.configure({
    autoClose: 2000,
    position: 'top-center',
    color: 'black',
  })


  return (
    <div className="App">
         {routes}
         
    </div>
  );
}

export default App;
