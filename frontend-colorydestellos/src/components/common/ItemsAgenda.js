import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

export  const ItemAgenda = ({appointment}) => (
        <div>
            <div className="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 className="uk-card-title">{appointment.client.name}</h3>
                <h5>{appointment.client.phone}</h5>
                <p>Técnica solicitada: {appointment.technique.name}</p>
                <p>{appointment.appointment}</p>
                <p>Para el día: {appointment.appointment ? moment(appointment.appointment.toString().substring(0,10)).format('LL') : null}  </p>
                <p>A la hora: {appointment.hour} </p>
                <p>Servicio en: {appointment.serviceAt} </p>
            </div>
        </div>
);