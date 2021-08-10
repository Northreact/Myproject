import './App.css';
import Logo from './components/logo/logo';
import Navbar from './components/navbar/navbar';
import Profile from './components/content/profile/profile';
import Message from './components/content/message/message';
import News from './components/content/news/news';
import Music from './components/content/music/music';
import Settings from './components/content/settings/settings';
import { BrowserRouter, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="menu">
          <Logo />
          <Navbar />
          <Linkbar/>
        </div>
        <div className="content">
          <Route path="/profile" component={Profile} />
          <Route path="/message" component={Message} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
