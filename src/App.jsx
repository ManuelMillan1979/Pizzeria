import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from './components/Home/Home.jsx';
import TuPedido from './Pages/TuPedido.jsx';


function App() {


  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tu_pedido' element={<TuPedido/>}/>
     
        </Routes>


</Router>
  )
}

export default App
