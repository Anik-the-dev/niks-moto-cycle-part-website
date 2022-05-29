import './App.css';
import PrimaryNav from './PrimaryNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
      <PrimaryNav></PrimaryNav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
