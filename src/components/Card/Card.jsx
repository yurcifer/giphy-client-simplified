import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import React, { memo, useState } from 'react'

const Card = (
  {className,
  previewUrl,
  id,}
) => {

  const [loaded, setLoaded] = useState(false);

  const imageInlineStyles = {
    opacity: loaded ? 1 : 0,
  }
  const loadingInlineStyles = {
    position: "absolute",
    alignSelf: "center",
    opacity: loaded ? 0 : 1,
  }

  return (
    <Link
      className={[styles.root, className].join(' ')}
      to={`${process.env.PUBLIC_URL}/gif/${id}`}
      >
      <img 
        key={id}
        src={previewUrl}
        style={imageInlineStyles}
        onLoad={() => setLoaded(true)}
        alt=""
        className={styles.imgGif}
        />
      <div className='Loader' style={loadingInlineStyles}>Loading...</div>
    </Link>
  )
};

const wrapped = memo(Card, (props, nextProps) => props.id !== nextProps.id);
export {wrapped as Card};