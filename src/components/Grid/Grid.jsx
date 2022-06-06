import Masonry from 'react-masonry-css'
import styles from './Grid.module.css'

import React from 'react'
import { Card } from '../Card/Card';

export const Grid = ({items}) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <Masonry
    className={styles.grid}
    columnClassName={styles.grid_column}
    breakpointCols={breakpointColumnsObj}>
    {items.map( ({id, url, images, title}) => 
      <div>
        <Card 
          id={id}
          key={id}
          url={url}
          previewUrl={images.preview_gif.url}
          title={title}
          />
      </div>)
    }
    </Masonry>
  )
}
