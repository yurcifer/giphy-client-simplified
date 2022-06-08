import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getSearched } from '../api/search'
import { BackToTopButton } from '../components/BackToTop/BackToTopButton';
import { Grid } from '../components/Grid/Grid';


export const Search = ({offset = 0, limit = 25, setOffset}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {search} = useLocation();

  const params = useMemo( () => new URLSearchParams(search), [search]);
  const searchQuery = params.get('q')

  const fetchSearched = async (query) => {
    const {data} = await getSearched(query, limit, offset);
    setIsLoading(false)
    return data;
  }

  useEffect( () => {
    fetchSearched(searchQuery).then( (data) => setItems([...items, ...data]))
  }, [offset]);

  useEffect( () => {
    fetchSearched(searchQuery).then( (data) => setItems([...data]))
  }, [searchQuery])

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
