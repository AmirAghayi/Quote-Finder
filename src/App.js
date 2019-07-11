import React, { useEffect } from 'react';
import routes from './routes';
import { connect } from 'react-redux';
import { setUser } from './redux/reducer';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Axios from 'axios';



const App = (props) => {


useEffect (() => {
    Axios.get('/api/me')
    .then(response => {
      if (!response.data){
        return props.history.push('/Login')
      }
      props.setUser(response.data.username)
    })
}, [])




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

function mapStateToProps (state){
  return state;
}



export default withRouter(connect (mapStateToProps, {setUser})(App));
