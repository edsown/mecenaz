import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArtistCard from "./components/ArtistCard";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ArtistCard />
      <About />
    </div>
  );
}

export default App;
