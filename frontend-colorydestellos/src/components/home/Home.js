    import React, {Component} from 'react';
    import NavBar from "./NavBar";



    class Home extends Component{

        componentWillMount() {
            localStorage.removeItem('rol');
            localStorage.removeItem('name');
            localStorage.removeItem('token');
        }

        render() {
            return(
                <div className="tm-page">
                    <NavBar user="CLIENTE"/>
                    <div className="uk-section-primary uk-section uk-padding-remove-vertical">
                        <div className="uk-grid-margin uk-grid uk-grid-stack" data-uk-grid="">
                            <div className="uk-width-1-1@m uk-first-column">
                                <div className="uk-margin uk-text-left@s uk-text-center uk-slideshow" data-uk-slideshow="minHeight: 600; maxHeight: 900; animation: pull; velocity: 1; autoplay: 1;">
                                    <div className="uk-position-relative">
                                        <ul className="uk-slideshow-items">
                                            <li className="el-item uk-active uk-transition-active">
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
                                                    <div className="el-overlay uk-panel uk-width-xlarge">
                                                        <div className="el-meta uk-margin uk-h6 uk-margin-remove-adjacent"
                                                            data-uk-slideshow-parallax="y: 70,0,-100;"
                                                             data-style="transform: translate3d(0px, 0px, 0px);">Para las damas
                                                        </div>
                                                        <h1 className="el-title uk-margin uk-heading-primary uk-heading-line"
                                                            data-uk-slideshow-parallax="x: 320,0,-250;"
                                                            data-style="transform: translate3d(0px, 0px, 0px);"><span>Color &amp; Destellos</span>
                                                        </h1>
                                                        <p><a className="el-link uk-button uk-button-default"
                                                              href="/Home"
                                                              data-uk-slideshow-parallax="y: -60,0,190;"
                                                              data-style="transform: translate3d(0px, 0px, 0px);">Sobre nosotros</a></p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="el-item" data-style="">
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
                                                    <div className="el-overlay uk-panel uk-width-xlarge">
                                                        <div className="el-meta uk-margin uk-h6 uk-margin-remove-adjacent"
                                                            data-uk-slideshow-parallax="y: 70,0,-100;"
                                                             data-style="transform: translate3d(0px, -100px, 0px);">Alto estilismo en uñas
                                                        </div>
                                                        <h1 className="el-title uk-margin uk-heading-primary uk-heading-line"
                                                            data-uk-slideshow-parallax="x: 320,0,-250;"
                                                            data-style="transform: translate3d(-250px, 0px, 0px);"><span>Modernos estilos de uñas</span>
                                                        </h1>
                                                        <p><a className="el-link uk-button uk-button-default"
                                                              href="/Tecnicas"
                                                              data-uk-slideshow-parallax="y: -60,0,190;"
                                                              data-style="transform: translate3d(0px, 190px, 0px);">Revisar las Técnicas</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="el-item" data-style="">
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
                                                    <div className="el-overlay uk-panel uk-width-xlarge">
                                                        <div className="el-meta uk-margin uk-h6 uk-margin-remove-adjacent"
                                                            data-uk-slideshow-parallax="y: 70,0,-100;"
                                                             data-style="transform: translate3d(0px, -100px, 0px);">Bienestar y Belleza
                                                        </div>
                                                        <h1 className="el-title uk-margin uk-heading-primary uk-heading-line"
                                                            data-uk-slideshow-parallax="x: 320,0,-250;"
                                                            data-style="transform: translate3d(-250px, 0px, 0px);"><span>Cuidado de uñas &amp; el mejor trato</span>
                                                        </h1>
                                                        <p><a className="el-link uk-button uk-button-default"
                                                              href="/Appointment"
                                                              data-uk-slideshow-parallax="y: -60,0,190;"
                                                              data-style="transform: translate3d(0px, 190px, 0px);">Agenda una cita</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default Home;