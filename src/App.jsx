
import './index.css'

import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Sales from './components/pages/Sales';

function App() {
  
  return (
    <main className='bg-slate-950 text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
