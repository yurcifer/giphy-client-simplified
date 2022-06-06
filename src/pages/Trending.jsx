import React, { useEffect, useState } from 'react'
import { getTrending } from '../api/trending';
import { Grid } from '../components/Grid/Grid';

export const Trending = () => {
  const [items, setItems] = useState([]);

  const fetchTrending = async () => { 
    const {data} = await getTrending(25);
    setItems(data);
  };

  useEffect( () => {
    fetchTrending();
  }, []);

  return (
    <div>
      <Grid items={items}></Grid>
    </div>
  )
}
