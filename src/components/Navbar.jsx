
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CheckCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">TaskFlow</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/features" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/features') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/pricing') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Log In
            </Link>
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Sign Up Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/features" 
              className={`block px-3 py-2 transition-colors ${
                isActive('/features') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className={`block px-3 py-2 transition-colors ${
                isActive('/pricing') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="border-t pt-4 space-y-2">
              <Link 
                to="/login" 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
// Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, CheckCircle } from 'lucide-react';
// import './Navbar.css'; // Import the CSS file

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="navbar-container">
//         <div className="navbar-brand-section">
//           <Link to="/" className="navbar-brand">
//             <div className="navbar-logo">
//               <CheckCircle className="navbar-logo-icon" />
//             </div>
//             <span className="navbar-title">TaskFlow</span>
//           </Link>
//         </div>
          
//         {/* Desktop Navigation */}
//         <div className="navbar-links-desktop">
//           <div className="navbar-links-group">
//             <Link 
//               to="/features" 
//               className={`navbar-link ${isActive('/features') ? 'navbar-link-active' : ''}`}
//             >
//               Features
//             </Link>
//             <Link 
//               to="/pricing" 
//               className={`navbar-link ${isActive('/pricing') ? 'navbar-link-active' : ''}`}
//             >
//               Pricing
//             </Link>
//             <Link 
//               to="/about" 
//               className={`navbar-link ${isActive('/about') ? 'navbar-link-active' : ''}`}
//             >
//               About
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`navbar-link ${isActive('/contact') ? 'navbar-link-active' : ''}`}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>

//         <div className="navbar-auth-buttons-desktop">
//           <Link 
//             to="/login" 
//             className="navbar-login-btn"
//           >
//             Log In
//           </Link>
//           <Link 
//             to="/signup" 
//             className="navbar-signup-btn"
//           >
//             Sign Up Free
//           </Link>
//         </div>

//         {/* Mobile menu button */}
//         <div className="navbar-mobile-menu-button">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="navbar-toggler"
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="navbar-mobile-menu">
//           <div className="navbar-mobile-links-group">
//             <Link 
//               to="/features" 
//               className={`navbar-mobile-link ${isActive('/features') ? 'navbar-link-active' : ''}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Features
//             </Link>
//             <Link 
//               to="/pricing" 
//               className={`navbar-mobile-link ${isActive('/pricing') ? 'navbar-link-active' : ''}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Pricing
//             </Link>
//             <Link 
//               to="/about" 
//               className={`navbar-mobile-link ${isActive('/about') ? 'navbar-link-active' : ''}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`navbar-mobile-link ${isActive('/contact') ? 'navbar-link-active' : ''}`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <div className="navbar-mobile-auth-section">
//               <Link 
//                 to="/login" 
//                 className="navbar-mobile-login-btn"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Log In
//               </Link>
//               <Link 
//                 to="/signup" 
//                 className="navbar-mobile-signup-btn"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Sign Up Free
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;