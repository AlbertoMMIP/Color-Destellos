import React from 'react';

export const TechniqueCard = ({technique}) => (
	<div style={{margin:"10px 0"}}>
		<div class="uk-card uk-card-default uk-card-small">
			<div class="uk-card-header">
					<h3 class="uk-card-title">{technique.name}</h3>
					<p>{technique.description}</p>
			</div>
			<div class="uk-card-body">
				<div style={{margin:"10px 0", minHeight:"300px"}}>
    			<img class="uk-align-center uk-margin-remove-adjacent" src={technique.imgs_url[0]} width="250" height="180" alt="Example" />
				</div>
			</div>
		</div>
		<hr class="uk-divider-icon"></hr>
	</div>
);