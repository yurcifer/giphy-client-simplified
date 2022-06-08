import { useState } from 'react';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Gif } from './components/Gif/Gif';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Search } from './pages/Search';
import { Trending } from './pages/Trending';

function App() {
  const [offset, setOffset] = useState(0);
  const [resetValue, setResetValue] = useState(1);
  let navigate = useNavigate();

  const search = (query) => {
    setOffset(0);
    navigate(`/search?q=${query}`);
  }
  const resetState = () => {
    setOffset(0);
    setResetValue(!resetValue);
  }
  return (
    <div className="App">
      <header className='header'>
        <Link to="/" className="link" onClick={ resetState }>Home</Link>
        <SearchForm onSubmit={ search } resetValue={resetValue} />
      </header>
      <Routes>
        <Route exact={true} path="/" element={<Trending offset={offset} setOffset={setOffset} />} />
        <Route exact={true} path="/search" element={<Search offset={offset} setOffset={setOffset} /> }/>
        <Route exact={true} path="/gif/:id" element={<Gif /> }/>
      </Routes>
      
    </div>
  );
}

export default App;
