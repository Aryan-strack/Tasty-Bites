import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants/index';
import { X, Menu, ShoppingCart } from 'lucide-react';
import { Link, useLocation  } from 'react-router-dom'; 

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileDrawerOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-4 relative text-2xl font-bold">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className='text-xl tracking-tight'>Tasty Bites</span>
          </div>
          <ul className="hidden lg:flex ml-6 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
              {item.href.startsWith("/") ? (
                // If href is a route, use Link
          <Link to={item.href} className={`text-sm text-neutral-100 hover:text-neutral-500 transition duration-300 ${location.hash === item.href ? 'active' : ''}`}>
                  {item.label}
                </Link>
              ) : (
                // If href is an internal section, use button with scroll
                <button onClick={() => handleScroll(item.href)} className={` cursor-pointer text-sm text-neutral-100 hover:text-neutral-500 transition duration-300 ${location.hash === `#${item.href}` ? 'active' : ''}`}>
                  {item.label}
                </button>
              )}
            </li>
            ))}
          </ul>
          <div className='text-sm hidden lg:flex justify-center space-x-6 items-center'>
            <Link to="/login" className='py-2 px-3 border rounded-md text-white hover:bg-white hover:text-black'>
              Login
            </Link>
            <Link to="/signup" className="bg-gradient-to-r from-black-500 to-black-800 border text-white py-2 px-3 rounded-md hover:from-white-500 hover:to-white-800 hover:bg-white hover:text-black transition-all duration-300">
              Signup
            </Link>
            <button className='text-neutral-100 hover:text-neutral-400'>
              <ShoppingCart />
            </button>
          </div>

          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="fixed top-0 left-0 w-full h-full z-50 bg-neutral-900 p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <Link to="/login" className="py-2 px-3 border rounded-md text-white">
                Login 
              </Link>
              <Link to="/signup" className="bg-gradient-to-r from-black-500 to-black-800 py-2 px-3 rounded-md text-white">
                Signup 
              </Link>
              <button className="text-white">
                <ShoppingCart />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;