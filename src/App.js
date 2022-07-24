import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import styles from "./App.css"
import { Card } from "./component/card/Card";
import { Filter } from "./component/Filter/Filter";
import React, { useState, useEffect } from "react";
import Pagination from "./component/Pagination/Pagination";
import Search from "./component/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Pages/Movies";
import Tvseries from "./Pages/Tvseries";
import Navbar from "./component/Navbar/Navbar";
import "../src/App.css"
import CardDetail from "./component/card/CardDetail";

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:name" element={<CardDetail/>}/>
          <Route path="/Movies" element={<Movies/>}/>
          <Route path="/Movies/:name" element={<CardDetail/>}/>
          <Route path="/Tvseries" element={<Tvseries/>}/>
          <Route path="/Tvseries/:name" element={<CardDetail/>}/>
        </Routes>
    </Router>
  );
}

const Home=()=> {
  
  let [pageNumber, updatePageNumber] = useState(0);
  let [search, updatesearch] = useState("");
  let [fetchdata, updatefatchdata] = useState([]);
  let [status, updatestatus] = useState("");
  let [gender, updategender] = useState("");
  let [species, updatespecies] = useState("");
  // let {characters} = fetchdata;
  let api=`https://mcu-api-app.herokuapp.com/api/v1/characters/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updatefatchdata(data);
    })();
  }, [api]);

  return (
    <div className={`App ${styles}`}>
      <div className="text-center text-white fs-2">Characters</div>
      <Search updatesearch={updatesearch} updatePageNumber={updatePageNumber}/>
      <div className="container">
        <div className="row">
            <Filter 
            updatePageNumber={updatePageNumber}
            updategender={updategender}
            updatespecies={updatespecies}
            updatestatus={updatestatus}
            />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" fetchdata={fetchdata}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} updatePageNumber={updatePageNumber}/>
    </div>
  );
}

export default App;
