import React from "react";

export const StylistCard = ({user,img,name,idStylist,idUser, make,book}) => (
    <div>
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
            <div className="uk-card-media-left uk-cover-container">
                {img ? <img src={img} alt="" data-uk-cover/>: <img src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80" alt="" data-uk-cover/>}
                <canvas width="300" height="150"></canvas>
            </div>
            <div>
                <div className="uk-card-body">
                    <h4 className="uk-card-title">{name}</h4>
                        {user === "ADMIN" ?
                        <div data-uk-margin>
                            <a className="uk-button uk-button-default uk-button-group" href="#">Ver Perfil</a>
                            <a className="uk-button uk-button-primary uk-button-group" href="#">Aceptar</a>
                            <a className="uk-button uk-button-default uk-button-group" href="#">Dar de Baja</a>
                        </div> :
                        <div data-uk-margin>
                            { book.length > 0 ?
                                <div data-uk-lightbox>
                                    <a className="uk-button uk-button-default" href={book[0]}>Portafolio</a>
                                    {book.map((item,index) => <a key={index} href={item}></a>) }
                                </div> :
                                null
                            }
                            
                            <a className="uk-button uk-button-primary" href="#Schedule" onClick={() => make(idStylist,name,idUser)} >Agendar</a>
                        </div>
                        }
                </div>
            </div>
        </div>
    </div>


);