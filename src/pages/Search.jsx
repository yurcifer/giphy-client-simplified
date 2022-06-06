import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getSearched } from '../api/search'
import { Grid } from '../components/Grid/Grid';


export const Search = () => {
  const [items, setItems] = useState([]);
  const {search} = useLocation();

  const params = useMemo( () => new URLSearchParams(search), [search]);
  const searchQuery = params.get('q')

  const fetchSearched = async (query) => {
    const {data} = await getSearched(query);
    setItems([...data]);
  }

  useEffect( () => {
    fetchSearched(searchQuery)
  }, [searchQuery]);

  return (
    <div>
      <Grid items={items}></Grid>
    </div>
  )
}
