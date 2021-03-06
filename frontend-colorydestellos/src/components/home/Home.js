    import React, {Component} from 'react';
    import NavBar from "./NavBar";
    import {About} from "./About";
    import {Instruccions} from "./Instrucctions";
    import {Footer} from "./Footer";
    import {Link} from "react-router-dom";


    class Home extends Component{

        componentWillMount() {
            localStorage.removeItem('rol');
            localStorage.removeItem('name');
            localStorage.removeItem('token');
            localStorage.removeItem('estilistaID');
        }

        render() {
            return(
                <div>
                    <NavBar user="CLIENTE"/>
                    <div className="uk-section-primary uk-section uk-padding-remove-vertical">
                        <div className="uk-grid-margin uk-grid uk-grid-stack" data-uk-grid="">
                            <div className="uk-width-1-1@m uk-first-column">
                                <div className="uk-margin uk-text-left@s uk-text-center uk-slideshow" data-uk-slideshow="minHeight: 600; maxHeight: 900; animation: pull; velocity: 1; autoplay: 1;">
                                    <div className="uk-position-relative">
                                        <ul className="uk-slideshow-items">
                                            <li className="uk-active uk-transition-active">
                                                <div className="uk-position-cover"
                                                     data-uk-slideshow-parallax="scale: 1,1.2,1.2"
                                                     data-style="transform: scale(1.2);">
                                                    <img className="el-image uk-cover" alt="" data-uk-cover=""
                                                         data-uk-img="target: !.uk-slideshow-items"
                                                         data-sizes="(max-aspect-ratio: 2560/1140) 225vh"
                                                         data-width="2560" data-height="1140"
                                                         sizes="(max-aspect-ratio: 2560/1140) 225vh"
                                                         srcSet="https://images.unsplash.com/photo-1501459277917-04a80f948092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                                                         src="https://images.unsplash.com/photo-1501459277917-04a80f948092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                                                         data-style="width: 1220px; height: 810px;" />
                                                </div>
                                                <div className="uk-position-cover"
                                                     data-uk-slideshow-parallax="opacity: 0.2,0,0; backgroundColor: #000,#000"
                                                     data-style="background-color: rgb(0, 0, 0); opacity: 0;">
                                                </div>
                                                <div className="uk-position-cover uk-flex uk-flex-left uk-flex-middle uk-container uk-section">
                                                    <div className="uk-overlay uk-overlay-default uk-panel uk-width-xlarge">
                                                        <div className="uk-margin uk-h6 uk-margin-remove-adjacent"
                                                            data-uk-slideshow-parallax="y: 70,0,-100;"
                                                             data-style="transform: translate3d(0px, -100px, 0px);"><p>Para las damas</p>
                                                        </div>
                                                        <h1 className="uk-margin uk-heading-primary uk-heading-line"
                                                            data-uk-slideshow-parallax="x: 320,0,-250;"
                                                            data-style="transform: translate3d(0px, 0px, 0px);"><span>Color &amp; Destellos</span>
                                                        </h1>
                                                        <p><a className="uk-button uk-button-primary"
                                                              href="#About"
                                                              data-uk-slideshow-parallax="y: -60,0,190;"
                                                              data-style="transform: translate3d(0px, 0px, 0px);">Sobre nosotros</a></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-style="">
                                                <div className="uk-position-cover"
                                                     data-uk-slideshow-parallax="scale: 1,1.2,1.2"
                                                     data-style="transform: scale(1.2);">
                                                    <img className="el-image uk-cover" alt="" data-uk-cover=""
                                                         data-uk-img="target: !.uk-slideshow-items"
                                                         data-sizes="(max-aspect-ratio: 2560/1140) 225vh"
                                                         data-width="2560" data-height="1140"
                                                         sizes="(max-aspect-ratio: 2560/1140) 225vh"
                                                         srcSet="https://images.unsplash.com/photo-1471336199076-1bea7bdb30ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80"
                                                         src="https://images.unsplash.com/photo-1471336199076-1bea7bdb30ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80"
                                                         data-style="width: 1820px; height: 810px;"/>

                                                </div>
                                                <div className="uk-position-cover"
                                                     data-uk-slideshow-parallax="opacity: 0.2,0,0; backgroundColor: #000,#000"
                                                     data-style="background-color: rgb(0, 0, 0); opacity: 0;">
                                                </div>
                                                <div className="uk-position-cover uk-flex uk-flex-left uk-flex-middle uk-container uk-section">
                                                    <div className="uk-overlay uk-overlay-default uk-panel uk-width-xlarge">
                                                        <div className="uk-margin uk-h6 uk-margin-remove-adjacent"
                                                            data-uk-slideshow-parallax="y: 70,0,-100;"
                                                             data-style="transform: translate3d(0px, -100px, 0px);"><p>Alto estilismo en uñas</p>
                                                        </div>
                                                        <h1 className="uk-margin uk-heading-primary uk-heading-line"
                                                            data-uk-slideshow-parallax="x: 320,0,-250;"
                                                            data-style="transform: translate3d(-250px, 0px, 0px);"><span>Modernos estilos de uñas</span>
                                                        </h1>
                                                        <p><Link className="uk-button uk-button-primary"
                                                              to="/techniques"
                                                              data-uk-slideshow-parallax="y: -60,0,190;"
                                                              data-style="transform: translate3d(0px, 190px, 0px);">Revisar las Técnicas</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-style="">
                                                <div className="uk-position-cover"
                                                     data-uk-slideshow-parallax="scale: 1,1.2,1.2"
                                                     data-style="transform: scale(1.2);">
                                                    <img className="el-image uk-cover" alt="" data-uk-cover=""
                                                         data-uk-img="target: !.uk-slideshow-items"
                                                         data-src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                                                         data-srcset="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                                                         data-sizes="(max-aspect-ratio: 2560/1140) 225vh"
                                                         data-width="2560" data-height="1140"
                                                         sizes="(max-aspect-ratio: 2560/1140) 225vh"
                                                         srcSet="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                                                         src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                                                         data-style="width: 1220px; height: 810px;" />
                                                    />
                                                </div>
                                                <div className="uk-position-cover"
                                                     data-uk-slideshow-parallax="opacity: 0.2,0,0; backgroundColor: #000,#000"
                                                     data-style="background-color: rgb(0, 0, 0); opacity: 0;">
                                                </div>
                                                <div className="uk-position-cover uk-flex uk-flex-left uk-flex-middle uk-container uk-section">
                                                    <div className="uk-overlay uk-overlay-default uk-panel uk-width-xlarge">
                                                        <div className="uk-margin uk-h6 uk-margin-remove-adjacent"
                                                            data-uk-slideshow-parallax="y: 70,0,-100;"
                                                             data-style="transform: translate3d(0px, -100px, 0px);"><p>Bienestar y Belleza</p>
                                                        </div>
                                                        <h1 className="uk-margin uk-heading-primary uk-heading-line"
                                                            data-uk-slideshow-parallax="x: 320,0,-250;"
                                                            data-style="transform: translate3d(-250px, 0px, 0px);"><span>Cuidado de uñas &amp; el mejor trato</span>
                                                        </h1>
                                                        <p><Link className="uk-button uk-button-primary"
                                                              to="/appointment"
                                                              data-uk-slideshow-parallax="y: -60,0,190;"
                                                              data-style="transform: translate3d(0px, 190px, 0px);">Agenda una cita</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="uk-position-bottom-center uk-position-large uk-visible@s">
                                            <ul className="uk-thumbnav">
                                                <li uk-slideshow-item="0"><a href="#"><img src="https://images.unsplash.com/photo-1501459277917-04a80f948092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" width="100" alt=""/></a></li>
                                                <li uk-slideshow-item="1"><a href="#"><img src="https://images.unsplash.com/photo-1471336199076-1bea7bdb30ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80" width="100" alt=""/></a></li>
                                                <li uk-slideshow-item="2"><a href="#"><img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" width="100" alt=""/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="About"> <About/> </div>
                    <div id="Instruccions"> <Instruccions/> </div>
                    <div id="Footer"> <Footer/> </div>
                </div>
            );
        }
    }

    export default Home;