// // // // // FILE 11: src/components/Auth/Login.jsx

// // // // import React, { useState } from 'react';
// // // // import { useNavigate, Link } from 'react-router-dom';
// // // // import { signIn } from '../../services/authService';
// // // // import './Auth.css';

// // // // const Login = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [error, setError] = useState('');
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError('');
// // // //     setLoading(true);

// // // //     if (!email || !password) {
// // // //       setError('Please fill in all fields');
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     const { data, error: signInError } = await signIn(email, password);

// // // //     if (signInError) {
// // // //       setError(signInError);
// // // //       setLoading(false);
// // // //     } else {
// // // //       navigate('/');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="auth-container">
// // // //       <div className="auth-card">
// // // //         <div className="auth-header">
// // // //           <h1>Chaniya Choli Rental</h1>
// // // //           <h2>Seller Login</h2>
// // // //         </div>

// // // //         {error && <div className="error-message">{error}</div>}

// // // //         <form onSubmit={handleSubmit} className="auth-form">
// // // //           <div className="form-group">
// // // //             <label htmlFor="email">Email</label>
// // // //             <input
// // // //               type="email"
// // // //               id="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               placeholder="Enter your email"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="form-group">
// // // //             <label htmlFor="password">Password</label>
// // // //             <input
// // // //               type="password"
// // // //               id="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               placeholder="Enter your password"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <button type="submit" className="btn-primary" disabled={loading}>
// // // //             {loading ? 'Logging in...' : 'Login'}
// // // //           </button>
// // // //         </form>

// // // //         <div className="auth-footer">
// // // //           <p>Don't have an account? <Link to="/register">Register here</Link></p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;

// // // // FILE 11: src/components/Auth/Login.jsx

// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import { signIn } from '../../services/authService';

// // // const Login = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError('');
// // //     setLoading(true);

// // //     if (!email || !password) {
// // //       setError('Please fill in all fields');
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     const { data, error: signInError } = await signIn(email, password);

// // //     if (signInError) {
// // //       setError(signInError);
// // //       setLoading(false);
// // //     } else {
// // //       navigate('/');
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <style>{`
// // //         /* Auth.css - Chaniya Choli Inspired Theme */

// // //         :root {
// // //           --primary-color: #d946ef;
// // //           --primary-dark: #a21caf;
// // //           --secondary-color: #f97316;
// // //           --accent-gold: #fbbf24;
// // //           --bg-gradient-start: #fdf4ff;
// // //           --bg-gradient-end: #fef3c7;
// // //           --text-dark: #1f2937;
// // //           --text-light: #6b7280;
// // //           --error-color: #ef4444;
// // //           --success-color: #10b981;
// // //           --white: #ffffff;
// // //           --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
// // //           --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
// // //           --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
// // //           --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
// // //         }

// // //         * {
// // //           margin: 0;
// // //           padding: 0;
// // //           box-sizing: border-box;
// // //         }

// // //         body {
// // //           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// // //           overflow-x: hidden;
// // //         }

// // //         /* Animated Background */
// // //         .auth-container {
// // //           min-height: 100vh;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           padding: 20px;
// // //           position: relative;
// // //           background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
// // //           overflow: hidden;
// // //         }

// // //         /* Decorative Background Patterns */
// // //         .auth-container::before {
// // //           content: '';
// // //           position: absolute;
// // //           top: -50%;
// // //           right: -20%;
// // //           width: 600px;
// // //           height: 600px;
// // //           background: radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%);
// // //           border-radius: 50%;
// // //           animation: float 20s ease-in-out infinite;
// // //           z-index: 0;
// // //         }

// // //         .auth-container::after {
// // //           content: '';
// // //           position: absolute;
// // //           bottom: -50%;
// // //           left: -20%;
// // //           width: 500px;
// // //           height: 500px;
// // //           background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
// // //           border-radius: 50%;
// // //           animation: float 15s ease-in-out infinite reverse;
// // //           z-index: 0;
// // //         }

// // //         @keyframes float {
// // //           0%, 100% {
// // //             transform: translate(0, 0) rotate(0deg);
// // //           }
// // //           33% {
// // //             transform: translate(30px, -30px) rotate(120deg);
// // //           }
// // //           66% {
// // //             transform: translate(-20px, 20px) rotate(240deg);
// // //           }
// // //         }

// // //         /* Auth Card */
// // //         .auth-card {
// // //           position: relative;
// // //           z-index: 1;
// // //           background: var(--white);
// // //           border-radius: 24px;
// // //           padding: 48px 40px;
// // //           width: 100%;
// // //           max-width: 440px;
// // //           box-shadow: var(--shadow-xl);
// // //           backdrop-filter: blur(10px);
// // //           border: 1px solid rgba(255, 255, 255, 0.8);
// // //           animation: slideUp 0.6s ease-out;
// // //           overflow: hidden;
// // //         }

// // //         /* Decorative top border */
// // //         .auth-card::before {
// // //           content: '';
// // //           position: absolute;
// // //           top: 0;
// // //           left: 0;
// // //           right: 0;
// // //           height: 6px;
// // //           background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-gold) 100%);
// // //           animation: shimmer 3s ease-in-out infinite;
// // //         }

// // //         @keyframes shimmer {
// // //           0%, 100% {
// // //             opacity: 1;
// // //           }
// // //           50% {
// // //             opacity: 0.7;
// // //           }
// // //         }

// // //         @keyframes slideUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(30px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         /* Header */
// // //         .auth-header {
// // //           text-align: center;
// // //           margin-bottom: 36px;
// // //           position: relative;
// // //         }

// // //         .auth-header h1 {
// // //           font-size: 28px;
// // //           font-weight: 700;
// // //           background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //           margin-bottom: 8px;
// // //           letter-spacing: -0.5px;
// // //           animation: fadeIn 0.8s ease-out 0.2s both;
// // //         }

// // //         .auth-header h2 {
// // //           font-size: 16px;
// // //           color: var(--text-light);
// // //           font-weight: 500;
// // //           animation: fadeIn 0.8s ease-out 0.4s both;
// // //         }

// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(10px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         /* Error Message */
// // //         .error-message {
// // //           background: rgba(239, 68, 68, 0.1);
// // //           border-left: 4px solid var(--error-color);
// // //           color: var(--error-color);
// // //           padding: 12px 16px;
// // //           border-radius: 8px;
// // //           margin-bottom: 24px;
// // //           font-size: 14px;
// // //           animation: shake 0.5s ease-in-out;
// // //         }

// // //         @keyframes shake {
// // //           0%, 100% { transform: translateX(0); }
// // //           25% { transform: translateX(-10px); }
// // //           75% { transform: translateX(10px); }
// // //         }

// // //         /* Form */
// // //         .auth-form {
// // //           animation: fadeIn 0.8s ease-out 0.6s both;
// // //         }

// // //         .form-group {
// // //           margin-bottom: 24px;
// // //         }

// // //         .form-group label {
// // //           display: block;
// // //           margin-bottom: 8px;
// // //           color: var(--text-dark);
// // //           font-weight: 600;
// // //           font-size: 14px;
// // //           letter-spacing: 0.3px;
// // //         }

// // //         .form-group input {
// // //           width: 100%;
// // //           padding: 14px 16px;
// // //           border: 2px solid #e5e7eb;
// // //           border-radius: 12px;
// // //           font-size: 15px;
// // //           transition: all 0.3s ease;
// // //           background: #f9fafb;
// // //           color: var(--text-dark);
// // //         }

// // //         .form-group input:focus {
// // //           outline: none;
// // //           border-color: var(--primary-color);
// // //           background: var(--white);
// // //           box-shadow: 0 0 0 4px rgba(217, 70, 239, 0.1);
// // //           transform: translateY(-2px);
// // //         }

// // //         .form-group input::placeholder {
// // //           color: #9ca3af;
// // //         }

// // //         /* Button */
// // //         .btn-primary {
// // //           width: 100%;
// // //           padding: 16px;
// // //           background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
// // //           color: var(--white);
// // //           border: none;
// // //           border-radius: 12px;
// // //           font-size: 16px;
// // //           font-weight: 600;
// // //           cursor: pointer;
// // //           transition: all 0.3s ease;
// // //           margin-top: 8px;
// // //           position: relative;
// // //           overflow: hidden;
// // //           box-shadow: 0 4px 15px rgba(217, 70, 239, 0.3);
// // //         }

// // //         .btn-primary::before {
// // //           content: '';
// // //           position: absolute;
// // //           top: 0;
// // //           left: -100%;
// // //           width: 100%;
// // //           height: 100%;
// // //           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
// // //           transition: left 0.5s ease;
// // //         }

// // //         .btn-primary:hover::before {
// // //           left: 100%;
// // //         }

// // //         .btn-primary:hover {
// // //           transform: translateY(-2px);
// // //           box-shadow: 0 6px 20px rgba(217, 70, 239, 0.4);
// // //         }

// // //         .btn-primary:active {
// // //           transform: translateY(0);
// // //         }

// // //         .btn-primary:disabled {
// // //           opacity: 0.7;
// // //           cursor: not-allowed;
// // //           transform: none;
// // //         }

// // //         /* Footer */
// // //         .auth-footer {
// // //           margin-top: 28px;
// // //           text-align: center;
// // //           animation: fadeIn 0.8s ease-out 0.8s both;
// // //         }

// // //         .auth-footer p {
// // //           color: var(--text-light);
// // //           font-size: 14px;
// // //         }

// // //         .auth-footer a {
// // //           color: var(--primary-color);
// // //           text-decoration: none;
// // //           font-weight: 600;
// // //           position: relative;
// // //           transition: color 0.3s ease;
// // //         }

// // //         .auth-footer a::after {
// // //           content: '';
// // //           position: absolute;
// // //           bottom: -2px;
// // //           left: 0;
// // //           width: 0;
// // //           height: 2px;
// // //           background: var(--primary-color);
// // //           transition: width 0.3s ease;
// // //         }

// // //         .auth-footer a:hover {
// // //           color: var(--primary-dark);
// // //         }

// // //         .auth-footer a:hover::after {
// // //           width: 100%;
// // //         }

// // //         /* Responsive Design */
// // //         @media (max-width: 480px) {
// // //           .auth-card {
// // //             padding: 36px 24px;
// // //             border-radius: 20px;
// // //           }

// // //           .auth-header h1 {
// // //             font-size: 24px;
// // //           }

// // //           .auth-header h2 {
// // //             font-size: 14px;
// // //           }

// // //           .form-group input {
// // //             padding: 12px 14px;
// // //             font-size: 14px;
// // //           }

// // //           .btn-primary {
// // //             padding: 14px;
// // //             font-size: 15px;
// // //           }
// // //         }

// // //         /* Loading state animation */
// // //         @keyframes spin {
// // //           to {
// // //             transform: rotate(360deg);
// // //           }
// // //         }

// // //         .btn-primary:disabled::after {
// // //           content: '';
// // //           position: absolute;
// // //           width: 16px;
// // //           height: 16px;
// // //           top: 50%;
// // //           left: 50%;
// // //           margin-left: -8px;
// // //           margin-top: -8px;
// // //           border: 2px solid rgba(255, 255, 255, 0.3);
// // //           border-top-color: white;
// // //           border-radius: 50%;
// // //           animation: spin 0.6s linear infinite;
// // //         }
// // //       `}</style>

// // //       <div className="auth-container">
// // //         <div className="auth-card">
// // //           <div className="auth-header">
// // //             <h1>Chaniya Choli Rental</h1>
// // //             <h2>Seller Login</h2>
// // //           </div>

// // //           {error && <div className="error-message">{error}</div>}

// // //           <form onSubmit={handleSubmit} className="auth-form">
// // //             <div className="form-group">
// // //               <label htmlFor="email">Email</label>
// // //               <input
// // //                 type="email"
// // //                 id="email"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //                 placeholder="Enter your email"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="form-group">
// // //               <label htmlFor="password">Password</label>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 placeholder="Enter your password"
// // //                 required
// // //               />
// // //             </div>

// // //             <button type="submit" className="btn-primary" disabled={loading}>
// // //               {loading ? 'Logging in...' : 'Login'}
// // //             </button>
// // //           </form>

// // //           <div className="auth-footer">
// // //             <p>Don't have an account? <Link to="/register">Register here</Link></p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Login;

// // // FILE 11: src/components/Auth/Login.jsx

// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { signIn } from '../../services/authService';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setLoading(true);

// //     if (!email || !password) {
// //       setError('Please fill in all fields');
// //       setLoading(false);
// //       return;
// //     }

// //     const { data, error: signInError } = await signIn(email, password);

// //     if (signInError) {
// //       setError(signInError);
// //       setLoading(false);
// //     } else {
// //       navigate('/');
// //     }
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         /* ULTRA PREMIUM MINIMALIST DARK MODE - EXPENSIVE LUXURY */

// //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

// //         :root {
// //           --accent-gold: #d4af37;
// //           --accent-silver: #c0c0c0;
// //           --dark-primary: #0f0f0f;
// //           --dark-secondary: #1a1a1a;
// //           --dark-tertiary: #2a2a2a;
// //           --gray-100: #f5f5f5;
// //           --gray-200: #e5e5e5;
// //           --gray-300: #d4d4d4;
// //           --gray-400: #a3a3a3;
// //           --gray-500: #737373;
// //           --gray-600: #525252;
// //           --gray-700: #404040;
// //           --gray-800: #262626;
// //           --gray-900: #171717;
// //           --white: #ffffff;
// //           --error: #ff4444;
// //           --success: #00c853;
// //         }

// //         * {
// //           margin: 0;
// //           padding: 0;
// //           box-sizing: border-box;
// //         }

// //         body {
// //           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
// //           -webkit-font-smoothing: antialiased;
// //           -moz-osx-font-smoothing: grayscale;
// //           overflow-x: hidden;
// //         }

// //         /* SOPHISTICATED ANIMATED BACKGROUND */
// //         .auth-container {
// //           min-height: 100vh;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           padding: 24px;
// //           position: relative;
// //           background: linear-gradient(135deg, var(--dark-primary) 0%, var(--gray-900) 50%, var(--dark-primary) 100%);
// //           overflow: hidden;
// //         }

// //         /* SUBTLE GRID PATTERN */
// //         .auth-container::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           bottom: 0;
// //           background-image: 
// //             linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
// //             linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
// //           background-size: 60px 60px;
// //           animation: gridSlide 30s linear infinite;
// //           opacity: 0.4;
// //         }

// //         @keyframes gridSlide {
// //           0% {
// //             transform: translateY(0);
// //           }
// //           100% {
// //             transform: translateY(60px);
// //           }
// //         }

// //         /* ELEGANT FLOATING GRADIENT ORB */
// //         .auth-container::after {
// //           content: '';
// //           position: absolute;
// //           top: -10%;
// //           right: -5%;
// //           width: 500px;
// //           height: 500px;
// //           background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
// //           border-radius: 50%;
// //           filter: blur(80px);
// //           animation: smoothFloat 20s ease-in-out infinite;
// //         }

// //         @keyframes smoothFloat {
// //           0%, 100% {
// //             transform: translate(0, 0) scale(1);
// //           }
// //           50% {
// //             transform: translate(-30px, 30px) scale(1.1);
// //           }
// //         }

// //         /* PREMIUM MINIMALIST CARD */
// //         .auth-card {
// //           position: relative;
// //           z-index: 1;
// //           background: rgba(26, 26, 26, 0.7);
// //           backdrop-filter: blur(40px) saturate(150%);
// //           border-radius: 24px;
// //           padding: 56px 48px;
// //           width: 100%;
// //           max-width: 440px;
// //           border: 1px solid rgba(255, 255, 255, 0.08);
// //           box-shadow: 
// //             0 20px 60px rgba(0, 0, 0, 0.5),
// //             0 0 1px rgba(255, 255, 255, 0.1) inset;
// //           animation: cardFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1);
// //         }

// //         @keyframes cardFadeIn {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         /* SUBTLE TOP ACCENT LINE */
// //         .auth-card::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           right: 0;
// //           height: 1px;
// //           background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
// //           opacity: 0.6;
// //         }

// //         /* ELEGANT HEADER */
// //         .auth-header {
// //           text-align: center;
// //           margin-bottom: 48px;
// //         }

// //         .auth-header h1 {
// //           font-size: 28px;
// //           font-weight: 300;
// //           color: var(--white);
// //           margin-bottom: 8px;
// //           letter-spacing: 0.5px;
// //           animation: textFadeIn 1s ease-out 0.2s both;
// //         }

// //         .auth-header h2 {
// //           font-size: 13px;
// //           color: var(--gray-400);
// //           font-weight: 400;
// //           letter-spacing: 2px;
// //           text-transform: uppercase;
// //           animation: textFadeIn 1s ease-out 0.4s both;
// //         }

// //         @keyframes textFadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         /* REFINED ERROR MESSAGE */
// //         .error-message {
// //           background: rgba(255, 68, 68, 0.1);
// //           border-left: 2px solid var(--error);
// //           color: #ff6b6b;
// //           padding: 14px 18px;
// //           border-radius: 8px;
// //           margin-bottom: 28px;
// //           font-size: 13px;
// //           font-weight: 400;
// //           animation: errorSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1);
// //         }

// //         @keyframes errorSlide {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         /* SOPHISTICATED FORM */
// //         .auth-form {
// //           animation: textFadeIn 1s ease-out 0.6s both;
// //         }

// //         .form-group {
// //           margin-bottom: 28px;
// //           position: relative;
// //         }

// //         .form-group label {
// //           display: block;
// //           margin-bottom: 12px;
// //           color: var(--gray-300);
// //           font-weight: 500;
// //           font-size: 13px;
// //           letter-spacing: 0.5px;
// //         }

// //         .form-group input {
// //           width: 100%;
// //           padding: 16px 18px;
// //           background: var(--dark-secondary);
// //           border: 1px solid rgba(255, 255, 255, 0.08);
// //           border-radius: 12px;
// //           font-size: 15px;
// //           font-family: 'Inter', sans-serif;
// //           font-weight: 400;
// //           color: var(--white);
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         .form-group input::placeholder {
// //           color: var(--gray-600);
// //           font-weight: 300;
// //         }

// //         .form-group input:focus {
// //           outline: none;
// //           background: rgba(26, 26, 26, 0.8);
// //           border-color: rgba(212, 175, 55, 0.4);
// //           box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.08);
// //         }

// //         .form-group input:hover:not(:focus) {
// //           border-color: rgba(255, 255, 255, 0.12);
// //         }

// //         /* LUXURY BUTTON */
// //         .btn-primary {
// //           width: 100%;
// //           padding: 16px;
// //           background: linear-gradient(135deg, var(--gray-700) 0%, var(--gray-800) 100%);
// //           color: var(--white);
// //           border: 1px solid rgba(255, 255, 255, 0.1);
// //           border-radius: 12px;
// //           font-size: 15px;
// //           font-weight: 500;
// //           font-family: 'Inter', sans-serif;
// //           letter-spacing: 0.5px;
// //           cursor: pointer;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //           margin-top: 8px;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .btn-primary::before {
// //           content: '';
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           background: linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-silver) 100%);
// //           opacity: 0;
// //           transition: opacity 0.3s ease;
// //         }

// //         .btn-primary:hover::before {
// //           opacity: 0.15;
// //         }

// //         .btn-primary:hover {
// //           transform: translateY(-1px);
// //           box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
// //           border-color: rgba(212, 175, 55, 0.3);
// //         }

// //         .btn-primary:active {
// //           transform: translateY(0);
// //         }

// //         .btn-primary:disabled {
// //           opacity: 0.5;
// //           cursor: not-allowed;
// //           transform: none;
// //         }

// //         .btn-primary span {
// //           position: relative;
// //           z-index: 1;
// //         }

// //         /* MINIMAL FOOTER */
// //         .auth-footer {
// //           margin-top: 32px;
// //           text-align: center;
// //           animation: textFadeIn 1s ease-out 0.8s both;
// //         }

// //         .auth-footer p {
// //           color: var(--gray-500);
// //           font-size: 13px;
// //           font-weight: 400;
// //         }

// //         .auth-footer a {
// //           color: var(--gray-300);
// //           text-decoration: none;
// //           font-weight: 500;
// //           position: relative;
// //           transition: color 0.3s ease;
// //         }

// //         .auth-footer a::after {
// //           content: '';
// //           position: absolute;
// //           bottom: -2px;
// //           left: 0;
// //           width: 0;
// //           height: 1px;
// //           background: var(--accent-gold);
// //           transition: width 0.3s ease;
// //         }

// //         .auth-footer a:hover {
// //           color: var(--white);
// //         }

// //         .auth-footer a:hover::after {
// //           width: 100%;
// //         }

// //         /* ELEGANT LOADING SPINNER */
// //         @keyframes spin {
// //           to {
// //             transform: rotate(360deg);
// //           }
// //         }

// //         .btn-primary:disabled::after {
// //           content: '';
// //           position: absolute;
// //           width: 16px;
// //           height: 16px;
// //           top: 50%;
// //           left: 50%;
// //           margin-left: -8px;
// //           margin-top: -8px;
// //           border: 2px solid rgba(255, 255, 255, 0.2);
// //           border-top-color: white;
// //           border-radius: 50%;
// //           animation: spin 0.6s linear infinite;
// //           z-index: 2;
// //         }

// //         /* RESPONSIVE REFINEMENT */
// //         @media (max-width: 480px) {
// //           .auth-card {
// //             padding: 40px 32px;
// //             border-radius: 20px;
// //           }

// //           .auth-header h1 {
// //             font-size: 24px;
// //           }

// //           .auth-header h2 {
// //             font-size: 11px;
// //             letter-spacing: 1.5px;
// //           }

// //           .form-group {
// //             margin-bottom: 24px;
// //           }

// //           .form-group input {
// //             padding: 14px 16px;
// //             font-size: 14px;
// //           }

// //           .btn-primary {
// //             padding: 14px;
// //             font-size: 14px;
// //           }
// //         }

// //         /* MICRO INTERACTIONS */
// //         .form-group input:focus + label {
// //           color: var(--accent-gold);
// //         }

// //         /* SMOOTH TRANSITIONS */
// //         * {
// //           transition: color 0.2s ease, background-color 0.2s ease;
// //         }

// //         input, button {
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }
// //       `}</style>

// //       <div className="auth-container">
// //         <div className="auth-card">
// //           <div className="auth-header">
// //             <h1>Chaniya Choli Rental</h1>
// //             <h2>Admin Portal</h2>
// //           </div>

// //           {error && <div className="error-message">{error}</div>}

// //           <form onSubmit={handleSubmit} className="auth-form">
// //             <div className="form-group">
// //               <label htmlFor="email">Email</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Enter your email"
// //                 required
// //               />
// //             </div>

// //             <div className="form-group">
// //               <label htmlFor="password">Password</label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 placeholder="Enter your password"
// //                 required
// //               />
// //             </div>

// //             <button type="submit" className="btn-primary" disabled={loading}>
// //               <span>{loading ? 'Signing in...' : 'Sign In'}</span>
// //             </button>
// //           </form>

// //           <div className="auth-footer">
// //             <p>Don't have an account? <Link to="/register">Register</Link></p>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Login;


// // FILE 11: src/components/Auth/Login.jsx

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { signIn } from '../../services/authService';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!email || !password) {
//       setError('Please fill in all fields');
//       setLoading(false);
//       return;
//     }

//     const { data, error: signInError } = await signIn(email, password);

//     if (signInError) {
//       setError(signInError);
//       setLoading(false);
//     } else {
//       navigate('/');
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Inter', sans-serif;
//           -webkit-font-smoothing: antialiased;
//         }

//         .auth-container {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//           background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
//           position: relative;
//           overflow: hidden;
//         }

//         .auth-container::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: 
//             linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
//           background-size: 50px 50px;
//           animation: gridMove 25s linear infinite;
//         }

//         @keyframes gridMove {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(50px); }
//         }

//         .auth-card {
//           position: relative;
//           background: rgba(20, 20, 20, 0.6);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.06);
//           border-radius: 16px;
//           padding: 48px 40px;
//           width: 100%;
//           max-width: 420px;
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
//           animation: fadeIn 0.6s ease;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .auth-header {
//           text-align: center;
//           margin-bottom: 40px;
//         }

//         .auth-header h1 {
//           font-size: 26px;
//           font-weight: 600;
//           color: #ffffff;
//           margin-bottom: 6px;
//           letter-spacing: -0.5px;
//         }

//         .auth-header h2 {
//           font-size: 14px;
//           color: #888888;
//           font-weight: 400;
//         }

//         .error-message {
//           background: rgba(239, 68, 68, 0.1);
//           border-left: 3px solid #ef4444;
//           color: #ff6b6b;
//           padding: 12px 16px;
//           border-radius: 8px;
//           margin-bottom: 24px;
//           font-size: 14px;
//         }

//         .auth-form {
//           display: flex;
//           flex-direction: column;
//           gap: 24px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .form-group label {
//           color: #b0b0b0;
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .form-group input {
//           width: 100%;
//           padding: 14px 16px;
//           background: #1a1a1a;
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 10px;
//           font-size: 15px;
//           color: #ffffff;
//           transition: all 0.2s ease;
//         }

//         .form-group input::placeholder {
//           color: #555555;
//         }

//         .form-group input:focus {
//           outline: none;
//           border-color: rgba(255, 255, 255, 0.2);
//           background: #202020;
//         }

//         .btn-primary {
//           width: 100%;
//           padding: 14px;
//           background: #2a2a2a;
//           color: #ffffff;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 10px;
//           font-size: 15px;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           margin-top: 8px;
//         }

//         .btn-primary:hover {
//           background: #333333;
//           border-color: rgba(255, 255, 255, 0.15);
//           transform: translateY(-1px);
//         }

//         .btn-primary:active {
//           transform: translateY(0);
//         }

//         .btn-primary:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }

//         .auth-footer {
//           margin-top: 28px;
//           text-align: center;
//         }

//         .auth-footer p {
//           color: #888888;
//           font-size: 14px;
//         }

//         .auth-footer a {
//           color: #cccccc;
//           text-decoration: none;
//           font-weight: 500;
//           transition: color 0.2s ease;
//         }

//         .auth-footer a:hover {
//           color: #ffffff;
//         }

//         @media (max-width: 480px) {
//           .auth-card {
//             padding: 36px 28px;
//           }

//           .auth-header h1 {
//             font-size: 22px;
//           }
//         }
//       `}</style>

//       <div className="auth-container">
//         <div className="auth-card">
//           <div className="auth-header">
//             <h1>Chaniya Choli Rental</h1>
//             <h2>Admin Login</h2>
//           </div>

//           {error && <div className="error-message">{error}</div>}

//           <form onSubmit={handleSubmit} className="auth-form">
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             <button type="submit" className="btn-primary" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>

//           <div className="auth-footer">
//             <p>Don't have an account? <Link to="/register">Register</Link></p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

// FILE 11: src/components/Auth/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signIn } from '../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const { data, error: signInError } = await signIn(email, password);

    if (signInError) {
      setError(signInError);
      setLoading(false);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Sora', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #050505 100%);
          position: relative;
          overflow: hidden;
        }

        /* Animated Grid Background */
        .auth-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridMove 20s linear infinite;
          z-index: 0;
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }

        /* Floating Glow Orbs */
        .auth-container::after {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(100, 100, 100, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: float 18s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-50px, 50px);
          }
        }

        /* Premium Card */
        .auth-card {
          position: relative;
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 50px 42px;
          width: 100%;
          max-width: 440px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          animation: cardSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 1;
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Card Glow Effect */
        .auth-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Header */
        .auth-header {
          text-align: center;
          margin-bottom: 42px;
        }

        .auth-header h1 {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
          animation: titleFadeIn 0.8s ease 0.2s both;
          text-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
        }

        .auth-header h2 {
          font-size: 14px;
          color: #999999;
          font-weight: 400;
          letter-spacing: 0.5px;
          animation: titleFadeIn 0.8s ease 0.3s both;
        }

        @keyframes titleFadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Error Message */
        .error-message {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-left: 3px solid #ef4444;
          color: #ff7b7b;
          padding: 13px 18px;
          border-radius: 10px;
          margin-bottom: 26px;
          font-size: 14px;
          animation: errorShake 0.4s ease;
        }

        @keyframes errorShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }

        /* Form */
        .auth-form {
          animation: titleFadeIn 0.8s ease 0.4s both;
        }

        .form-group {
          margin-bottom: 24px;
          position: relative;
        }

        .form-group label {
          display: block;
          color: #b5b5b5;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 10px;
          transition: color 0.3s ease;
        }

        .form-group input {
          width: 100%;
          padding: 15px 18px;
          background: rgba(25, 25, 25, 0.8);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          font-size: 15px;
          font-family: 'Sora', sans-serif;
          color: #ffffff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-group input::placeholder {
          color: #606060;
        }

        .form-group input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(30, 30, 30, 0.9);
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.03);
          transform: translateY(-2px);
        }

        .form-group input:focus + label {
          color: #ffffff;
        }

        /* Premium Continue Button */
        .btn-primary {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 12px;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #252525 0%, #353535 100%);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 28px 0;
          color: #666666;
          font-size: 13px;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .divider span {
          padding: 0 16px;
          font-weight: 500;
        }

        /* Social Login Button */
        .btn-social {
          width: 100%;
          padding: 14px;
          background: rgba(20, 20, 20, 0.6);
          color: #cccccc;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .btn-social:hover {
          background: rgba(30, 30, 30, 0.8);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }

        .btn-social svg {
          width: 18px;
          height: 18px;
        }

        /* Footer */
        .auth-footer {
          margin-top: 32px;
          text-align: center;
          animation: titleFadeIn 0.8s ease 0.6s both;
        }

        .auth-footer p {
          color: #888888;
          font-size: 14px;
        }

        .auth-footer a {
          color: #dddddd;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          transition: color 0.3s ease;
        }

        .auth-footer a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #ffffff;
          transition: width 0.3s ease;
        }

        .auth-footer a:hover {
          color: #ffffff;
        }

        .auth-footer a:hover::after {
          width: 100%;
        }

        /* Loading Spinner */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .btn-primary:disabled::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: 50%;
          left: 50%;
          margin-left: -8px;
          margin-top: -8px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .auth-card {
            padding: 40px 32px;
            border-radius: 18px;
          }

          .auth-header h1 {
            font-size: 24px;
          }

          .form-group input {
            padding: 13px 16px;
          }

          .btn-primary {
            padding: 14px;
          }
        }

        /* Micro animations */
        .form-group {
          animation: titleFadeIn 0.6s ease both;
        }

        .form-group:nth-child(1) {
          animation-delay: 0.5s;
        }

        .form-group:nth-child(2) {
          animation-delay: 0.6s;
        }

        .btn-primary {
          animation: titleFadeIn 0.6s ease 0.7s both;
        }

        .divider {
          animation: titleFadeIn 0.6s ease 0.8s both;
        }

        .btn-social {
          animation: titleFadeIn 0.6s ease 0.9s both;
        }
      `}</style>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Chaniya Choli Rental</h1>
            <h2>Welcome Back, Admin</h2>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Signing in...' : 'Continue with Login'}
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="btn-social">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Create Account</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;