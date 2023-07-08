import React from "react";
import './Navbar.css';

const Navbar = () => {

    return (
        <div class="header container-expand-md">

            <div className="row">
                <nav id="navbar" class="navbar navbar-expand-md">

                    <div className="col-md-2">
                        <a href="" class="logo d-flex align-items-center">
                            <img src="img/lotus.png" alt=""/>
                            <span className="px-4">LotusBlossom</span>
                        </a>
                    </div>

                    <div className="col-md-9">
                        <div class="collapse navbar-collapse">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a class="nav-link active px-3" href="#">Contact</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-3" href="#">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-3" href="#">Paintings</a>
                                    </li>         
                                    <li class="nav-item">
                                        <a class="nav-link px-3" href="#">Home</a>
                                    </li>              
                                </ul>
                            </div>
                        </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;