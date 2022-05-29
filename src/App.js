import './App.css';
import PrimaryNav from './PrimaryNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <PrimaryNav></PrimaryNav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
