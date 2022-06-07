import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getSearched } from '../api/search'
import { Grid } from '../components/Grid/Grid';


export const Search = ({offset = 0, limit = 25}) => {
  const [items, setItems] = useState([]);
  const {search} = useLocation();

  const params = useMemo( () => new URLSearchParams(search), [search]);
  const searchQuery = params.get('q')

  const fetchSearched = async (query) => {
    const {data} = await getSearched(query, limit, offset);
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
      <Grid items={items}></Grid>
    </div>
  )
}
