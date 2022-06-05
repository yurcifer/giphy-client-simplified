import React, { useEffect, useState } from 'react'
import { getTrending } from '../api/trending';

export const Trending = () => {
  const [items, setItems] = useState([]);

  const fetchTrending = async () => { 
    const {data} = await getTrending(50);
    setItems(data);
  };

  useEffect( () => {
    fetchTrending();
  }, []);

  return (
    <div>
      {items 
      ? items.map( ({title, id}) => <h1>{title}</h1>)
      : <h1>Loading</h1>}
    </div>
  )
}
