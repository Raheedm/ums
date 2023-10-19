import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Principal from './components/Principal'
import SuperNav from './components/SuperNav';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdmissionForm from './components/StudentAdmission';
import Programs from './components/Programs'
import ApplyForm from './components/ApplyForm';
import Header from './components/Header';
import Test from './components/test'



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <marquee
          direction="left"
          style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif' }}
        >
          Undertaking: The College hereby declares that the institution will abide by all the regulations of UGC notified from time to time
        </marquee> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Principal" element={<Principal />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/apply/:courseValue" element={<ApplyForm />} />
          <Route path='/test' element={<Test />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path='/Header' element={<Header />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;