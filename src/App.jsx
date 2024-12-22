import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div
      className="w-full overflow-hidden h-full bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
