import React from 'react';

export const TechniqueCard = ({technique}) => (
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src={technique.imgs_url[0]}
                     alt="img"/>
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{technique.name}</h3>
                <p>{technique.description}</p>
            </div>
        </div>
);