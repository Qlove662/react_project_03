import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import NavbarMenu from './component/Navbar/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css'
import Tasklist01 from './Tasklist/Tasklist01';

function App() {
  return (
    <>
      <NavbarMenu />
      <BrowserRouter>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;