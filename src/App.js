import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Components/Navbar/Navbar.css";
import "./Components/Footer/Footer.css";
import "./Components/ImageSlider/ImageSlider.css";
import "./Components/Slider/Slider.css";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ImageSlider></ImageSlider>
      <Slider></Slider>
      <Footer></Footer>
    </div>
  );
}

export default App;
