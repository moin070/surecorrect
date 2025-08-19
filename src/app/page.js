
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Contact from "../app/components/Contact";
import Whyus from "../app/components/Whyus";
import Howitworks from "../app/components/Howitworks";
import Footer from "../app/components/Footer";
import Appointment from "../app/components/Appointment"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Whyus />
      <Howitworks />
      <Appointment/>
      <Contact />
      <Footer />
    </div>
  );
}
