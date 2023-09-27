//Aca debo importar css y js
//js/jsx
import { datosSlider, datosAcc, datosAdo, datosJuegos, listaProductos } from './data.js';
import Header from './template/header';
import Slider from './secciones/slider';
import AccesorioCategorias from './secciones/accesorio-categorias';
import AdornosCategorias from './secciones/adornos-categorias';
import NuevosJuegos from './secciones/nuevosJuegos';
import Productos from './template/productos-template.jsx';

//Swiper
import 'swiper/css';
import 'swiper/css/pagination';


//css
import './css/reset.css';
import './css/scss/style.scss';

// //React-router-dom
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Main(){
  return <main>
    <Slider lista={datosSlider}></Slider>
    <AccesorioCategorias listaAcc={datosAcc}></AccesorioCategorias>
    <AdornosCategorias listaAdo={datosAdo}></AdornosCategorias>
    <NuevosJuegos listaJue={datosJuegos}></NuevosJuegos>
  </main>
}



function App() {
  return (
    <div>
      <Router>
               <Header/>

                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/accesorios' element={<Productos listaProd={listaProductos}/>}/> 
                </Routes>
      </Router>
      
    </div>
  );
}

export default App;


// <Route path='/adornos' element={<Productos/>}/>
//                     <Route path='/Juegos' element={<Productos/>}/>