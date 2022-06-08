import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGifById } from '../../api/getGifById'
import styles from './Gif.module.css'

export const Gif = () => {
  // const [gifSrc, setGifSrc] = useState('');
  const [title, setTitle] = useState('');
  const [data, setData] = useState({});
  const gifId = useParams().id;

  const fetchGif = async (gifId) => {
    const response = await getGifById(gifId);
    const update = {
      title: response.title,
      src: response.images.original.url,
      url: response.url
    }
    setData({...data, ...update});
  }

  useEffect( () => {
    fetchGif(gifId);
  }, [gifId]);

  return (
    <div className={styles.root}>
      <div className={styles.image_container}>
        <img
          alt="Something went wrong"
          src={data.src}
        />
      </div>
      
      <div className={styles.description} >
        <p>{data.title}</p>
        <a className={styles.giphy_link} href={data.url} target="_blank" rel="noopener noreferrer">Open on GIHPY.COM</a>
      </div>
    </div>
  )
}
