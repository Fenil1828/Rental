// // // // // FILE 29: src/components/Layout/Navbar.jsx

// // // // import React from 'react';
// // // // import { Link, useNavigate, useLocation } from 'react-router-dom';
// // // // import { LogOut, User } from 'lucide-react';
// // // // import { useAuth } from '../../hooks/useAuth';
// // // // import { signOut } from '../../services/authService';
// // // // import './Layout.css';

// // // // const Navbar = () => {
// // // //   const { user } = useAuth();
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const handleLogout = async () => {
// // // //     await signOut();
// // // //     navigate('/login');
// // // //   };

// // // //   if (!user) return null;

// // // //   return (
// // // //     <nav className="navbar">
// // // //       <div className="navbar-container">
// // // //         <Link to="/" className="navbar-brand">
// // // //           <h2>Chaniya Choli Rental</h2>
// // // //         </Link>

// // // //         <div className="navbar-menu">
// // // //           <Link 
// // // //             to="/" 
// // // //             className={location.pathname === '/' ? 'active' : ''}
// // // //           >
// // // //             Dashboard
// // // //           </Link>
// // // //           <Link 
// // // //             to="/bookings" 
// // // //             className={location.pathname === '/bookings' ? 'active' : ''}
// // // //           >
// // // //             Bookings
// // // //           </Link>
// // // //           <Link 
// // // //             to="/reports" 
// // // //             className={location.pathname === '/reports' ? 'active' : ''}
// // // //           >
// // // //             Reports
// // // //           </Link>
// // // //         </div>

// // // //         <div className="navbar-user">
// // // //           <div className="user-info">
// // // //             <User size={20} />
// // // //             <span>{user.email}</span>
// // // //           </div>
// // // //           <button className="btn-logout" onClick={handleLogout}>
// // // //             <LogOut size={18} />
// // // //             Logout
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // FILE 29: src/components/Layout/Navbar.jsx

// // // import React from 'react';
// // // import { Link, useNavigate, useLocation } from 'react-router-dom';
// // // import { LogOut, User } from 'lucide-react';
// // // import { useAuth } from '../../hooks/useAuth';
// // // import { signOut } from '../../services/authService';

// // // const Navbar = () => {
// // //   const { user } = useAuth();
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const handleLogout = async () => {
// // //     await signOut();
// // //     navigate('/login');
// // //   };

// // //   if (!user) return null;

// // //   return (
// // //     <>
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

// // //         .navbar {
// // //           position: sticky;
// // //           top: 0;
// // //           z-index: 1000;
// // //           background: rgba(10, 10, 10, 0.85);
// // //           backdrop-filter: blur(20px) saturate(180%);
// // //           border-bottom: 1px solid rgba(255, 255, 255, 0.08);
// // //           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
// // //           animation: navSlideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
// // //         }

// // //         @keyframes navSlideDown {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(-100%);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         .navbar::after {
// // //           content: '';
// // //           position: absolute;
// // //           bottom: 0;
// // //           left: 50%;
// // //           transform: translateX(-50%);
// // //           width: 60%;
// // //           height: 1px;
// // //           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
// // //           animation: glowLine 3s ease-in-out infinite;
// // //         }

// // //         @keyframes glowLine {
// // //           0%, 100% { opacity: 0.5; }
// // //           50% { opacity: 1; }
// // //         }

// // //         .navbar-container {
// // //           max-width: 1400px;
// // //           margin: 0 auto;
// // //           padding: 0 32px;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: space-between;
// // //           height: 70px;
// // //           font-family: 'Sora', sans-serif;
// // //         }

// // //         .navbar-brand {
// // //           text-decoration: none;
// // //           color: #ffffff;
// // //           font-size: 22px;
// // //           font-weight: 700;
// // //           letter-spacing: -0.5px;
// // //           transition: all 0.3s ease;
// // //           position: relative;
// // //           animation: brandFadeIn 0.8s ease 0.2s both;
// // //         }

// // //         @keyframes brandFadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(-20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         .navbar-brand h2 {
// // //           margin: 0;
// // //           background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //           text-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
// // //         }

// // //         .navbar-brand:hover h2 {
// // //           background: linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //         }

// // //         .navbar-menu {
// // //           display: flex;
// // //           gap: 8px;
// // //           animation: menuFadeIn 0.8s ease 0.4s both;
// // //         }

// // //         @keyframes menuFadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(-10px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         .navbar-menu a {
// // //           position: relative;
// // //           padding: 10px 20px;
// // //           color: #b0b0b0;
// // //           text-decoration: none;
// // //           font-size: 14px;
// // //           font-weight: 500;
// // //           border-radius: 10px;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           letter-spacing: 0.3px;
// // //         }

// // //         .navbar-menu a::before {
// // //           content: '';
// // //           position: absolute;
// // //           bottom: 8px;
// // //           left: 50%;
// // //           transform: translateX(-50%);
// // //           width: 0;
// // //           height: 2px;
// // //           background: linear-gradient(90deg, #ffffff, #b0b0b0);
// // //           transition: width 0.3s ease;
// // //           border-radius: 2px;
// // //         }

// // //         .navbar-menu a:hover {
// // //           color: #ffffff;
// // //           background: rgba(255, 255, 255, 0.05);
// // //         }

// // //         .navbar-menu a:hover::before {
// // //           width: 60%;
// // //         }

// // //         .navbar-menu a.active {
// // //           color: #ffffff;
// // //           background: rgba(255, 255, 255, 0.1);
// // //           border: 1px solid rgba(255, 255, 255, 0.1);
// // //         }

// // //         .navbar-menu a.active::before {
// // //           width: 60%;
// // //         }

// // //         .navbar-user {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 16px;
// // //           animation: userFadeIn 0.8s ease 0.6s both;
// // //         }

// // //         @keyframes userFadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(20px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         .user-info {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 10px;
// // //           padding: 8px 16px;
// // //           background: rgba(255, 255, 255, 0.05);
// // //           border: 1px solid rgba(255, 255, 255, 0.08);
// // //           border-radius: 10px;
// // //           color: #cccccc;
// // //           font-size: 14px;
// // //           font-weight: 500;
// // //           transition: all 0.3s ease;
// // //         }

// // //         .user-info:hover {
// // //           background: rgba(255, 255, 255, 0.08);
// // //           border-color: rgba(255, 255, 255, 0.12);
// // //           transform: translateY(-1px);
// // //         }

// // //         .user-info svg {
// // //           color: #b0b0b0;
// // //         }

// // //         .btn-logout {
// // //           display: flex;
// // //           align-items: center;
// // //           gap: 8px;
// // //           padding: 8px 16px;
// // //           background: rgba(239, 68, 68, 0.1);
// // //           border: 1px solid rgba(239, 68, 68, 0.2);
// // //           border-radius: 10px;
// // //           color: #ff7b7b;
// // //           font-size: 14px;
// // //           font-weight: 500;
// // //           font-family: 'Sora', sans-serif;
// // //           cursor: pointer;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //         }

// // //         .btn-logout:hover {
// // //           background: rgba(239, 68, 68, 0.15);
// // //           border-color: rgba(239, 68, 68, 0.3);
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 4px 15px rgba(239, 68, 68, 0.2);
// // //         }

// // //         .btn-logout:active {
// // //           transform: translateY(0);
// // //         }

// // //         /* Responsive Design */
// // //         @media (max-width: 768px) {
// // //           .navbar-container {
// // //             padding: 0 20px;
// // //             height: 60px;
// // //           }

// // //           .navbar-brand {
// // //             font-size: 18px;
// // //           }

// // //           .navbar-menu {
// // //             gap: 4px;
// // //           }

// // //           .navbar-menu a {
// // //             padding: 8px 12px;
// // //             font-size: 13px;
// // //           }

// // //           .user-info span {
// // //             display: none;
// // //           }

// // //           .btn-logout {
// // //             padding: 8px 12px;
// // //             font-size: 13px;
// // //           }
// // //         }

// // //         @media (max-width: 480px) {
// // //           .navbar-container {
// // //             padding: 0 16px;
// // //             flex-wrap: wrap;
// // //             height: auto;
// // //             padding-top: 12px;
// // //             padding-bottom: 12px;
// // //           }

// // //           .navbar-brand {
// // //             order: 1;
// // //             flex: 1;
// // //           }

// // //           .navbar-user {
// // //             order: 2;
// // //             gap: 8px;
// // //           }

// // //           .navbar-menu {
// // //             order: 3;
// // //             width: 100%;
// // //             margin-top: 12px;
// // //             justify-content: center;
// // //           }

// // //           .user-info {
// // //             padding: 6px 10px;
// // //           }

// // //           .btn-logout {
// // //             padding: 6px 10px;
// // //           }

// // //           .btn-logout span {
// // //             display: none;
// // //           }
// // //         }
// // //       `}</style>

// // //       <nav className="navbar">
// // //         <div className="navbar-container">
// // //           <Link to="/" className="navbar-brand">
// // //             <h2>Chaniya Choli Rental</h2>
// // //           </Link>

// // //           <div className="navbar-menu">
// // //             <Link 
// // //               to="/" 
// // //               className={location.pathname === '/' ? 'active' : ''}
// // //             >
// // //               Dashboard
// // //             </Link>
// // //             <Link 
// // //               to="/bookings" 
// // //               className={location.pathname === '/bookings' ? 'active' : ''}
// // //             >
// // //               Bookings
// // //             </Link>
// // //             <Link 
// // //               to="/reports" 
// // //               className={location.pathname === '/reports' ? 'active' : ''}
// // //             >
// // //               Reports
// // //             </Link>
// // //           </div>

// // //           <div className="navbar-user">
// // //             <div className="user-info">
// // //               <User size={20} />
// // //               <span>{user.email}</span>
// // //             </div>
// // //             <button className="btn-logout" onClick={handleLogout}>
// // //               <LogOut size={18} />
// // //               <span>Logout</span>
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </>
// // //   );
// // // };

// // // export default Navbar;

// // // FILE 29: src/components/Layout/Navbar.jsx

// // import React from 'react';
// // import { Link, useNavigate, useLocation } from 'react-router-dom';
// // import { LogOut, User } from 'lucide-react';
// // import { useAuth } from '../../hooks/useAuth';
// // import { signOut } from '../../services/authService';

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
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

// //         .navbar {
// //           position: sticky;
// //           top: 0;
// //           z-index: 1000;
// //           background: rgba(10, 10, 10, 0.90);
// //           backdrop-filter: blur(15px) saturate(150%);
// //           border-bottom: 1px solid rgba(255, 255, 255, 0.10);
// //           /* Slight slide-down on load */
// //           animation: navSlideDown 0.4s ease-out both;
// //         }

// //         @keyframes navSlideDown {
// //           from {
// //             opacity: 0;
// //             transform: translateY(-10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         .navbar-container {
// //           max-width: 1400px;
// //           margin: 0 auto;
// //           padding: 0 32px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           height: 70px;
// //           font-family: 'Sora', sans-serif;
// //         }

// //         .navbar-brand {
// //           text-decoration: none;
// //           color: #ffffff;
// //           font-size: 22px;
// //           font-weight: 700;
// //           letter-spacing: -0.5px;
// //           transition: color 0.3s ease;
// //         }

// //         .navbar-brand:hover {
// //           color: #e0e0e0;
// //         }

// //         .navbar-brand h2 {
// //           margin: 0;
// //           background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //           text-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
// //         }

// //         .navbar-menu {
// //           display: flex;
// //           gap: 8px;
// //         }

// //         .navbar-menu a {
// //           padding: 10px 20px;
// //           color: #b0b0b0;
// //           text-decoration: none;
// //           font-size: 14px;
// //           font-weight: 500;
// //           border-radius: 10px;
// //           transition: background-color 0.3s ease, color 0.3s ease;
// //         }

// //         .navbar-menu a:hover {
// //           color: #ffffff;
// //           background: rgba(255, 255, 255, 0.05);
// //         }

// //         .navbar-menu a.active {
// //           color: #ffffff;
// //           background: rgba(255, 255, 255, 0.1);
// //           border: 1px solid rgba(255, 255, 255, 0.1);
// //         }

// //         .navbar-user {
// //           display: flex;
// //           align-items: center;
// //           gap: 16px;
// //         }

// //         .user-info {
// //           display: flex;
// //           align-items: center;
// //           gap: 10px;
// //           padding: 8px 16px;
// //           background: rgba(255, 255, 255, 0.05);
// //           border: 1px solid rgba(255, 255, 255, 0.08);
// //           border-radius: 10px;
// //           color: #cccccc;
// //           font-size: 14px;
// //           font-weight: 500;
// //         }

// //         .user-info:hover {
// //           background: rgba(255, 255, 255, 0.08);
// //         }

// //         .btn-logout {
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //           padding: 8px 16px;
// //           background: rgba(239, 68, 68, 0.1);
// //           border: 1px solid rgba(239, 68, 68, 0.2);
// //           border-radius: 10px;
// //           color: #ff7b7b;
// //           font-size: 14px;
// //           font-weight: 500;
// //           cursor: pointer;
// //           transition: background 0.3s ease, transform 0.2s ease;
// //         }

// //         .btn-logout:hover {
// //           background: rgba(239, 68, 68, 0.15);
// //           transform: translateY(-1px);
// //         }

// //         .btn-logout:active {
// //           transform: translateY(0);
// //         }

// //         /* Responsive Design */
// //         @media (max-width: 768px) {
// //           .navbar-container {
// //             padding: 0 20px;
// //             height: 60px;
// //           }

// //           .navbar-brand {
// //             font-size: 18px;
// //           }

// //           .navbar-menu {
// //             gap: 4px;
// //           }

// //           .navbar-menu a {
// //             padding: 8px 12px;
// //             font-size: 13px;
// //           }

// //           .user-info span {
// //             display: none;
// //           }

// //           .btn-logout {
// //             padding: 8px 12px;
// //             font-size: 13px;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .navbar-container {
// //             padding: 0 16px;
// //             flex-wrap: wrap;
// //             height: auto;
// //             padding-top: 12px;
// //             padding-bottom: 12px;
// //           }

// //           .navbar-brand {
// //             order: 1;
// //             flex: 1;
// //           }

// //           .navbar-user {
// //             order: 2;
// //             gap: 8px;
// //           }

// //           .navbar-menu {
// //             order: 3;
// //             width: 100%;
// //             margin-top: 12px;
// //             justify-content: center;
// //           }

// //           .user-info {
// //             padding: 6px 10px;
// //           }

// //           .btn-logout {
// //             padding: 6px 10px;
// //           }

// //           .btn-logout span {
// //             display: none;
// //           }
// //         }
// //       `}</style>

// //       <nav className="navbar">
// //         <div className="navbar-container">
// //           <Link to="/" className="navbar-brand">
// //             <h2>Chaniya Choli Rental</h2>
// //           </Link>

// //           <div className="navbar-menu">
// //             <Link
// //               to="/"
// //               className={location.pathname === '/' ? 'active' : ''}
// //             >
// //               Dashboard
// //             </Link>
// //             <Link
// //               to="/bookings"
// //               className={location.pathname === '/bookings' ? 'active' : ''}
// //             >
// //               Bookings
// //             </Link>
// //             <Link
// //               to="/reports"
// //               className={location.pathname === '/reports' ? 'active' : ''}
// //             >
// //               Reports
// //             </Link>
// //           </div>

// //           <div className="navbar-user">
// //             <div className="user-info">
// //               <User size={20} />
// //               <span>{user.email}</span>
// //             </div>
// //             <button className="btn-logout" onClick={handleLogout}>
// //               <LogOut size={18} />
// //               <span>Logout</span>
// //             </button>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;

// // FILE: src/components/Layout/Navbar.jsx

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
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

//         .navbar {
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(20px) saturate(180%);
//           border-bottom: 1px solid rgba(229, 231, 235, 0.8);
//           box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
//           animation: navSlideDown 0.4s ease-out both;
//         }

//         @keyframes navSlideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .navbar-container {
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 32px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 70px;
//           font-family: 'Inter', sans-serif;
//         }

//         .navbar-brand {
//           text-decoration: none;
//           color: #111827;
//           font-size: 22px;
//           font-weight: 700;
//           letter-spacing: -0.5px;
//           transition: color 0.3s ease;
//         }

//         .navbar-brand:hover {
//           color: #1f2937;
//         }

//         .navbar-brand h2 {
//           margin: 0;
//           background: linear-gradient(135deg, #111827 0%, #374151 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .navbar-menu {
//           display: flex;
//           gap: 8px;
//         }

//         .navbar-menu a {
//           padding: 10px 20px;
//           color: #6b7280;
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 500;
//           border-radius: 10px;
//           transition: all 0.3s ease;
//           position: relative;
//         }

//         .navbar-menu a::after {
//           content: '';
//           position: absolute;
//           bottom: 8px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #3b82f6, #2563eb);
//           transition: width 0.3s ease;
//           border-radius: 2px;
//         }

//         .navbar-menu a:hover {
//           color: #111827;
//           background: rgba(59, 130, 246, 0.08);
//         }

//         .navbar-menu a:hover::after {
//           width: 50%;
//         }

//         .navbar-menu a.active {
//           color: #3b82f6;
//           background: rgba(59, 130, 246, 0.12);
//           border: 1px solid rgba(59, 130, 246, 0.2);
//           font-weight: 600;
//         }

//         .navbar-menu a.active::after {
//           width: 50%;
//         }

//         .navbar-user {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         .user-info {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 8px 16px;
//           background: rgba(243, 244, 246, 0.8);
//           border: 1px solid rgba(229, 231, 235, 0.6);
//           border-radius: 10px;
//           color: #374151;
//           font-size: 14px;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }

//         .user-info:hover {
//           background: rgba(229, 231, 235, 0.6);
//           border-color: rgba(209, 213, 219, 0.8);
//         }

//         .user-info svg {
//           color: #6b7280;
//         }

//         .btn-logout {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 16px;
//           background: rgba(254, 226, 226, 0.8);
//           border: 1px solid rgba(252, 165, 165, 0.6);
//           border-radius: 10px;
//           color: #dc2626;
//           font-size: 14px;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Inter', sans-serif;
//         }

//         .btn-logout:hover {
//           background: rgba(254, 202, 202, 0.9);
//           border-color: rgba(248, 113, 113, 0.8);
//           transform: translateY(-1px);
//           box-shadow: 0 2px 8px rgba(220, 38, 38, 0.15);
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

// FILE: src/components/Layout/Navbar.jsx

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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          /* Premium Glassmorphism - Frosted White Glass */
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 8px 32px rgba(31, 38, 135, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          animation: navSlideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1);
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

        /* Subtle top highlight */
        .navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8) 20%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8) 80%,
            transparent
          );
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          font-family: 'Inter', sans-serif;
        }

        .navbar-brand {
          text-decoration: none;
          color: #1f2937;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.5px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-brand:hover {
          transform: translateY(-1px);
          color: #111827;
        }

        .navbar-brand h2 {
          margin: 0;
          background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05));
        }

        .navbar-menu {
          display: flex;
          gap: 8px;
        }

        .navbar-menu a {
          padding: 10px 20px;
          color: #6b7280;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        /* Subtle underline animation */
        .navbar-menu a::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #6366f1);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .navbar-menu a:hover {
          color: #1f2937;
          background: rgba(255, 255, 255, 0.7);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }

        .navbar-menu a:hover::after {
          width: 50%;
        }

        .navbar-menu a.active {
          color: #3b82f6;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.3);
          font-weight: 600;
          box-shadow: 
            0 8px 16px rgba(59, 130, 246, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .navbar-menu a.active::after {
          width: 50%;
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
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .user-info:hover {
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .user-info svg {
          color: #6b7280;
        }

        .btn-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(254, 226, 226, 0.7);
          border: 1px solid rgba(252, 165, 165, 0.5);
          border-radius: 12px;
          color: #dc2626;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Inter', sans-serif;
          box-shadow: 
            0 4px 12px rgba(220, 38, 38, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .btn-logout:hover {
          background: rgba(254, 202, 202, 0.9);
          border-color: rgba(248, 113, 113, 0.7);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 20px rgba(220, 38, 38, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
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
