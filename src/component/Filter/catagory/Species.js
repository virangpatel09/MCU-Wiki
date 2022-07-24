import React from 'react'
import FilterBTN from './FilterBTN'

const Species = ({updatePageNumber,updatespecies}) => {

let species = ['insectoids', 'Celestial', 'Human', 'Black Order', 'Andriod', 'Human/Celestial Hybrid', 'Titan', 'Skrull', 'Asgardian', 'Kylosians', 'Kree', 'Halfworlder', 'Flora Colossus', 'Human/Kree Hybrid', 'Synthezoid', 'Eternal', 'Luphomoids', 'Flerkens', 'Faltine', 'Sakaaran', 'Centaurian', 'Zehoberei']
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
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2 bg-black">
      {
                species.map((item,index)=>{
                    return(
                        <FilterBTN 
                        updatePageNumber={updatePageNumber}
                        job={updatespecies}
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

export default Species
