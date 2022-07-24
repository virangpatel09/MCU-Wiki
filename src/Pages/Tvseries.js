import React, { useEffect, useState } from "react";
import Card from "../component/card/Card";
import Inputgroup from "../component/Inputgroup";

const Tvseries = () => {
  let [fetchdata, updatefatchdata] = useState([]);
  let [pagenumber,updatePageNumber] = useState(0);
  let [tvseries, updatetvseries] = useState("Hawkeye");
  let tvserieslist = ['Hawkeye', 'Loki', 'The Falcon and The Winter Soldier', 'WandaVision', 'What If...?'];
  let api = `https://mcu-api-app.herokuapp.com/api/v1/characters/?page=${pagenumber}&movie=NA&name=&tv_series=${tvseries}`;
  useEffect(() => {
    (async function () {
        let data = await fetch(api).then((res) => res.json());
        updatefatchdata(data);
      })();
  }, [api]);

  let prev=()=>{
      if(pagenumber===0) return
      updatePageNumber((x)=>x-1);
  };

  let next=()=>{
      updatePageNumber((x)=>x+1);
  }

  return (
    <div className='container'>
      <div className='row'>
          <div className="text-center mb-5 fs-2">
              Movie :{" "}
              <span className="text-danger">{tvseries === "" ? "Unknown" : tvseries}</span>
          </div>
      </div>
      <div className='row'>
          <div className="col-lg-3 col-12 mb-4">
              <h4 className="text-center mb-4">Pick Movie</h4>
              <Inputgroup name="tvseries" movielist={tvserieslist} task={updatetvseries}/>
          </div>
          <div className='col-lg-8 col-12'>
              <div className="row">
                  <Card page="/Tvseries/" fetchdata={fetchdata} />
              </div>
          </div>
      </div>
      <div className="row">
          <div className="d-flex justify-content-center gap-4 my-4">
              <button onClick={prev} type="button" className="btn btn-danger">Prev</button>
              
              <button onClick={next} type="button" className="btn btn-danger">Next</button>
          </div>
      </div>
  </div>
  )
}

export default Tvseries