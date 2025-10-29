// // FILE 30: src/components/Layout/Sidebar.jsx

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Home, Calendar, BarChart3, Package } from 'lucide-react';
// import './Layout.css';

// const Sidebar = () => {
//   const location = useLocation();

//   const menuItems = [
//     { path: '/', icon: Home, label: 'Dashboard' },
//     { path: '/bookings', icon: Calendar, label: 'Bookings' },
//     { path: '/reports', icon: BarChart3, label: 'Reports' }
//   ];

//   return (
//     <aside className="sidebar">
//       <div className="sidebar-menu">
//         {menuItems.map(item => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
//           >
//             <item.icon size={20} />
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// FILE 30: src/components/Layout/Sidebar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, BarChart3, Package } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/bookings', icon: Calendar, label: 'Bookings' },
    { path: '/reports', icon: BarChart3, label: 'Reports' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap');

        .sidebar {
          position: fixed;
          top: 70px;
          left: 0;
          width: 240px;
          height: calc(100vh - 70px);
          background: #ffffff;
          border-right: 1px solid #e5e5e5;
          padding: 24px 16px;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          animation: slideIn 0.4s ease;
        }

        .sidebar::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #525252;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Sora', sans-serif;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .sidebar-item:hover {
          color: #171717;
          background: #f5f5f5;
          transform: translateX(4px);
        }

        .sidebar-item svg {
          transition: transform 0.2s ease;
        }

        .sidebar-item:hover svg {
          transform: scale(1.1);
        }

        .sidebar-item.active {
          color: #d946ef;
          background: #fdf4ff;
          border-left: 3px solid #d946ef;
          padding-left: 13px;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 70px;
            padding: 24px 8px;
          }

          .sidebar-item span {
            display: none;
          }

          .sidebar-item {
            justify-content: center;
            padding: 12px;
          }

          .sidebar-item.active {
            border-left: none;
            border-bottom: 3px solid #d946ef;
            padding-left: 12px;
            padding-bottom: 9px;
          }
        }
      `}</style>

      <aside className="sidebar">
        <div className="sidebar-menu">
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;