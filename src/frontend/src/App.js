import logo from './logo.svg';
import './App.css';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
        <h1>IPL DASHBOARD</h1>
        <img src={logo} className="App-logo" alt="logo" />

      <TeamPage/>

    </div>
  );
}



export default App;
