import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Search } from './pages/Search';
import { Trending } from './pages/Trending';

function App() {
  let navigate = useNavigate();
  const search = (query) => {
    navigate(`/search?q=${query}`);
  }
  return (
    <div className="App">
      <header className='header'>
        {/* <Link to="/" style={{margin: "10px",}}>Link to root</Link>
        <Link to="/test">Link to test</Link> */}
        <SearchForm onSubmit={ search } />
      </header>
      <Routes>
        <Route exact={true} path="/" element={<Trending />} />
        <Route exact={true} path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
