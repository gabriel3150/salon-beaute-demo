import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import EditorialImage from '@/components/EditorialImage';
import Values from '@/components/Values';
import Tarifs from '@/components/Tarifs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <EditorialImage />
        <Values />
        <Tarifs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
