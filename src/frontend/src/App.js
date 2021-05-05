import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
        <h1>IPL DASHBOARD</h1>
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Route path="/teams/:teamName">
        <TeamPage/>

        </Route>
      </Router>
    </div>
  );
}



export default App;
