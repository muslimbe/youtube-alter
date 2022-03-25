import './App.scss';
import { Switch, Route } from 'react-router-dom';


// components

import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"

// pages

import Home from "./pages/home/Home"
import Channel from "./pages/channel/Channel"
import Player from "./pages/player/Player"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/channel" component={Channel}/>
        <Route path="/video/2" component={Player}/>
      </Switch>


    </>
  );
}

export default App;
