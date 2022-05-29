import './App.css';
import PrimaryNav from './PrimaryNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Footer from './pages/Footer';
import Notfound from './pages/Notfound';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <PrimaryNav></PrimaryNav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
