import React from 'react';
import {Link} from "react-router-dom";

export const About = () => (
    <div className="uk-grid-large uk-margin-large uk-grid" data-uk-grid="">
        <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle">
            <div className="uk-panel">
                <div className="uk-margin uk-text-left@m uk-text-center uk-scrollspy-inview uk-animation-fade" data-uk-scrollspy-class="" data-style="">
                    <img className="el-image uk-box-shadow-xlarge" alt=""
                         data-sizes="(min-width: 680px) 680px" data-width="1520" data-height="1090" data-uk-img=""
                         sizes="(min-width: 680px) 680px"
                         srcSet="https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                         src="https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
                </div>
            </div>
        </div>
        <div className="uk-width-expand@m uk-grid-item-match uk-flex-middle uk-flex-first@m uk-first-column">
            <div className="uk-panel">
                <div className="uk-margin-xlarge uk-width-large@m uk-margin-auto uk-text-left@m uk-text-center uk-scrollspy-inview uk-animation-fade" data-uk-scrollspy-class="" data-style="">
                    <article className="uk-article">
                        <h1 className="uk-article-title"><a className="uk-link-reset" href="">Nuestro Objetivo</a></h1>
                        <p className="uk-article-meta"><a href="/">Color & Destellos</a> Enero 2018.</p>
                        <p className="uk-text-lead">Dar a conocer al usuario el trabajo de las
                        estilistas de uñas, mostrando los trabajos que se pueden realizar y un poco del proceso como se realizan.</p>
                        <p>Un punto de suma importancia dentro del Sitio WEB es dar la facilidad de agendar una cita con las artistas
                        para poder realizar el trabajo que las clientas quieren para sus uñas, todo esto de manera fácil, rápida y sin
                        la necesidad de transladarse de un punto a otro.</p>
                        <div className="uk-grid-small uk-child-width-auto" data-uk-grid>
                            <div>
                                <Link className="uk-button uk-button-text" to="/appointment">Agenda una cita</Link>
                            </div>
                            <div>
                                <a className="uk-button uk-button-text" href="#Instruccions">Instrucciones</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
);