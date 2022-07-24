import React from 'react'

const FilterBTN = ({updatePageNumber, job, key, name, item, index }) => {
    return (
        <div>
            <style jsx>
                {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }

        `}
            </style>
            <div class="form-check">
                <input class="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
                <label
                 onClick={(x) => {
                    job(item);
                    updatePageNumber(0);
                  }}
                 class="btn btn-outline-danger" for={`${name}-${index}`}>{item}</label>
            </div>
        </div>
    )
}

export default FilterBTN
