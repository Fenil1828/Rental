// // // FILE 29: src/components/Layout/Navbar.jsx

// // import React from 'react';
// // import { Link, useNavigate, useLocation } from 'react-router-dom';
// // import { LogOut, User } from 'lucide-react';
// // import { useAuth } from '../../hooks/useAuth';
// // import { signOut } from '../../services/authService';
// // import './Layout.css';

// // const Navbar = () => {
// //   const { user } = useAuth();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleLogout = async () => {
// //     await signOut();
// //     navigate('/login');
// //   };

// //   if (!user) return null;

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">
// //         <Link to="/" className="navbar-brand">
// //           <h2>Chaniya Choli Rental</h2>
// //         </Link>

// //         <div className="navbar-menu">
// //           <Link 
// //             to="/" 
// //             className={location.pathname === '/' ? 'active' : ''}
// //           >
// //             Dashboard
// //           </Link>
// //           <Link 
// //             to="/bookings" 
// //             className={location.pathname === '/bookings' ? 'active' : ''}
// //           >
// //             Bookings
// //           </Link>
// //           <Link 
// //             to="/reports" 
// //             className={location.pathname === '/reports' ? 'active' : ''}
// //           >
// //             Reports
// //           </Link>
// //         </div>

// //         <div className="navbar-user">
// //           <div className="user-info">
// //             <User size={20} />
// //             <span>{user.email}</span>
// //           </div>
// //           <button className="btn-logout" onClick={handleLogout}>
// //             <LogOut size={18} />
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // FILE 29: src/components/Layout/Navbar.jsx

// import React from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { LogOut, User } from 'lucide-react';
// import { useAuth } from '../../hooks/useAuth';
// import { signOut } from '../../services/authService';

// const Navbar = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = async () => {
//     await signOut();
//     navigate('/login');
//   };

//   if (!user) return null;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

//         .navbar {
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           background: rgba(10, 10, 10, 0.85);
//           backdrop-filter: blur(20px) saturate(180%);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.08);
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
//           animation: navSlideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         @keyframes navSlideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-100%);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .navbar::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 60%;
//           height: 1px;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//           animation: glowLine 3s ease-in-out infinite;
//         }

//         @keyframes glowLine {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }

//         .navbar-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 32px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 70px;
//           font-family: 'Sora', sans-serif;
//         }

//         .navbar-brand {
//           text-decoration: none;
//           color: #ffffff;
//           font-size: 22px;
//           font-weight: 700;
//           letter-spacing: -0.5px;
//           transition: all 0.3s ease;
//           position: relative;
//           animation: brandFadeIn 0.8s ease 0.2s both;
//         }

//         @keyframes brandFadeIn {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .navbar-brand h2 {
//           margin: 0;
//           background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           text-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
//         }

//         .navbar-brand:hover h2 {
//           background: linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .navbar-menu {
//           display: flex;
//           gap: 8px;
//           animation: menuFadeIn 0.8s ease 0.4s both;
//         }

//         @keyframes menuFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .navbar-menu a {
//           position: relative;
//           padding: 10px 20px;
//           color: #b0b0b0;
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 500;
//           border-radius: 10px;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           letter-spacing: 0.3px;
//         }

//         .navbar-menu a::before {
//           content: '';
//           position: absolute;
//           bottom: 8px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #ffffff, #b0b0b0);
//           transition: width 0.3s ease;
//           border-radius: 2px;
//         }

//         .navbar-menu a:hover {
//           color: #ffffff;
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .navbar-menu a:hover::before {
//           width: 60%;
//         }

//         .navbar-menu a.active {
//           color: #ffffff;
//           background: rgba(255, 255, 255, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .navbar-menu a.active::before {
//           width: 60%;
//         }

//         .navbar-user {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           animation: userFadeIn 0.8s ease 0.6s both;
//         }

//         @keyframes userFadeIn {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .user-info {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 8px 16px;
//           background: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 10px;
//           color: #cccccc;
//           font-size: 14px;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }

//         .user-info:hover {
//           background: rgba(255, 255, 255, 0.08);
//           border-color: rgba(255, 255, 255, 0.12);
//           transform: translateY(-1px);
//         }

//         .user-info svg {
//           color: #b0b0b0;
//         }

//         .btn-logout {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 16px;
//           background: rgba(239, 68, 68, 0.1);
//           border: 1px solid rgba(239, 68, 68, 0.2);
//           border-radius: 10px;
//           color: #ff7b7b;
//           font-size: 14px;
//           font-weight: 500;
//           font-family: 'Sora', sans-serif;
//           cursor: pointer;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .btn-logout:hover {
//           background: rgba(239, 68, 68, 0.15);
//           border-color: rgba(239, 68, 68, 0.3);
//           transform: translateY(-2px);
//           box-shadow: 0 4px 15px rgba(239, 68, 68, 0.2);
//         }

//         .btn-logout:active {
//           transform: translateY(0);
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .navbar-container {
//             padding: 0 20px;
//             height: 60px;
//           }

//           .navbar-brand {
//             font-size: 18px;
//           }

//           .navbar-menu {
//             gap: 4px;
//           }

//           .navbar-menu a {
//             padding: 8px 12px;
//             font-size: 13px;
//           }

//           .user-info span {
//             display: none;
//           }

//           .btn-logout {
//             padding: 8px 12px;
//             font-size: 13px;
//           }
//         }

//         @media (max-width: 480px) {
//           .navbar-container {
//             padding: 0 16px;
//             flex-wrap: wrap;
//             height: auto;
//             padding-top: 12px;
//             padding-bottom: 12px;
//           }

//           .navbar-brand {
//             order: 1;
//             flex: 1;
//           }

//           .navbar-user {
//             order: 2;
//             gap: 8px;
//           }

//           .navbar-menu {
//             order: 3;
//             width: 100%;
//             margin-top: 12px;
//             justify-content: center;
//           }

//           .user-info {
//             padding: 6px 10px;
//           }

//           .btn-logout {
//             padding: 6px 10px;
//           }

//           .btn-logout span {
//             display: none;
//           }
//         }
//       `}</style>

//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-brand">
//             <h2>Chaniya Choli Rental</h2>
//           </Link>

//           <div className="navbar-menu">
//             <Link 
//               to="/" 
//               className={location.pathname === '/' ? 'active' : ''}
//             >
//               Dashboard
//             </Link>
//             <Link 
//               to="/bookings" 
//               className={location.pathname === '/bookings' ? 'active' : ''}
//             >
//               Bookings
//             </Link>
//             <Link 
//               to="/reports" 
//               className={location.pathname === '/reports' ? 'active' : ''}
//             >
//               Reports
//             </Link>
//           </div>

//           <div className="navbar-user">
//             <div className="user-info">
//               <User size={20} />
//               <span>{user.email}</span>
//             </div>
//             <button className="btn-logout" onClick={handleLogout}>
//               <LogOut size={18} />
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// FILE 29: src/components/Layout/Navbar.jsx

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { signOut } from '../../services/authService';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.90);
          backdrop-filter: blur(15px) saturate(150%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          /* Slight slide-down on load */
          animation: navSlideDown 0.4s ease-out both;
        }

        @keyframes navSlideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          font-family: 'Sora', sans-serif;
        }

        .navbar-brand {
          text-decoration: none;
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.5px;
          transition: color 0.3s ease;
        }

        .navbar-brand:hover {
          color: #e0e0e0;
        }

        .navbar-brand h2 {
          margin: 0;
          background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
        }

        .navbar-menu {
          display: flex;
          gap: 8px;
        }

        .navbar-menu a {
          padding: 10px 20px;
          color: #b0b0b0;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          border-radius: 10px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .navbar-menu a:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .navbar-menu a.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-user {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          color: #cccccc;
          font-size: 14px;
          font-weight: 500;
        }

        .user-info:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .btn-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 10px;
          color: #ff7b7b;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .btn-logout:hover {
          background: rgba(239, 68, 68, 0.15);
          transform: translateY(-1px);
        }

        .btn-logout:active {
          transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 20px;
            height: 60px;
          }

          .navbar-brand {
            font-size: 18px;
          }

          .navbar-menu {
            gap: 4px;
          }

          .navbar-menu a {
            padding: 8px 12px;
            font-size: 13px;
          }

          .user-info span {
            display: none;
          }

          .btn-logout {
            padding: 8px 12px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            padding: 0 16px;
            flex-wrap: wrap;
            height: auto;
            padding-top: 12px;
            padding-bottom: 12px;
          }

          .navbar-brand {
            order: 1;
            flex: 1;
          }

          .navbar-user {
            order: 2;
            gap: 8px;
          }

          .navbar-menu {
            order: 3;
            width: 100%;
            margin-top: 12px;
            justify-content: center;
          }

          .user-info {
            padding: 6px 10px;
          }

          .btn-logout {
            padding: 6px 10px;
          }

          .btn-logout span {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <h2>Chaniya Choli Rental</h2>
          </Link>

          <div className="navbar-menu">
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Dashboard
            </Link>
            <Link
              to="/bookings"
              className={location.pathname === '/bookings' ? 'active' : ''}
            >
              Bookings
            </Link>
            <Link
              to="/reports"
              className={location.pathname === '/reports' ? 'active' : ''}
            >
              Reports
            </Link>
          </div>

          <div className="navbar-user">
            <div className="user-info">
              <User size={20} />
              <span>{user.email}</span>
            </div>
            <button className="btn-logout" onClick={handleLogout}>
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
