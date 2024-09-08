import { Accordion, Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import './App.css'
import FirstBar from "./Components/FirstBar/FirstBar";
import SecondBar from "./Components/SecondBar/SecondBar";
import NavBar from "./Components/NavBar/NavBar";
import FirstSlider from "./Components/FirstSlider/FirstSlider";
import CardOne from "./Components/Cards/CardOne";
import CardsOne from "./Components/Cards/CardsOne";
import Section from "./Components/Section/Section";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import CardTwo from "./Components/CardsTwo/CardTwo";
import CardsTwo from "./Components/CardsTwo/CardsTwo";
import AboveServices from "./Components/Features/Features";
import Features from "./Components/Features/Features";
import Service from "./Components/Services/Service";
import { FaHeartbeat } from "react-icons/fa";
import Services from "./Components/Services/Services";
import Inputs from "./Components/Inputs/Inputs";
import Departments from "./Components/Departments/Departments";
import CardThree from "./Components/CardsThree/CardThree";
import CardsThree from "./Components/CardsThree/CardsThree";
import Doctors from "./Components/Doctors/Doctors";
import Gallery from "./Components/Gallery/Gallery";
import CardFour from "./Components/Pricing/CardFour";
import Accordions from "./Components/Accordions/Accordions";
import Contact from "./Components/Map/Map";
import Map from "./Components/Map/Map";
import CardFive from "./Components/ContactSection/CardFive";
import ContactSection from "./Components/ContactSection/ContactSection";
import Input from "./Components/ContactSection/Input";
import FinalSection from "./Components/FinalSection/FinalSection";
import Footer from "./Components/Footer/Footer";
import ScrollBtn from "./Components/ScrollBtn/ScrollBtn";

const imagesOfSlider1 = [
  {src : "img/img/hero-carousel/hero-carousel-1.jpg"},
  {src : "img/img/hero-carousel/hero-carousel-2.jpg"},
  {src : "img/img/hero-carousel/hero-carousel-3.jpg"}
];
function App() {
  return (
  <div>
 <FirstBar/>
 <SecondBar/>
 <NavBar logo="img/img/logo.png"/>
 <FirstSlider imagesOfSlider1={imagesOfSlider1}/>
 <CardsOne/>
 <Section/>
 <Title id="about" sectionOf="About Us"/>
 <About/>
 <CardsTwo/>
 <Features/>
 <Title id="services" sectionOf="Services"/>
 <Services/>
 <Inputs/>
 <Title id="departments" sectionOf="Departments"/>
<Departments/>
<Title id="testimonials" sectionOf="Testimonials"/>
<CardsThree/>
<Doctors/>
<Title id="gallery" sectionOf="Gallery"/>
<Gallery/>
<Title id="pricing" sectionOf="Pricing"/>
<CardFour/>
<Accordions/>
<Title id="contact" sectionOf="Contact"/>
<Map/>
<ContactSection/>
<FinalSection/>
<Footer/>
<ScrollBtn/>
  </div>
  )
}

export default App;
