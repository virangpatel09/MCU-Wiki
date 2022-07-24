import React from 'react'
import styles from './card.module.scss'
import { Link } from "react-router-dom";

export const Card = ({ page, fetchdata }) => {
  let { characters } = fetchdata;
  let display;
  if (characters && Object.keys(characters).length > 0) {
    display = characters.map((x) => {
      let { _id, image, name, status, category } = x;
      let image_url = `${image}.jpg`;
      return (
        <Link
          to={`${page}${name}`}

          className="col-lg-4 col-md-6 position-relative mb-5" key={_id}>
  
          <div className={`${styles.cards} d-flex justify-content-center flex-column`}>
            <img className={`${styles.img} img-fluid`} src={image_url} alt='' />
            <div className={`${styles.content}`}>
              <div className="fs-4 mb-4">{name}</div>
              <div className='fs-6'>Category : <span className="text-danger">{category}</span></div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (<div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>)
            }
            else {
              return (<div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>)
            }
          })()}
        </Link>
      )
    })
  }

  else {
    display = "Character not Found";
  }
  return <>{display}</>;
}

export default Card;