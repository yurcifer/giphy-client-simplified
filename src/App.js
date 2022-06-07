import { useState } from 'react';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { BackToTopButton } from './components/BackToTop/BackToTopButton';
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
        <Link to="/" style={{margin: "10px",}} onClick={ resetState }>Home</Link>
        <SearchForm onSubmit={ search } resetValue={resetValue} />
      </header>
      <Routes>
        <Route exact={true} path="/" element={<Trending offset={offset} />} />
        <Route exact={true} path="/search" element={<Search offset={offset} /> }/>
      </Routes>
      <button style={{margin: "15px"}} onClick={ () => setOffset(offset + 25)}>Load more</button>
      <BackToTopButton />
    </div>
  );
}

export default App;
