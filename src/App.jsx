
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Sponsors from './Components/Sponsors';
import Categories from './Pages/Categories';
import Portfolio from './Pages/Portfolio';
import Section1 from './Pages/Section1';

function App() {
  return (
<>
    <Navbar/>
    <Section1/>
    <Sponsors/>
    <Categories/>
    <Portfolio/>
    <Footer/>
</>
  );
}

export default App;
