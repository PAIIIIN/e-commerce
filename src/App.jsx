import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
// components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return <div className='overflow-hidden'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    <Sidebar/>
    <Footer/>
    </BrowserRouter>
  </div>;
};

export default App;