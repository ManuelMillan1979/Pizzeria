import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import TarjetasPizzas from "./Pages/TarjetasPizzas.jsx";
import TarjetasEmpanadas from './Pages/TarjetasEmpanadas.jsx';
import TarjetasBebidas from './Pages/TarjetasBebidas.jsx';
import NotFound from './Pages/404NotFound.jsx';
import TuPedido from './Pages/TuPedido.jsx';
import productos from "./components/Apis/Apis.jsx"
import Empanada from './Pages/TarjetasEmpanadas/Empanada.jsx';
import Seleccion_Pizza from './Pages/TarjetasPizzas/Pizza.jsx';
import BebidasVarias from './Pages/BebidasVarias/BebidasVarias.jsx';




function App() {
  const { pizzas, empanada, bebidas } = productos
  const [Pizza] = useState(pizzas);
  const [empanadas] = useState(empanada);


  const [carrito, setCarrito] = useState([]);
  console.log(carrito);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  console.log(productoSeleccionado);

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tu_pedido" element={<TuPedido carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />} />
        <Route path="/tarjetasPizzas" element={<TarjetasPizzas Pizza={Pizza} seleccionarProducto={seleccionarProducto} />} />
        <Route path="/tarjetasEmpanadas" element={<TarjetasEmpanadas empanadas={empanadas} seleccionarProducto={seleccionarProducto} />} />
        <Route path="/tarjetasBebidas" element={<TarjetasBebidas  bebidas={bebidas}  seleccionarProducto={seleccionarProducto}/>} />
        <Route path="/empanada" element={<Empanada productoSeleccionado={productoSeleccionado} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/pizza' element={<Seleccion_Pizza productoSeleccionado={productoSeleccionado} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/bebidas-varias" element={<BebidasVarias productoSeleccionado={productoSeleccionado} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
