import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';
import Cart from './Cart';
import FoodCard from './FoodCard';
import Register from './Register';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className=''>
        <Navbar></Navbar>
        {/* <Sidebar></Sidebar> */}
      </header>
      <main className=''>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/category" element={<FoodCard/>}></Route>
      </Routes>
      </main>
      <footer></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
