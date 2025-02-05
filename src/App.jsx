import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SignIn from "./Accounts/Login";
import CreateAccount from "./Accounts/CAccount";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Reservations from "./components/Reservations";
import AboutUs from "./components/AboutUs";
import OnlineOrder from "./components/OnlineOrder";

const Home = () => (
  <>
    <HeroSection />
    <Menu />
    <Testimonials />
  </>
);

const AppContent = () => {
  const location = useLocation();

  // Check if the current route is login or signup (to hide footer only)
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <Navbar /> {/* Navbar will always be visible */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect from / to /home */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order" element={<OnlineOrder />} />
      </Routes>
      {!isAuthPage && <Footer />} {/* Hide Footer only on login and signup */}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;
