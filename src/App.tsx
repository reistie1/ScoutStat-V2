import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Schedule from './components/Schedule/Schedule'
import TeamReports from './components/TeamReports/TeamReports'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerContainer from './components/PlayerContainer/PlayerContainer';
import Footer from './components/Footer/Footer';
import './styles.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div>
          <Switch >
            <Route exact path="/" component={Layout}/>
            <Route path="/teams" component={TeamReports}/>
            <Route path="/players" component={PlayerCard}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/player" component={PlayerContainer}/>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
