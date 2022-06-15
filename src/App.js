import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Schedule from './components/auth/Schedule'
import TeamReports from './components/auth/TeamReports'
import PlayerReport from './components/auth/PlayerReport'
import Register from './components/auth/Register'
import Layout from './components/layout/Layout'
import Header from './components/layout/Header'
import UserContext from './context/UserContext'
import Axios from 'axios'
import Cookie from 'react-cookies'
import './styles.css'


function App() {
  // const [userData, setUserData] = useState({
  //   token: undefined
  // })

  // useEffect(() =>{
  //   const checkedLoggedIn = async () => {
  //     let tokens = localStorage.getItem("token")
  //     // let tokens = Cookie.load('token')
  //     if(tokens === null){
  //       Cookie.remove("token", "")
  //       localStorage.removeItem("token")
  //       tokens = ""
  //     }

  //     await Axios.post("http://localhost:5000/users/tokenIsValid", tokens, {headers:{
  //       "Authorization" : `Bearer ${tokens}`
  //     }})
  //       setUserData({
  //         token: tokens
  //       })
  //   }
  //   checkedLoggedIn()
  // }, [])
  return (
    <>
      <BrowserRouter>
        {/* <UserContext.Provider value={{userData, setUserData}}> */}
        <Header style={{margin: '0'}}/>
        <div>
          <Switch >
            <Route exact path="/" component={Layout}/>
            <Route path="/teams" component={TeamReports}/>
            {/* <Route path="/login" component={Login}/> */}
            {/* <Route path="/register" component={Register}/> */}
            <Route path="/players" component={PlayerReport}/>
            <Route path="/schedule" component={Schedule}/>
          </Switch>
        </div>
        {/* </UserContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
