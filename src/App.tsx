import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import FAQs from './pages/FAQs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gold" element={<CategoryPage />} />
            <Route path="/gold/:subcategory" element={<CategoryPage />} />
            <Route path="/silver" element={<CategoryPage />} />
            <Route path="/silver/:subcategory" element={<CategoryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
