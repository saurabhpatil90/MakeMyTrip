import React from 'react'
import '../styles/App.css';
//  import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Flight from '../pages/Flight.js';
import Train from '../pages/Train';
import Stay from '../pages/Stays';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Checkout from '../pages/Checkout';
import Layout from './Layout';
import Footer from './Footer';
import Home from '../pages/Home';
import Bottom from './Bottom';


const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Flight />,
  //     children:[
  //       {
  //         path: "/login",
  //         element: <Login />
  //       },
  //       {
  //         path:'/train',
  //         element:<Train/>
  //       },
  //       {
  //         path:'/register',
  //         element:<Register/>
  //       },
  //       {
  //         path:'/checkout',
  //         element:<Checkout/>
  //       },
  //       {
  //         path:'/stay',
  //         element:<Stay/>
  //       },
  //       {
  //         path:'/flight',
  //         element:<Flight/>
  //       }
  //     ]
  //   }
    
    // ,
    // {
    //   path: "/items/:id",
    //   element: <Products />
    // }
  // ]);
  
  

  return (
    // <div id="main">
    //   <RouterProvider router={router}></RouterProvider>
    //   </div>
    <div id='main' style={{minHeight:'100vh',display:'flex',backgroundColor:'#f2f2f2',alignItems:'center',flexDirection:'column',width:'100%'}} className='mainSection'>
    <BrowserRouter>
    <Layout></Layout>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/flight' element={<Flight></Flight>}></Route>
        <Route path='/charter' element={<Flight></Flight>}></Route>
        <Route path='/train' element={<Train></Train>}></Route>
        <Route path='/hotel' element={<Stay></Stay>}></Route>
        <Route path='/homestay' element={<Stay></Stay>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/bus' element={<Train/>}></Route>
        <Route path='/cabs' element={<Train/>}></Route>
        <Route path='/forex' element={<Home/>}></Route>
        <Route path='/holiday' element={<Home/>}></Route>
        <Route path='/activities' element={<Home/>}></Route>
      </Routes>
      <Bottom/>
      <Footer></Footer>
    </BrowserRouter>
    
    </div>
  )
}


export default App;
