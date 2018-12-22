import React from "react";

export const StylistCard = () => (
    <div>
        <div className="uk-card uk-card-default">
            <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                    <div className="uk-width-auto">
                            <img className="uk-border-circle" width="40" height="40" src="https://images.unsplash.com/photo-1475636729227-1043bc86662b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="img"/>
                    </div>
                    <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">Name Last NameLong </h3>
                        <p className="uk-text-meta uk-margin-remove-top">
                            <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                        </p>
                    </div>
                </div>
            </div>
            <div className="uk-card-body">
                <ul>
                    <li>Experiencia</li>
                    <li>Correo</li>
                    <li>Teléfono</li>
                </ul>
            </div>
            <div className="uk-card-footer">
                <a href="/stylists" className="uk-button uk-button-text">Aceptar</a>
            </div>
        </div>

    </div>


);