import React, { useEffect, useState } from 'react'
import styles from './BackToTopButton.module.css'

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState();

  useEffect( () => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false);
    })
  })

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div >
    {backToTopButton && (
      <div className={styles.backToTop} onClick={scrollUp}>^</div>
    )}
    </div>
  )
}
