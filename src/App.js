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
import RequireAuth from './pages/RequireAuth';
import Dashboard from './pages/DashBoard/Dashboard';
import MyOrder from './pages/DashBoard/MyOrder';
import MyReview from './pages/DashBoard/MyReview';
import MyProfile from './pages/DashBoard/MyProfile';
import Users from './pages/DashBoard/Users'
import RequireAdmin from './pages/RequireAdmin';
import AddProducts from './pages/DashBoard/AddProducts';
import { ToastContainer} from 'react-toastify';
import Purchase from './pages/Purchase';
import MotoBlog from './pages/MotoBlog';
import AboutUs from './pages/Home/AboutUs';
import Reviews from './pages/Home/Reviews'

function App() {
  return (
    <div>
      <PrimaryNav></PrimaryNav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<MotoBlog></MotoBlog>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='/purchase/:id' element={ <RequireAuth><Purchase/></RequireAuth>}></Route>

        <Route path='/dashboard' element={ <RequireAuth><Dashboard /></RequireAuth> }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='add' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer/>

    </div>
  );
}

export default App;
