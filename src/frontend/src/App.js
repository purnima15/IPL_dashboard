import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <div className="App">
        <h1>IPL DASHBOARD</h1>
        <img src={logo} className="App-logo" alt="logo" />


      <Router>
          <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}



export default App;
