import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Trending } from './pages/Trending';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/" style={{margin: "10px",}}>Link to root</Link>
        <Link to="/test">Link to test</Link>
      </header>
      <Routes>
        <Route exact={true} path="/" element={<Trending />} />
        <Route exact={true} path="/test" element={<h1>TEST</h1>} />
      </Routes>
    </div>
  );
}

export default App;
