import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import CardInfo from './pages/cardInfo';
import Header from './components/header';
import Footer from './components/footer';
import Error from './pages/error';

function AppRouter() {
  return (
    <Router basename="/kasa">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<CardInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
