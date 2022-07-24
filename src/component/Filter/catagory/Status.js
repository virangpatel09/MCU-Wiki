import React from 'react'
import FilterBTN from './FilterBTN'
const Status = ({updatePageNumber,updatestatus}) => {
    let status=["Dead","Alive"];
  return (
    <div className="accordion-item">
            <style jsx>
    {`
      
      .accordion-button:not(.collapsed) {
        color: white;
        background-color: #dc3545;
    }
    .accordion-button {
      color:#dc3545;
    }
`}
    </style>
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Status
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3 bg-black">
        {
                status.map((item,index)=>{
                    return(
                        <FilterBTN 
                        updatePageNumber={updatePageNumber}
                        job={updatestatus}
                        key={index}
                        name="gender"
                        item={item}
                        index={index}
                        />
                    )
                }
                )}
        </div>
        </div>
    </div>
  )
}

export default Status
