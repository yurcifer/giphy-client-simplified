import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGifById } from '../../api/getGifById'
import styles from './Gif.module.css'

export const Gif = () => {
  const [copyLabel, setCopyLabel] = useState('Copy link');
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

  const copyToClipboard = function (value) {
    try {
      navigator.clipboard.writeText(value);
      setCopyLabel('Copied');
      setTimeout( () => setCopyLabel('Copy link'), 3000);
    } catch (e) {
      setCopyLabel('Error');
      console.error('Copy error' + e);
    }
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
        <div className={styles.btnWrapper}>
          <button className={styles.btn} onClick={ () => copyToClipboard(data.url)}>{copyLabel}</button>
        </div>
      </div>
    </div>
  )
}
