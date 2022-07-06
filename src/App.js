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


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className='position-fixed top-0 w-100'>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </header>
      <main className='main-content mt-5'>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </main>
      <footer></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
