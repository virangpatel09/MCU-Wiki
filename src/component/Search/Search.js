import React from 'react'
import styles from './search.module.scss'

const Search = ({updatesearch,updatePageNumber}) => {


  return (
    <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5 mt-5`}>
      <input  
        onChange={(e) => {
            updatesearch(e.target.value);
            updatePageNumber(0);
          }} 
        className={styles.input} 
        placeholder='search character' 
        type='text'>
      </input>
      <button onClick={
        (e)=>{
          e.preventDefault();
        }
      } type="button" className={`${styles.btn} btn-danger`}>search</button>
    </form>
  )
}

export default Search
