import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Schedule from './components/Schedule/Schedule'
import TeamReports from './components/TeamReports/TeamReports'
import PlayerReport from './components/PlayerReports/PlayerReport'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import PlayerCard from '../src/components/PlayerCard/PlayerCard';
import PlayerContainer from '../src/components/PlayerContainer/PlayerContainer';
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
            <Route path="/players" component={PlayerCard}/>
            <Route path="/players" component={PlayerReport}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/player" component={PlayerContainer}/>
          </Switch>
        </div>
        {/* </UserContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
