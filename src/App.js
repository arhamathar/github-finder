import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import "./styles.css"

require('dotenv').config();

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   async function getData(){
  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}
  //     &client_secret=${process.env.CLIENT_SECRET}`);
  //     setUsers(res.data);
  //     setLoading(false);
  //   }
  //   getData();
  // },[]);

  async function searchUser(name){
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=${process.env.CLIENT_ID}
      &client_secret=${process.env.CLIENT_SECRET}`);
      setUsers(res.data.items);
      setLoading(false);    
  }
  function clearUser(){
    setUsers([]);
  }
  // function alertUser(isAlert){
  //   setAlert(isAlert);
  // }

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-fluid">
          {/* <Alert onAlert={alertUser} isAlert={alert}/> */}
          <Search onSearch={searchUser} onClear={clearUser} show={users.length>0?true:false}/>
          <User loading={loading} users={users} />
        </div>
      </div>
    </Router>
  );
}

export default App;
