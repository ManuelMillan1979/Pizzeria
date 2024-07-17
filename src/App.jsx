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
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const itemExistente = prevCarrito.find(item => item.name === producto.name);
      if (itemExistente) {
        return prevCarrito.map(item =>
          item.name === producto.name ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (name) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.name === name ? { ...item, cantidad: item.cantidad - 1 } : item
      ).filter(item => item.cantidad > 0)
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tu_pedido" element={<TuPedido carrito={carrito} agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} />} />
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
