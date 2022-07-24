import React from 'react'
import styles from './Filter.module.scss'
import Gender from './catagory/Gender'
import Species from './catagory/Species'
import Status  from './catagory/Status'
export const Filter = ({updatePageNumber,updategender,updatespecies,updatestatus}) => {
  let clear = () => {
    updatestatus("");
    updategender("");
    updatespecies("");
    updatePageNumber(0);
    window.location.reload(false);
  };
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center mb-3 fw-bold fs-4'>Filters</div>
      <div
        className='text-center mb-3 text-danger text text-decoration-underline'
        style={{ cursor: "pointer" }}
        onClick={clear}
      >Clear Filters</div>

      <div className={`accordion ${styles.container}`} id="accordionExample">
        <Gender updatePageNumber={updatePageNumber} updategender={updategender}/>
        <Species updatePageNumber={updatePageNumber} updatespecies={updatespecies}/>
        <Status updatePageNumber={updatePageNumber} updatestatus={updatestatus}/>
      </div>

    </div>
  )
}

export default Filter;