import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";


const CardDetail = () => {
  let { name } = useParams();
  let [fetchdata, updatefatchdata] = useState([]);
  let api = `https://mcu-api-app.herokuapp.com/api/v1/characters/?page=0&name=${name}`;
  
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updatefatchdata(data);
    })();
  }, [api]);

  return (
    <div>
      {(() => {
        let { characters } = fetchdata;
        if (characters && Object.keys(characters).length > 0) {
          let { category, species, gender, status, image, description } = characters[0];
          let image_url = `${image}.jpg`;
          return (
            <div>
                <style jsx>
                {`
          .img-fluid {
            height:302px;
            width:265px;
          }
         

        `}
            </style>
            <div className='row d-flex justify-content-center mb-4'>
              <div className="col-lg-6 col-sm-8 col-11">
                <div className='row'>
                <div className="mb-1 fs-2 text-danger fw-bold mb-2">
                   {name}
                </div>
                <div className="mb-2">
                   {description}
                </div>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="container d-flex justify-content-center mb-5">
              <div className="d-flex flex-column gap-3">
                {/* <h1 className="text-center">{name}</h1> */}

                <img className="img-fluid" src={image_url} alt="" />
                {(() => {
                  if (status === "Dead") {
                    return <div className="badge bg-danger fs-5">{status}</div>;
                  } else if (status === "Alive") {
                    return <div className=" badge bg-success fs-5">{status}</div>;
                  } else {
                    return <div className="badge bg-secondary fs-5">{status}</div>;
                  }
                })()}
                <div className="content">
                  <div className="">
                  Gender : <span className="text-danger">{gender}</span>
                  </div>
                  <div className="">
                  category : <span className="text-danger">{category}</span>
                  </div>
    
                  <div className="">
                  Species : <span className="text-danger">{species} </span>
                  </div>

                </div>
              </div>
            </div>
            </div>
            </div>
          )
        }

      })()}
    </div>
  );
}
export default CardDetail