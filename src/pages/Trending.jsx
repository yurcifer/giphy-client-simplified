import React, { useEffect, useState } from 'react'
import { getTrending } from '../api/trending';
import { Grid } from '../components/Grid/Grid';

export const Trending = ({limit = 25, offset = 0}) => {
  const [items, setItems] = useState([]);

  const fetchTrending = async () => { 
    const {data} = await getTrending(limit, offset);
    return data;
  };

  useEffect( () => {
    fetchTrending().then( (data) => setItems([...items, ...data]));
  }, [offset,]);

  return (
    <div>
      <Grid items={items}></Grid>
    </div>
  )
}
