import React from 'react';

export const Footer = () => (
    <div className="tm-footer uk-section-default uk-section" data-uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: false;">
        <div className="uk-container">
            <div className="uk-grid-margin uk-grid" data-uk-grid="">
                <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle uk-first-column">
                    <div className="uk-panel">
                        <div className="uk-margin uk-text-left@m uk-text-center uk-panel uk-scrollspy-inview uk-animation-fade"  data-uk-scrollspy-class="" data-style="">
                            <div className="uk-child-width-expand uk-grid-medium uk-flex-middle uk-grid" data-uk-grid="">
                                <div className="uk-width-1-2@m uk-first-column">
                                    <a className="el-link" href="/themes/joomla/2017/florence/index.php">
                                        <img width="172" height="65" className="el-image" alt=""
                                        data-src="images/logobw.png" data-uk-img=""
                                        src="images/logobw.png"/>
                                    </a>
                                </div>
                                <div>
                                    <div className="el-content uk-margin">
                                        <small>Creado por un Alumno de IronHack<br/>Alberto Martinez <br/> Imagenes obtenidas de <a
                                            href="https://unsplash.com/">unsplash</a> </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle">
                    <div className="uk-panel">
                        <div className="uk-margin uk-text-center">
                            <a href="#" data-uk-totop="" data-uk-scroll=""
                               data-uk-scrollspy-class=""
                               className="uk-totop uk-icon uk-scrollspy-inview uk-animation-fade"
                               data-style="">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                 data-svg="totop">
                                <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"></polygon>
                                <line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"></line>
                            </svg>
                        </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);