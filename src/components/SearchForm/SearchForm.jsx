import React, { useEffect, useState } from 'react'
import styles from './SearchForm.module.css'

export const SearchForm = ({ onSubmit, resetValue }) => {
  const [value, setValue] = useState('');
  const submitHandler = (element) => {
    element.preventDefault();
    if (value) {
      onSubmit(value);
    }
  }

useEffect( () => {
  setValue('');
  console.log('value' + value);
}, [resetValue] )

  const onChangeHandler = (element) => {
    setValue(element.currentTarget.value)
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.controlGroup}>
        <input
          className={styles.nativeInput}
          type="text"
          onChange={onChangeHandler}
          placeholder="Search"
          value={value}
          name="search"
          title="Enter search query"
          />
          <button className={styles.button}>Search</button>
      </div>
    </form>
  )
}
