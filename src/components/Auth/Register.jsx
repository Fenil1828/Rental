// // FILE 12: src/components/Auth/Register.jsx

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { signUp } from '../../services/authService';
// import './Auth.css';

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     if (!fullName || !email || !password || !confirmPassword) {
//       setError('Please fill in all fields');
//       setLoading(false);
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       setLoading(false);
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password must be at least 6 characters');
//       setLoading(false);
//       return;
//     }

//     const { data, error: signUpError } = await signUp(email, password, fullName);

//     if (signUpError) {
//       setError(signUpError);
//       setLoading(false);
//     } else {
//       setSuccess(true);
//       setLoading(false);
//       setTimeout(() => {
//         navigate('/login');
//       }, 2000);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-header">
//           <h1>Chaniya Choli Rental</h1>
//           <h2>Seller Registration</h2>
//         </div>

//         {error && <div className="error-message">{error}</div>}
//         {success && (
//           <div className="success-message">
//             Registration successful! Please check your email to verify your account.
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className="form-group">
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password (min 6 characters)"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               required
//             />
//           </div>

//           <button type="submit" className="btn-primary" disabled={loading}>
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>

//         <div className="auth-footer">
//           <p>Already have an account? <Link to="/login">Login here</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// FILE 12: src/components/Auth/Register.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '../../services/authService';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    const { data, error: signUpError } = await signUp(email, password, fullName);

    if (signUpError) {
      setError(signUpError);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
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
          padding: 40px 38px;
          width: 100%;
          max-width: 440px;
          max-height: 95vh;
          overflow-y: auto;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          animation: cardSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 1;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .auth-card::-webkit-scrollbar {
          display: none;
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
          margin-bottom: 30px;
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
          margin-bottom: 24px;
          font-size: 14px;
          animation: errorShake 0.4s ease;
        }

        @keyframes errorShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }

        /* Success Message */
        .success-message {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-left: 3px solid #10b981;
          color: #5eead4;
          padding: 13px 18px;
          border-radius: 10px;
          margin-bottom: 24px;
          font-size: 14px;
          animation: successSlide 0.5s ease;
        }

        @keyframes successSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Form */
        .auth-form {
          animation: titleFadeIn 0.8s ease 0.4s both;
        }

        .form-group {
          margin-bottom: 18px;
          position: relative;
        }

        .form-group label {
          display: block;
          color: #b5b5b5;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .form-group input {
          width: 100%;
          padding: 13px 16px;
          background: rgba(25, 25, 25, 0.8);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          font-size: 14px;
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
          padding: 14px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 8px;
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
          margin: 20px 0;
          color: #666666;
          font-size: 12px;
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
          padding: 12px;
          background: rgba(20, 20, 20, 0.6);
          color: #cccccc;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          font-family: 'Sora', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-social:hover {
          background: rgba(30, 30, 30, 0.8);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }

        .btn-social svg {
          width: 16px;
          height: 16px;
        }

        /* Footer */
        .auth-footer {
          margin-top: 24px;
          text-align: center;
          animation: titleFadeIn 0.8s ease 0.6s both;
        }

        .auth-footer p {
          color: #888888;
          font-size: 13px;
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

          .form-group {
            margin-bottom: 20px;
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

        .form-group:nth-child(3) {
          animation-delay: 0.7s;
        }

        .form-group:nth-child(4) {
          animation-delay: 0.8s;
        }

        .btn-primary {
          animation: titleFadeIn 0.6s ease 0.9s both;
        }

        .divider {
          animation: titleFadeIn 0.6s ease 1s both;
        }

        .btn-social {
          animation: titleFadeIn 0.6s ease 1.1s both;
        }
      `}</style>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Chaniya Choli Rental</h1>
            <h2>Create Your Account</h2>
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && (
            <div className="success-message">
              Registration successful! Please check your email to verify your account.
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

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
                placeholder="Create a password (min 6 characters)"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Creating Account...' : 'Continue with Registration'}
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
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;