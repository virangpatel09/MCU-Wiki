import React from 'react'
import FilterBTN from './FilterBTN'

const Gender = ({updatePageNumber,updategender}) => {
    let gender=["Male","Female"];

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
    .accordion-button:focus {
      box-shadow:none;
    }
`}
    </style>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Gender
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3 bg-black">
            {
                gender.map((item,index)=>{
                    return(
                        <FilterBTN
                        updatePageNumber={updatePageNumber} 
                        job={updategender}
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

export default Gender
