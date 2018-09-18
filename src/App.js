import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Eventos from './components/Eventos';

class App extends Component {

  token = 'LWB4TXPJEOZVNUTST4PC&locale';
  sort = 'date';

  state = {
    categorias: [],
    eventos: []
  }

  componentDidMount(){
      this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
      let url  = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}=es_ES`;

      await fetch(url)
           .then(res => {
             return res.json()
           })
           .then(categorias => {
             this.setState({
               categorias: categorias.categories
             })
           })
  }

  obtenerEventos = async (busqueda) => {
    const { nombre, categoria } = busqueda
    let url  = `https://www.eventbriteapi.com/v3/events/search/?q=${nombre}&categories=${categoria}&sort_by=${this.sort}&token=${this.token}`;

    await fetch(url)
         .then(res => {
           return res.json()
         })
         .then(result => {
           this.setState({
             eventos: result.events
           })

         })
  }
  render() {
    return (
      <div className="App">
        <Header />

        <div className='uk-container'>
            <Formulario
                categorias={this.state.categorias}
                obtenerEventos={this.obtenerEventos}
              />

            <Eventos
                eventos={this.state.eventos}
              />

        </div>
      </div>
    );
  }
}

export default App;
