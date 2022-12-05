import { HashRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';
import MainPage from "./components/pages/main_page/MainPage";
import Offers from "./components/pages/offers/Offers";
import Tickets from './components/pages/tickets/Tickets';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<MainPage />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/tickets' element={<Tickets />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
