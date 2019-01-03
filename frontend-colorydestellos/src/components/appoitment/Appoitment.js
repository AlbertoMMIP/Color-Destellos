import React, {Component} from 'react';
import NavBar from "../home/NavBar";
import {Resume} from "./Resume";
import {StylistCard} from "../common/StylistCard";

class Appoitment extends Component{
    render(){
        return(
            <div>
                <NavBar user="CLIENTE"/>
                <div className="uk-section-default uk-section" data-uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-slide-left-medium; delay: false;">
                    <div className="uk-position-relative">
                        <div className="uk-container">
                            <div className="uk-grid-large uk-margin uk-grid" data-uk-grid="">
                                <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle uk-first-column">
                                    <div className="uk-panel">
                                        <div className="uk-margin-medium uk-width-large@m uk-text-left@m uk-text-center uk-panel uk-scrollspy-inview uk-animation-slide-left-medium" data-uk-scrollspy-class="" data-style="">
                                            <h2 className="uk-margin uk-h1"> Estilistas cercanas </h2>
                                            <div className="uk-margin">The map will be here</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle">
                                    <div className="uk-panel">
                                        <div className="uk-margin uk-text-center@m uk-text-center">
                                            <div className="uk-child-width-1-1">
                                                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                                                    <div className="uk-card-media-left uk-cover-container">
                                                        <img src="https://images.unsplash.com/photo-1523041796539-8da32cc0e66b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" data-uk-cover/>
                                                            <canvas width="400" height="200"></canvas>
                                                    </div>
                                                    <div>
                                                        <div className="uk-card-body">
                                                            <h3 className="uk-card-title">Nombre</h3>
                                                            <p data-uk-margin>
                                                                <a className="uk-button uk-button-primary" href="#">Portafolio</a>
                                                                <a className="uk-button uk-button-default" href="#Schedule">Agendar</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                                                    <div className="uk-card-media-left uk-cover-container">
                                                        <img src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80" alt="" data-uk-cover/>
                                                        <canvas width="400" height="200"></canvas>
                                                    </div>
                                                    <div>
                                                        <div className="uk-card-body">
                                                            <h3 className="uk-card-title">Nombre</h3>
                                                            <p data-uk-margin>
                                                                <a className="uk-button uk-button-primary" href="#">Portafolio</a>
                                                                <a className="uk-button uk-button-default" href="#Schedule">Agendar</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                                                    <div className="uk-card-media-left uk-cover-container">
                                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" data-uk-cover/>
                                                        <canvas width="400" height="200"></canvas>
                                                    </div>
                                                    <div>
                                                        <div className="uk-card-body">
                                                            <h3 className="uk-card-title">Nombre</h3>
                                                            <p data-uk-margin>
                                                                <a className="uk-button uk-button-primary" href="#">Portafolio</a>
                                                                <a className="uk-button uk-button-default" href="#Schedule">Agendar</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section" id="Schedule" >
                    <div className="uk-container" >
                        <Resume/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appoitment;