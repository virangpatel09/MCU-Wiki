import React, { useEffect, useState } from "react";
import Card from "../component/card/Card";
import Inputgroup from "../component/Inputgroup";

const Movies = () => {
    let [fetchdata, updatefatchdata] = useState([]);
    let [pagenumber,updatePageNumber] = useState(0);
    let [movies, updatemovies] = useState("Ant-Man");
    let movielist = ['Ant-Man', 'Ant-Man and The Wasp', 'Ant-Man and The Wasp: Quantumania', 'Avengers: Age of Ultron', 'Avengers: Infinity War', 'Black Panther', 'Black Widow', 'Captain America: Civil War', 'Captain America: The First Avenger', 'Captain America: The Winter Soldier', 'Captain Marvel', 'Doctor Strange', 'Doctor Strange in the Multiverse of Madness ', 'Eternals', 'Guardians of the Galaxy', 'Guardians of the Galaxy Vol.2', 'Iron Man', 'Iron Man 2', 'Iron Man 3', 'Shang-Chi and The Legend of The Ten Ring', 'Spider-Man: Far From Home', 'Spider-Man: Homecoming', 'Spider-Man: No Way Home', 'The Avengers', 'The Incredible Hulk', 'The Marvels', 'Thor', 'Thor: Love and Thunder', 'Thor: Ragnarok', 'Thor: The Dark World'];
    let api = `https://mcu-api-app.herokuapp.com/api/v1/characters/?page=${pagenumber}&movie=${movies}&name=`;

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
                    <span className="text-danger">{movies === "" ? "Unknown" : movies}</span>
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-3 col-12 mb-4">
                    <h4 className="text-center mb-4">Pick Movie</h4>
                    <Inputgroup name="movie" movielist={movielist} task={updatemovies}/>
                </div>
                <div className='col-lg-8 col-12'>
                    <div className="row">
                        <Card page="/Movies/" fetchdata={fetchdata} />
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

export default Movies