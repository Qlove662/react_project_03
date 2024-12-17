import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import NavbarMenu from './component/Navbar/NavbarMenu';
import Tasklist01 from './pages/Tasklist/Tasklist01';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavbarMenu />
      <BrowserRouter>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/tasklist" element={<Tasklist01 />} />
      </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;