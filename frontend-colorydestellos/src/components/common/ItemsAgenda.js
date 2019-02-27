import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

export  const ItemAgenda = ({appointment}) => (
        <div>
            <div className="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 className="uk-card-title">{appointment.client.name}</h3>
                <h5>{appointment.client.phone}</h5>
                <p>Técnica solicitada: {appointment.technique.name}</p>
                <p>Para el día: {moment(appointment.appointment).format('DD/MM/YYYY')} </p>
                <p>A la hora: {appointment.hour} </p>
                <p>Servicio en: {appointment.serviceAt} </p>
            </div>
        </div>
);