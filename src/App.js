import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import BackgroundVideo from "./components/Background";
import About from "./components/About";
import Services from "./components/Services";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BackgroundVideo />
      <Banner />
      <About />
      <Services />
    </div>
  );
}

export default App;
