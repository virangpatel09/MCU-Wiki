import React from 'react'
const Inputgroup = ({movie,movielist,task}) => {
    return (
        <div>
            <select 
            onChange={
                (e) => {
                    task("");
                    task(e.target.value);
                
                }
            } 
            className={`form-select`} id={movie}>
                <option selected>Select ...</option>
                {
                  movielist.map((x)=>{
                    return (
                        <option value={x}>{x}
                        </option>
                      );
                  })
                }
            </select>
        </div>
    )
}

export default Inputgroup
