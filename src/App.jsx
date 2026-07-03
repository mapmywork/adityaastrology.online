import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body selection:bg-gold/30 selection:text-brown-dark">
      <Navbar />
      <Home />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
