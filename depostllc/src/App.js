import './App.css';

import Header from './components/header/header'
import Navbar from './components/navbar/navbar'

import Portfolio from './components/portfolio/portfolio'
import Orders from './components/orders/orders'
import Analytics from './components/analytics/analytics'
import Chat from './components/chat/chat'
import Settings from './components/settings/settings'

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navigation">
          <Navbar />
        </div>
        <div className="content">
          <Header />
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/analytics" component={Analytics}></Route>
          <Route path="/chat" component={Chat}></Route>
          <Route path="/settings" component={Settings}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
