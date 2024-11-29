import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/common/Navbar';
import { Route,Routes } from "react-router-dom";

import About from './Pages/About';
import AddToCart from './Pages/AddToCart';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Pages/Home';
import WishList from './Pages/WishList';
import Loader from './components/common/Loader';
import Carosel from './components/Carosel';
import Temp from './components/Temp';

import AdminPanel from './components/Admin/AdminPanel';
import AddProduct from './components/Admin/AddProduct';
import Trending from './components/Home/Trending ';
import Arrivals from './components/Home/Arrivals';
import Home2 from './Pages/Home2';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import FooterSection from './Pages/FooterSection';
import SingleProduct from './product/SingleProduct';
import UserDetails from './user/UserDetails';

function App() {

  const [count, setCount] = useState(0)

  return (


        <div className=' flex flex-col gap-7 bg-[#f0f8ff] '>

          <ToastContainer/> 
            <Navbar></Navbar>
            
            <Routes>

                <Route path='/' element={<Home></Home>}> </Route>

                <Route path='/carosel' element={<Carosel></Carosel>}> </Route>
                <Route path='/about'element={<About></About>}></Route>
                <Route path='/addtoCart' element={<AddToCart></AddToCart>}></Route>
                <Route path='/wishList' element={<WishList></WishList>}></Route>
                <Route path='/error' element={<Error></Error>}></Route>

                <Route path='/trending' element={<Trending></Trending>}></Route>

                <Route path='/login' exact element = {<LogIn></LogIn>} ></Route>

                <Route path='/signup' element ={<SignUp></SignUp>}></Route>

                <Route path='/singleproduct' element = {<SingleProduct></SingleProduct>}></Route>
                
                <Route path='/userdetail' element ={<UserDetails></UserDetails>}></Route>
                
            </Routes>
            
        </div>
    
  )
}

export default App


