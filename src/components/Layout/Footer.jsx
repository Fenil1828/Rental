// // // // FILE 31: src/components/Layout/Footer.jsx

// // // import React from 'react';
// // // import './Layout.css';

// // // const Footer = () => {
// // //   return (
// // //     <footer className="footer">
// // //       <div className="footer-container">
// // //         <p>&copy; 2024 Chaniya Choli Rental Management System. All rights reserved.</p>
// // //         <p className="footer-credit">Built with React & Supabase</p>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;


// // // FILE 31: src/components/Layout/Footer.jsx

// // import React from 'react';

// // const Footer = () => {
// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

// //         .footer {
// //           background: linear-gradient(180deg, #0a0a0a 0%, #050505 100%);
// //           border-top: 1px solid rgba(255, 255, 255, 0.1);
// //           padding: 48px 0 0 0;
// //           margin-top: auto;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .footer::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           height: 1px;
// //           background: linear-gradient(90deg, transparent, #d946ef, #f97316, #fbbf24, transparent);
// //           animation: borderGlow 3s ease-in-out infinite;
// //         }

// //         @keyframes borderGlow {
// //           0%, 100% { opacity: 0.4; }
// //           50% { opacity: 1; }
// //         }

// //         .footer-container {
// //           max-width: 1400px;
// //           margin: 0 auto;
// //           padding: 0 32px;
// //           font-family: 'Sora', sans-serif;
// //         }

// //         .footer-content {
// //           display: grid;
// //           grid-template-columns: 2fr 1fr 1fr 1fr;
// //           gap: 48px;
// //           padding-bottom: 40px;
// //           border-bottom: 1px solid rgba(255, 255, 255, 0.08);
// //         }

// //         .footer-brand {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 16px;
// //         }

// //         .footer-logo {
// //           font-size: 24px;
// //           font-weight: 700;
// //           background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //           letter-spacing: -0.5px;
// //         }

// //         .footer-description {
// //           color: #888888;
// //           font-size: 14px;
// //           line-height: 1.6;
// //           max-width: 300px;
// //         }

// //         .footer-section {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 16px;
// //         }

// //         .footer-title {
// //           color: #ffffff;
// //           font-size: 15px;
// //           font-weight: 600;
// //           margin-bottom: 4px;
// //         }

// //         .footer-links {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 10px;
// //         }

// //         .footer-link {
// //           color: #888888;
// //           text-decoration: none;
// //           font-size: 14px;
// //           transition: all 0.2s ease;
// //           width: fit-content;
// //         }

// //         .footer-link:hover {
// //           color: #d946ef;
// //           transform: translateX(4px);
// //         }

// //         .footer-bottom {
// //           padding: 24px 0;
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //         }

// //         .footer-copyright {
// //           color: #666666;
// //           font-size: 13px;
// //         }

// //         .footer-copyright strong {
// //           color: #888888;
// //           font-weight: 600;
// //         }

// //         .footer-badges {
// //           display: flex;
// //           gap: 12px;
// //           align-items: center;
// //         }

// //         .badge {
// //           padding: 6px 12px;
// //           background: rgba(255, 255, 255, 0.05);
// //           border: 1px solid rgba(255, 255, 255, 0.1);
// //           border-radius: 6px;
// //           color: #888888;
// //           font-size: 12px;
// //           font-weight: 500;
// //           transition: all 0.2s ease;
// //         }

// //         .badge:hover {
// //           background: rgba(255, 255, 255, 0.08);
// //           border-color: rgba(255, 255, 255, 0.15);
// //           color: #b0b0b0;
// //         }

// //         .badge-premium {
// //           background: linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%);
// //           border: 1px solid rgba(217, 70, 239, 0.3);
// //           color: #d946ef;
// //         }

// //         .badge-premium:hover {
// //           background: linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%);
// //           border-color: rgba(217, 70, 239, 0.4);
// //         }

// //         @media (max-width: 1024px) {
// //           .footer-content {
// //             grid-template-columns: 1fr 1fr;
// //             gap: 32px;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .footer {
// //             padding: 32px 0 0 0;
// //           }

// //           .footer-container {
// //             padding: 0 20px;
// //           }

// //           .footer-content {
// //             grid-template-columns: 1fr;
// //             gap: 24px;
// //             padding-bottom: 24px;
// //           }

// //           .footer-bottom {
// //             flex-direction: column;
// //             gap: 16px;
// //             padding: 20px 0;
// //           }

// //           .footer-badges {
// //             flex-wrap: wrap;
// //             justify-content: center;
// //           }
// //         }
// //       `}</style>

// //       <footer className="footer">
// //         <div className="footer-container">
// //           <div className="footer-content">
// //             <div className="footer-brand">
// //               <h3 className="footer-logo">Chaniya Choli Rental</h3>
// //               <p className="footer-description">
// //                 Premium rental management system for traditional Indian attire. 
// //                 Streamline your business with our elegant solution.
// //               </p>
// //             </div>

// //             <div className="footer-section">
// //               <h4 className="footer-title">Quick Links</h4>
// //               <div className="footer-links">
// //                 <a href="/" className="footer-link">Dashboard</a>
// //                 <a href="/bookings" className="footer-link">Bookings</a>
// //                 <a href="/reports" className="footer-link">Reports</a>
// //               </div>
// //             </div>

// //             <div className="footer-section">
// //               <h4 className="footer-title">Support</h4>
// //               <div className="footer-links">
// //                 <a href="#" className="footer-link">Help Center</a>
// //                 <a href="#" className="footer-link">Documentation</a>
// //                 <a href="#" className="footer-link">Contact Us</a>
// //               </div>
// //             </div>

// //             <div className="footer-section">
// //               <h4 className="footer-title">Legal</h4>
// //               <div className="footer-links">
// //                 <a href="#" className="footer-link">Privacy Policy</a>
// //                 <a href="#" className="footer-link">Terms of Service</a>
// //                 <a href="#" className="footer-link">Cookie Policy</a>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="footer-bottom">
// //             <p className="footer-copyright">
// //               © 2025 <strong>Chaniya Choli Rental</strong>. All rights reserved.
// //             </p>
// //             <div className="footer-badges">
// //               <span className="badge badge-premium">Premium Edition</span>
// //               <span className="badge">Secure</span>
// //               <span className="badge">Cloud Powered</span>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // };

// // export default Footer;

// import React from 'react';

// const Footer = () => {
//   const styles = {
//     footer: {
//       background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
//       borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//       padding: '48px 0 0 0',
//       marginTop: '80px',
//       position: 'relative',
//       overflow: 'hidden',
//       width: '100%',
//       fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
//     },
//     footerBefore: {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       height: '1px',
//       background: 'linear-gradient(90deg, transparent, #d946ef, #f97316, #fbbf24, transparent)',
//       animation: 'borderGlow 3s ease-in-out infinite'
//     },
//     footerContainer: {
//       maxWidth: '1400px',
//       margin: '0 auto',
//       padding: '0 32px'
//     },
//     footerContent: {
//       display: 'grid',
//       gridTemplateColumns: '2fr 1fr 1fr 1fr',
//       gap: '48px',
//       paddingBottom: '40px',
//       borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
//     },
//     footerBrand: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px'
//     },
//     footerLogo: {
//       fontSize: '24px',
//       fontWeight: 700,
//       background: 'linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//       letterSpacing: '-0.5px',
//       margin: 0
//     },
//     footerDescription: {
//       color: '#888888',
//       fontSize: '14px',
//       lineHeight: 1.6,
//       maxWidth: '300px',
//       margin: 0
//     },
//     footerSection: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px'
//     },
//     footerTitle: {
//       color: '#ffffff',
//       fontSize: '15px',
//       fontWeight: 600,
//       marginBottom: '4px',
//       margin: 0
//     },
//     footerLinks: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '10px'
//     },
//     footerLink: {
//       color: '#888888',
//       textDecoration: 'none',
//       fontSize: '14px',
//       transition: 'all 0.2s ease',
//       width: 'fit-content',
//       cursor: 'pointer'
//     },
//     footerBottom: {
//       padding: '24px 0',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center'
//     },
//     footerCopyright: {
//       color: '#666666',
//       fontSize: '13px',
//       margin: 0
//     },
//     footerBadges: {
//       display: 'flex',
//       gap: '12px',
//       alignItems: 'center'
//     },
//     badge: {
//       padding: '6px 12px',
//       background: 'rgba(255, 255, 255, 0.05)',
//       border: '1px solid rgba(255, 255, 255, 0.1)',
//       borderRadius: '6px',
//       color: '#888888',
//       fontSize: '12px',
//       fontWeight: 500,
//       transition: 'all 0.2s ease'
//     },
//     badgePremium: {
//       padding: '6px 12px',
//       background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
//       border: '1px solid rgba(217, 70, 239, 0.3)',
//       color: '#d946ef',
//       borderRadius: '6px',
//       fontSize: '12px',
//       fontWeight: 500,
//       transition: 'all 0.2s ease'
//     }
//   };

//   const [hoveredLink, setHoveredLink] = React.useState(null);
//   const [hoveredBadge, setHoveredBadge] = React.useState(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
        
//         .footer-responsive {
//           opacity: 0;
//           animation: fadeInFooter 0.1s ease-in forwards;
//         }
        
//         @keyframes fadeInFooter {
//           to { opacity: 1; }
//         }
        
//         @keyframes borderGlow {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 1; }
//         }

//         @media (max-width: 1024px) {
//           .footer-content-responsive {
//             grid-template-columns: 1fr 1fr !important;
//             gap: 32px !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .footer-responsive {
//             padding: 32px 0 0 0 !important;
//             margin-top: 60px !important;
//           }

//           .footer-container-responsive {
//             padding: 0 20px !important;
//           }

//           .footer-content-responsive {
//             grid-template-columns: 1fr !important;
//             gap: 24px !important;
//             padding-bottom: 24px !important;
//           }

//           .footer-bottom-responsive {
//             flex-direction: column !important;
//             gap: 16px !important;
//             padding: 20px 0 !important;
//           }

//           .footer-badges-responsive {
//             flex-wrap: wrap !important;
//             justify-content: center !important;
//           }
//         }
//       `}</style>

//       <footer style={styles.footer} className="footer-responsive">
//         <div style={styles.footerBefore}></div>
//         <div style={styles.footerContainer} className="footer-container-responsive">
//           <div style={styles.footerContent} className="footer-content-responsive">
//             <div style={styles.footerBrand}>
//               <h3 style={styles.footerLogo}>Chaniya Choli Rental</h3>
//               <p style={styles.footerDescription}>
//                 Premium rental management system for traditional Indian attire. 
//                 Streamline your business with our elegant solution.
//               </p>
//             </div>

//             <div style={styles.footerSection}>
//               <h4 style={styles.footerTitle}>Quick Links</h4>
//               <div style={styles.footerLinks}>
//                 <a 
//                   href="/" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'dashboard' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'dashboard' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('dashboard')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Dashboard
//                 </a>
//                 <a 
//                   href="/bookings" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'bookings' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'bookings' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('bookings')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Bookings
//                 </a>
//                 <a 
//                   href="/reports" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'reports' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'reports' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('reports')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Reports
//                 </a>
//               </div>
//             </div>

//             <div style={styles.footerSection}>
//               <h4 style={styles.footerTitle}>Support</h4>
//               <div style={styles.footerLinks}>
//                 <a 
//                   href="#" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'help' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'help' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('help')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Help Center
//                 </a>
//                 <a 
//                   href="#" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'docs' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'docs' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('docs')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Documentation
//                 </a>
//                 <a 
//                   href="#" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'contact' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'contact' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('contact')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>

//             <div style={styles.footerSection}>
//               <h4 style={styles.footerTitle}>Legal</h4>
//               <div style={styles.footerLinks}>
//                 <a 
//                   href="#" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'privacy' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'privacy' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('privacy')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Privacy Policy
//                 </a>
//                 <a 
//                   href="#" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'terms' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'terms' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('terms')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Terms of Service
//                 </a>
//                 <a 
//                   href="#" 
//                   style={{
//                     ...styles.footerLink,
//                     color: hoveredLink === 'cookie' ? '#d946ef' : '#888888',
//                     transform: hoveredLink === 'cookie' ? 'translateX(4px)' : 'translateX(0)'
//                   }}
//                   onMouseEnter={() => setHoveredLink('cookie')}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   Cookie Policy
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div style={styles.footerBottom} className="footer-bottom-responsive">
//             <p style={styles.footerCopyright}>
//               © 2025 <strong style={{ color: '#888888', fontWeight: 600 }}>Chaniya Choli Rental</strong>. All rights reserved.
//             </p>
//             <div style={styles.footerBadges} className="footer-badges-responsive">
//               <span 
//                 style={{
//                   ...styles.badgePremium,
//                   background: hoveredBadge === 'premium' 
//                     ? 'linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%)'
//                     : 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
//                   borderColor: hoveredBadge === 'premium' ? 'rgba(217, 70, 239, 0.4)' : 'rgba(217, 70, 239, 0.3)'
//                 }}
//                 onMouseEnter={() => setHoveredBadge('premium')}
//                 onMouseLeave={() => setHoveredBadge(null)}
//               >
//                 Premium Edition
//               </span>
//               <span 
//                 style={{
//                   ...styles.badge,
//                   background: hoveredBadge === 'secure' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
//                   borderColor: hoveredBadge === 'secure' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
//                   color: hoveredBadge === 'secure' ? '#b0b0b0' : '#888888'
//                 }}
//                 onMouseEnter={() => setHoveredBadge('secure')}
//                 onMouseLeave={() => setHoveredBadge(null)}
//               >
//                 Secure
//               </span>
//               <span 
//                 style={{
//                   ...styles.badge,
//                   background: hoveredBadge === 'cloud' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
//                   borderColor: hoveredBadge === 'cloud' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
//                   color: hoveredBadge === 'cloud' ? '#b0b0b0' : '#888888'
//                 }}
//                 onMouseEnter={() => setHoveredBadge('cloud')}
//                 onMouseLeave={() => setHoveredBadge(null)}
//               >
//                 Cloud Powered
//               </span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '48px 0 0 0',
      marginTop: '80px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      fontFamily: "'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      // Remove any transform or animation that causes position shift
    },
    footerBefore: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, #d946ef, #f97316, #fbbf24, transparent)',
      animation: 'borderGlow 3s ease-in-out infinite'
    },
    footerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 32px'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '48px',
      paddingBottom: '40px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    },
    footerBrand: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    footerLogo: {
      fontSize: '24px',
      fontWeight: 700,
      background: 'linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.5px',
      margin: 0
    },
    footerDescription: {
      color: '#888888',
      fontSize: '14px',
      lineHeight: 1.6,
      maxWidth: '300px',
      margin: 0
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    footerTitle: {
      color: '#ffffff',
      fontSize: '15px',
      fontWeight: 600,
      marginBottom: '4px',
      margin: 0
    },
    footerLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    footerLink: {
      color: '#888888',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'all 0.2s ease',
      width: 'fit-content',
      cursor: 'pointer'
    },
    footerBottom: {
      padding: '24px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    footerCopyright: {
      color: '#666666',
      fontSize: '13px',
      margin: 0
    },
    footerBadges: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    },
    badge: {
      padding: '6px 12px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '6px',
      color: '#888888',
      fontSize: '12px',
      fontWeight: 500,
      transition: 'all 0.2s ease'
    },
    badgePremium: {
      padding: '6px 12px',
      background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
      border: '1px solid rgba(217, 70, 239, 0.3)',
      color: '#d946ef',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: 500,
      transition: 'all 0.2s ease'
    }
  };

  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredBadge, setHoveredBadge] = React.useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
        
        /* Remove opacity animation that causes layout shift */
        .footer-responsive {
          /* Removed fadeInFooter animation */
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        @keyframes borderGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @media (max-width: 1024px) {
          .footer-content-responsive {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 768px) {
          .footer-responsive {
            padding: 32px 0 0 0 !important;
            margin-top: 60px !important;
          }

          .footer-container-responsive {
            padding: 0 20px !important;
          }

          .footer-content-responsive {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding-bottom: 24px !important;
          }

          .footer-bottom-responsive {
            flex-direction: column !important;
            gap: 16px !important;
            padding: 20px 0 !important;
          }

          .footer-badges-responsive {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>

      <footer style={styles.footer} className="footer-responsive">
        <div style={styles.footerBefore}></div>
        <div style={styles.footerContainer} className="footer-container-responsive">
          <div style={styles.footerContent} className="footer-content-responsive">
            <div style={styles.footerBrand}>
              <h3 style={styles.footerLogo}>Chaniya Choli Rental</h3>
              <p style={styles.footerDescription}>
                Premium rental management system for traditional Indian attire. 
                Streamline your business with our elegant solution.
              </p>
            </div>

            <div style={styles.footerSection}>
              <h4 style={styles.footerTitle}>Quick Links</h4>
              <div style={styles.footerLinks}>
                <a 
                  href="/" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'dashboard' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'dashboard' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('dashboard')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Dashboard
                </a>
                <a 
                  href="/bookings" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'bookings' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'bookings' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('bookings')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Bookings
                </a>
                <a 
                  href="/reports" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'reports' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'reports' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('reports')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Reports
                </a>
              </div>
            </div>

            <div style={styles.footerSection}>
              <h4 style={styles.footerTitle}>Support</h4>
              <div style={styles.footerLinks}>
                <a 
                  href="#" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'help' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'help' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('help')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Help Center
                </a>
                <a 
                  href="#" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'docs' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'docs' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('docs')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Documentation
                </a>
                <a 
                  href="#" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'contact' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'contact' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('contact')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div style={styles.footerSection}>
              <h4 style={styles.footerTitle}>Legal</h4>
              <div style={styles.footerLinks}>
                <a 
                  href="#" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'privacy' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'privacy' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('privacy')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'terms' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'terms' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('terms')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  style={{
                    ...styles.footerLink,
                    color: hoveredLink === 'cookie' ? '#d946ef' : '#888888',
                    transform: hoveredLink === 'cookie' ? 'translateX(4px)' : 'translateX(0)'
                  }}
                  onMouseEnter={() => setHoveredLink('cookie')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          <div style={styles.footerBottom} className="footer-bottom-responsive">
            <p style={styles.footerCopyright}>
              © 2025 <strong style={{ color: '#888888', fontWeight: 600 }}>Chaniya Choli Rental</strong>. All rights reserved.
            </p>
            <div style={styles.footerBadges} className="footer-badges-responsive">
              <span 
                style={{
                  ...styles.badgePremium,
                  background: hoveredBadge === 'premium' 
                    ? 'linear-gradient(135deg, rgba(217, 70, 239, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%)'
                    : 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
                  borderColor: hoveredBadge === 'premium' ? 'rgba(217, 70, 239, 0.4)' : 'rgba(217, 70, 239, 0.3)'
                }}
                onMouseEnter={() => setHoveredBadge('premium')}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                Premium Edition
              </span>
              <span 
                style={{
                  ...styles.badge,
                  background: hoveredBadge === 'secure' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
                  borderColor: hoveredBadge === 'secure' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
                  color: hoveredBadge === 'secure' ? '#b0b0b0' : '#888888'
                }}
                onMouseEnter={() => setHoveredBadge('secure')}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                Secure
              </span>
              <span 
                style={{
                  ...styles.badge,
                  background: hoveredBadge === 'cloud' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
                  borderColor: hoveredBadge === 'cloud' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
                  color: hoveredBadge === 'cloud' ? '#b0b0b0' : '#888888'
                }}
                onMouseEnter={() => setHoveredBadge('cloud')}
                onMouseLeave={() => setHoveredBadge(null)}
              >
                Cloud Powered
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
