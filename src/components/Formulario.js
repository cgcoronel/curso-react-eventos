import React from 'react';
import PropTypes from 'prop-types';


class Formulario extends React.Component {

	nombreEvento = React.createRef();
	categoria = React.createRef();

	buscarEvento = (e) => {
		e.preventDefault();

		const datosBusqueda = {
			nombre: this.nombreEvento.current.value,
			categoria: this.categoria.current.value
		}

		this.props.obtenerEventos(datosBusqueda);

	}

	mostrarOpciones = (key) => {
		 const categoria = this.props.categorias[key];
		 const { id, name_localized } = categoria;

		 if (!id || !name_localized) return null;

		 return (
			 <option key={id} value={id}>{name_localized}</option>
		 )
	}

	render () {
		const categorias =  Object.keys(this.props.categorias);

		return (
			<form onSubmit={this.buscarEvento}>
				<fieldset className='uk-fieldset uk-margin'>
					<legend className='uk-legend uk-text-center'>
							Busca tu evento por nombre o categoria
					</legend>

					<div className='uk-column-1-3@m uk-margin'>
								<div className='uk-margin' uk-margin='true'>
										<input ref={this.nombreEvento} className='uk-input' type='text' placeholder='Nombre de evento o ciudad' />
								</div>
								<div className='uk-margin' uk-margin='true'>
										<select ref={this.categoria} className='uk-select'>
											{categorias.map(this.mostrarOpciones)}
										</select>
								</div>
								<div className='uk-margin' uk-margin='true'>
										<button className='uk-button uk-danger'>Buscar</button>
								</div>
					</div>
				</fieldset>
			</form>
		)
	}
}

Formulario.propTypes = {
	obtenerEventos: PropTypes.func.isRequired,
	categorias: PropTypes.array.isRequired
}

export default Formulario;
