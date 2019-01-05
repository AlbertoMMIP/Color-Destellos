import React from 'react';
import moment from 'moment';

export  const ItemAgenda = ({appointment}) => (
        <div>
            <div className="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 className="uk-card-title">{appointment.client.name}</h3>
                <h5>{appointment.client.phone}</h5>
                <p>Técnica solicitada: {appointment.technique.name}</p>
                <p>Para el día: {appointment.appointment} </p>
                <p>A la hora: {appointment.hour} </p>
            </div>
        </div>
);