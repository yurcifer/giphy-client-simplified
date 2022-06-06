import Masonry from 'react-masonry-css'
import styles from './Grid.module.css'

import React from 'react'

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
    {items 
      ? items.map( ({title, id}) => <div>{title}</div>)
      : <h1>Loading</h1>
    }
    </Masonry>
  )
}
