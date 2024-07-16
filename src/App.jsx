import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import TarjetasPizzas from "./Pages/TarjetasPizzas.jsx";
import TarjetasEmpanadas from './Pages/TarjetasEmpanadas.jsx';
import TarjetasBebidas from './Pages/TarjetasBebidas.jsx';
import NotFound from './Pages/404NotFound.jsx';
import TuPedido from './Pages/TuPedido.jsx';
import productos from "./components/Apis/Apis.jsx"
import { useState } from 'react';
import Empanada from './Pages/TarjetasEmpanadas/Empanada.jsx';
import Seleccion_Pizza from './Pages/TarjetasPizzas/Pizza.jsx';

function App() {
  const { pizzas, empanada } = productos;
  const [Pizza] = useState(pizzas);
  const [empanadas] = useState(empanada);

  const [carrito, setCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const itemExistente = prevCarrito.find(item => item.id === producto.id);
      if (itemExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => 
      prevCarrito.map(item => 
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
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
        <Route path="/tarjetasBebidas" element={<TarjetasBebidas />} />
        <Route path="/empanada" element={<Empanada productoSeleccionado={productoSeleccionado} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/pizza' element={<Seleccion_Pizza productoSeleccionado={productoSeleccionado} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
