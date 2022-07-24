import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

export const Pagination = ({ pageNumber, updatePageNumber }) => {
  let [width, updatewidth] = useState(window.innerWidth);

  let updatedim = () => {
    updatewidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updatedim);
    return () => window.removeEventListener("resize", updatedim);
  }, [])
  return (
    <>
      <ReactPaginate
        pageCount={9}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        className='pagination justify-content-center gap-4 my-4'
        forcePage={0}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName={`btn btn-danger prev ${styles.a}`}
        nextClassName={`btn btn-danger next ${styles.a}`}
        pageClassName="page-item"
        pageLinkClassName={`${styles.link} page-link`}
        onPageChange={
          (x) => {
            updatePageNumber(x.selected)
          }
        }
        activeClassName={`active`}
      />
    </>
  )
}

export default Pagination;