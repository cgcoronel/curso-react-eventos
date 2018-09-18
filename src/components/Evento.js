import React from 'react';
import PropType from 'prop-types';

const Evento = (props) => {

	const { name } = props.info;
	let description = props.info.description.text;

	if (!name) return null;

	if ( description.length > 250 ){
		description = description.substr(0, 250);
	}

	return (
		<div>
				<div className='uk-card uk-card-default'>
					<div className='uk-card-media-top'>
							{ props.info.logo !== null ?
									<img src={props.info.logo.url} alt={props.info.name.text}/>
									: ''
							}
					</div>

					<div className='uk-card-body'>
							<h3 className='uk-card-title'>{props.info.name.text}</h3>
							<p>{description} <a href={props.info.url} target='_blank'>...Ver mas</a></p>
					</div>
				</div>
		</div>
	)
}

Evento.propType = {
	info: PropType.object.isRequired
}

export default Evento
