import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../fire";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <div
                className="w-full overflow-hidden h-full bg-fixed bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/header_img.png')" }}
              >
                <Header />
                <About />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
              </div>
            ) : (
              <Login
                className="w-full overflow-hidden h-full bg-fixed bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/header_img.png')" }}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
