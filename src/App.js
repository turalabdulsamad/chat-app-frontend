import chattingImg from './images/chatting.png';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chattingImg} className="App-logo" alt="logo" />
        <Link
          className="App-link"
          to="/login"
        >
          Start messaging with people
        </Link>
      </header>
    </div>
  );
}

export default App;
