import React, { Component } from 'react';
import './Boxes.css';

const Cards = () => {
    return (

        <React.Fragment>

            <div className="card p-5 mt-5 box">
                <div className="row py-3">
                    <a href="" className="box-tag">
                        <img src="img/painting.png" className="w-25"/>
                        <span className="text-uppercase px-3 fs-6 ">Paintings</span>
                    </a>
                </div>
                <div className="row py-3">
                    <a href="" className="box-tag">
                        <img src="img/bio.png" className="w-25"/>
                        <span className="text-uppercase px-4 fs-6">Myths</span>
                    </a>
                </div>
                <div className="row py-3">
                    <a href="" className="box-tag">
                        <img src="img/fact.png" className="w-25"/>
                        <span className="text-uppercase px-3 fs-6">Art Facts</span>
                    </a>
                </div>
            </div>

            <div className="row card my-4 p-3 box">
                <div className="row">
                    <h5>Would like to stay in touch? Feel free to message me to have a conversation!</h5>
                </div>
                <input></input>
            </div>

            </React.Fragment>
    )
} 

export default Cards;