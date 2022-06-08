import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getSearched } from '../api/search'
import { BackToTopButton } from '../components/BackToTop/BackToTopButton';
import { Grid } from '../components/Grid/Grid';


export const Search = ({offset = 0, limit = 25, setOffset, location}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {search} = useLocation();

  const params = useMemo( () => new URLSearchParams(search), [search]);
  const searchQuery = params.get('q')
  const ref = useRef(null);

  const expandItems = function (data) {
    setItems([...items, ...data]);
    if (ref.current !== searchQuery) { 
      setItems([...data]);
    }
    ref.current = searchQuery;
  }

  const fetchSearched = async (query) => {
    const {data} = await getSearched(query, limit, offset);
    expandItems(data);
    setIsLoading(false);
    return data;
  }

  useEffect(() => {
    fetchSearched(searchQuery);
  }, [searchQuery, offset]);

  return (
    <div>
      {isLoading 
        ? <div>Loading...</div>
        : <Grid items={items}></Grid>
      }
      <button style={{margin: "15px"}} onClick={ () => setOffset(offset + 25)}>Load more</button>
      <BackToTopButton />
    </div>
  )
}
