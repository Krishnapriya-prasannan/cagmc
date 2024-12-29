import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Header from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import AboutUs from './Components/About';
import BusinessRegistrationCards from './Components/Business';
import NGORegistrationCards from './Components/NGO';
import TrademarkRegistrationCards from './Components/Trademark';
import AuditAndTaxManagement from './Components/Audit';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for login and signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        
        {/* Routes for the landing page and other pages */}
        <Route path="/" element={<LandingPage />} />  {/* Landing page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/business" element={<BusinessRegistrationCards />} />
        <Route path="/ngo" element={<NGORegistrationCards />} />
        <Route path="/trademark" element={<TrademarkRegistrationCards />} />
        <Route path="/audit" element={<AuditAndTaxManagement />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <>
      <Header />  {/* Display Header on landing page */}
      <Hero />    {/* Display Hero on landing page */}
      <AboutUs /> {/* Display AboutUs on landing page */}
      <BusinessRegistrationCards /> {/* Display BusinessRegistrationCards on landing page */}
      <NGORegistrationCards /> {/* Display NGORegistrationCards on landing page */}
      <TrademarkRegistrationCards /> {/* Display TrademarkRegistrationCards on landing page */}
      <AuditAndTaxManagement /> {/* Display AuditAndTaxManagement on landing page */}
      <Footer />  {/* Display Footer on landing page */}
    </>
  );
}

export default App;
