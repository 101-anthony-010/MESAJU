import './index.css'

import { Route, Routes } from 'react-router-dom';

// components
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Sales from './components/pages/Sales';
import ProtectedAuth from './components/auth/protectedAuth';
import ShowModalHorital from './components/layout/ShowModalHorital';
import ShowProducts from './components/homePage/ShowProducts';
import ShowClients from './components/homePage/ShowClients';
import ShowSales from './components/homePage/ShowSales';
import Client from './components/pages/Client';

function App() {
  
  return (
    <main className='text-black'>
      <ShowModalHorital/>
      
      <ShowProducts/>
      <ShowClients/>
      <ShowSales/>


      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedAuth/>}>
          <Route path="/" element={<Home />} />
          <Route path='/client/:id' element={<Client />} />
          <Route path="/sales" element={<Sales />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
