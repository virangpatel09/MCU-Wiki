import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand fs-2">MCU <span className="text-danger">Wiki</span></Link>
                <style jsx>{`
                            button[aria-expanded="false"] > .close {
                                display: none;
                            }
                            button[aria-expanded="true"] > .open {
                                display: none;
                            }
                `}</style>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fas fa-bars open text-white"></span>
                    <span class="fas fa-times close text-white"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link text-white">Characters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Movies" className="nav-link text-white" activeClassName="active">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Tvseries" className="nav-link text-white" >Tv-series</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar