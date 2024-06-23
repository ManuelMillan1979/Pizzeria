import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import TarjetasPizzas from "./Pages/TarjetasPizzas.jsx";
import TarjetasEmpanadas from './Pages/TarjetasEmpanadas.jsx';
import TarjetasBebidas from './Pages/TarjetasBebidas.jsx';
import EmpanadaCarne100 from './Pages/TarjetasEmpanadas/EmpanadaCarne100.jsx';
import EmpanadaCalabaza from './Pages/TarjetasEmpanadas/empanadaCalabaza.jsx';
import EmpanadaPorkAgri from './Pages/TarjetasEmpanadas/EmpanadaPorkAgri.jsx';
import EmpanadaFullPanceta from './Pages/TarjetasEmpanadas/EmpanadaFullPanceta.jsx';
import NotFound from './Pages/404NotFound.jsx'; // Create a NotFound component
import EmpanadaPolloBBQ from './Pages/TarjetasEmpanadas/EmpanadaPolloBBQ.jsx';
import EmpanadaPolloAlWok from './Pages/TarjetasEmpanadas/EmpanadaPolloAlWok.jsx';
import PizzaMuzzarella from './Pages/TarjetasPizzas/PizzaMuzzarella.jsx';
import PizzaNapolitana from './Pages/TarjetasPizzas/PizzaNapolitana.jsx';
import PizzaNapoEspecial from './Pages/TarjetasPizzas/PizzaNapoEspecial.jsx';
import PizzaNapoPower from './Pages/TarjetasPizzas/PizzaNapoPower.jsx';
import Pizzacapresse from './Pages/TarjetasPizzas/PizzaCapresse.jsx';
import Pizza4Quesos from './Pages/TarjetasPizzas/Pizza4Quesos.jsx';
import PizzaCalabresa from './Pages/TarjetasPizzas/PizzaCalabresa.jsx';
import PizzaDonRemolo from './Pages/TarjetasPizzas/PizzaDonRemolo.jsx';
import PizzaAllPanceta from './Pages/TarjetasPizzas/PizzaAllPanceta.jsx';
import PizzaPepperoni from './Pages/TarjetasPizzas/PizzaPepperoni.jsx';
import PizzaVeggi from './Pages/TarjetasPizzas/PizzaVeggi.jsx';
import PizzaVeggiPower from './Pages/TarjetasPizzas/PizzaVeggiPower.jsx';
import PizzaPolloEspecial from './Pages/TarjetasPizzas/PizzaPolloEspecial.jsx';
import PizzaSuperEspecial from './Pages/TarjetasPizzas/PizzaSuperEspecial.jsx';
import TuPedido from './Pages/TuPedido.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tu_pedido" element={<TuPedido />} />
        <Route path="/tarjetasPizzas" element={<TarjetasPizzas />} />
        <Route path="/tarjetasEmpanadas" element={<TarjetasEmpanadas />} />
        <Route path="/tarjetasBebidas" element={<TarjetasBebidas />} />
        <Route path="/empanadaCarne100" element={<EmpanadaCarne100 />} />
        <Route path="/empanadaCalabaza" element={<EmpanadaCalabaza />} />
        <Route path="/empanadaPorkAgri" element={<EmpanadaPorkAgri />} />
        <Route path="/empanadaFullPanceta" element={<EmpanadaFullPanceta />} />
        <Route path='/empanadaPolloBBQ' element={<EmpanadaPolloBBQ />} />
        <Route path='/empanadaPolloAlWok' element={<EmpanadaPolloAlWok />} />
        <Route path='/pizzamuzzarella' element={<PizzaMuzzarella />} />
        <Route path='/pizzanapolitana' element={<PizzaNapolitana />} />
        <Route path='/pizzanapoespecial' element={<PizzaNapoEspecial />} />
        <Route path='/pizzanapopower' element={<PizzaNapoPower />} />
        <Route path='/pizzaCapresse' element={<Pizzacapresse />} />
        <Route path='/pizza4Quesos' element={<Pizza4Quesos />} />
        <Route path='/pizzaCalabresa' element={<PizzaCalabresa />} />
        <Route path='/pizzaDonRemolo' element={<PizzaDonRemolo />} />
        <Route path='/pizzaAllPanceta' element={<PizzaAllPanceta/>} />
        <Route path='/PizzaPepperoni' element={<PizzaPepperoni />} />
        <Route path='/PizzaVeggie' element={<PizzaVeggi />} />
        <Route path='/PizzaVeggiePower' element={<PizzaVeggiPower />}/>
        <Route path='/PizzaPolloEspecial' element={<PizzaPolloEspecial />} />
        <Route path='/PizzaSuperespecial' element={<PizzaSuperEspecial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
