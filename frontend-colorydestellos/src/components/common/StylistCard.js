import React from "react";

export const StylistCard = ({user,name,img,idStylist,idUser, make}) => (
    <div>
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                {img ? <img src={img} alt="" data-uk-cover/>: <img src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80" alt="" data-uk-cover/>}
                <canvas width="400" height="200"></canvas>
            </div>
            <div>
                <div className="uk-card-body">
                    <h4 className="uk-card-title">{name}</h4>
                        {user === "ADMIN" ?
                        <p data-uk-margin>
                            <a className="uk-button uk-button-default uk-button-group" href="#">Ver Perfil</a>
                            <a className="uk-button uk-button-primary uk-button-group" href="#">Aceptar</a>
                            <a className="uk-button uk-button-default uk-button-group" href="#">Dar de Baja</a>
                        </p> :
                        <p data-uk-margin>
                            <a className="uk-button uk-button-default" href="#">Portafolio</a>
                            <a className="uk-button uk-button-primary" href="#Schedule" onClick={() => make(idStylist,name,idUser)} >Agendar</a>
                        </p>
                        }
                </div>
            </div>
        </div>
    </div>


);