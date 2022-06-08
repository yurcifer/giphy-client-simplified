import React, { useEffect, useState } from 'react'
import { getTrending } from '../api/trending';
import { BackToTopButton } from '../components/BackToTop/BackToTopButton';
import { Grid } from '../components/Grid/Grid';

export const Trending = ({limit = 25, offset = 0, setOffset}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchTrending = async () => { 
    const {data} = await getTrending(limit, offset);
    setIsLoading(false)
    return data;
  };

  useEffect( () => {
    fetchTrending().then( (data) => setItems([...items, ...data]));
  }, [offset,]);

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
