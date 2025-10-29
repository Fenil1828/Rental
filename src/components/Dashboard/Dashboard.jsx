// // // FILE 18: src/components/Dashboard/Dashboard.jsx

// // import React, { useState } from 'react';
// // import { Plus } from 'lucide-react';
// // import { useItems } from '../../hooks/useItems';
// // import { deleteItem } from '../../services/itemService';
// // import ItemList from './ItemList';
// // import ItemForm from './ItemForm';
// // import BookingForm from '../Booking/BookingForm';
// // import ConfirmModal from '../common/ConfirmModal'; // 🔥 NEW IMPORT
// // import './Dashboard.css';

// // const Dashboard = () => {
// //   const { items, loading, refreshItems } = useItems();
// //   const [showItemForm, setShowItemForm] = useState(false);
// //   const [showBookingForm, setShowBookingForm] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);
// //   const [selectedItemForBooking, setSelectedItemForBooking] = useState(null);
  
// //   // 🔥 NEW: Confirmation modal state
// //   const [confirmModal, setConfirmModal] = useState({
// //     isOpen: false,
// //     itemId: null,
// //     itemName: ''
// //   });

// //   const handleAddItem = () => {
// //     setSelectedItem(null);
// //     setShowItemForm(true);
// //   };

// //   const handleEditItem = (item) => {
// //     setSelectedItem(item);
// //     setShowItemForm(true);
// //   };

// //   // 🔥 NEW: Open confirmation modal
// //   const handleDeleteItem = (item) => {
// //     setConfirmModal({
// //       isOpen: true,
// //       itemId: item.id,
// //       itemName: item.item_name
// //     });
// //   };

// //   // 🔥 NEW: Confirm deletion
// //   const confirmDeleteItem = async () => {
// //     const { error } = await deleteItem(confirmModal.itemId);
// //     if (!error) {
// //       refreshItems();
// //     } else {
// //       alert('Error deleting item: ' + error);
// //     }
// //     setConfirmModal({ isOpen: false, itemId: null, itemName: '' });
// //   };

// //   // 🔥 NEW: Cancel deletion
// //   const cancelDelete = () => {
// //     setConfirmModal({ isOpen: false, itemId: null, itemName: '' });
// //   };

// //   const handleBookItem = (item) => {
// //     setSelectedItemForBooking(item);
// //     setShowBookingForm(true);
// //   };

// //   const handleFormSuccess = () => {
// //     refreshItems();
// //   };

// //   if (loading) {
// //     return (
// //       <div className="dashboard-container">
// //         <div className="loading-state">Loading items...</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="dashboard-container">
// //       <div className="dashboard-header">
// //         <div>
// //           <h1>My Items</h1>
// //           <p>Manage your Chaniya Choli collection</p>
// //         </div>
// //         <button className="btn-primary" onClick={handleAddItem}>
// //           <Plus size={20} />
// //           Add New Item
// //         </button>
// //       </div>

// //       <div className="dashboard-stats">
// //         <div className="stat-card">
// //           <h3>Total Items</h3>
// //           <p className="stat-value">{items.length}</p>
// //         </div>
// //         <div className="stat-card">
// //           <h3>Available</h3>
// //           <p className="stat-value">{items.length}</p>
// //         </div>
// //       </div>

// //       <ItemList
// //         items={items}
// //         onEdit={handleEditItem}
// //         onDelete={handleDeleteItem}  // Pass item object instead of just ID
// //         onBook={handleBookItem}
// //       />

// //       {showItemForm && (
// //         <ItemForm
// //           item={selectedItem}
// //           onClose={() => setShowItemForm(false)}
// //           onSuccess={handleFormSuccess}
// //         />
// //       )}

// //       {showBookingForm && (
// //         <BookingForm
// //           item={selectedItemForBooking}
// //           onClose={() => setShowBookingForm(false)}
// //           onSuccess={() => {
// //             setShowBookingForm(false);
// //             refreshItems();
// //           }}
// //         />
// //       )}

// //       {/* 🔥 NEW: Custom Confirmation Modal */}
// //       <ConfirmModal
// //         isOpen={confirmModal.isOpen}
// //         onClose={cancelDelete}
// //         onConfirm={confirmDeleteItem}
// //         title="Delete Item"
// //         message={`Are you sure you want to delete "${confirmModal.itemName}"? This action cannot be undone.`}
// //         confirmText="Delete"
// //         cancelText="Cancel"
// //         type="danger"
// //       />
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // FILE 18: src/components/Dashboard/Dashboard.jsx (INCREDIBLE UPGRADE)

// import React, { useState, useEffect, useRef } from 'react';
// import { Plus, Sparkles } from 'lucide-react';
// import { useItems } from '../../hooks/useItems';
// import { deleteItem } from '../../services/itemService';
// import ItemList from './ItemList';
// import ItemForm from './ItemForm';
// import BookingForm from '../Booking/BookingForm';
// import ConfirmModal from '../common/ConfirmModal';
// import './Dashboard.css';

// // ——————————————————————————————————————
// // NEW: Particle System (Canvas-based, subtle magic dust)
// // ——————————————————————————————————————
// const ParticleBackground = () => {
//   const canvasRef = useRef(null);
//   const particles = useRef([]);
//   const animationId = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // Create particles
//     const createParticles = () => {
//       for (let i = 0; i < 80; i++) {
//         particles.current.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.5,
//           vy: (Math.random() - 0.5) * 0.5,
//           radius: Math.random() * 2 + 1,
//           opacity: Math.random() * 0.5 + 0.2,
//           color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)` // Purple-blue sparkle
//         });
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.current.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
//         p.opacity = 0.95 * p.opacity; // Gentle fade

//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

//         if (p.opacity < 0.1) {
//           p.x = Math.random() * canvas.width;
//           p.y = Math.random() * canvas.height;
//           p.opacity = Math.random() * 0.5 + 0.2;
//         }

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.globalAlpha = p.opacity;
//         ctx.fill();
//       });

//       ctx.globalAlpha = 1;
//       animationId.current = requestAnimationFrame(animate);
//     };

//     createParticles();
//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationId.current);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="particle-canvas" />;
// };

// // ——————————————————————————————————————
// // NEW: Tilt Card Wrapper (3D tilt on hover)
// // ——————————————————————————————————————
// const TiltCard = ({ children, className = '' }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     const handleMouseMove = (e) => {
//       const rect = card.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
//       const rotateX = (y - centerY) / 10;
//       const rotateY = (centerX - x) / 10;

//       card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
//     };

//     const handleMouseLeave = () => {
//       card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
//     };

//     card.addEventListener('mousemove', handleMouseMove);
//     card.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       card.removeEventListener('mousemove', handleMouseMove);
//       card.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return <div ref={cardRef} className={`tilt-card ${className}`}>{children}</div>;
// };

// // ——————————————————————————————————————
// // NEW: Animated Counter (for stats)
// // ——————————————————————————————————————
// const AnimatedCounter = ({ value, label }) => {
//   const [count, setCount] = useState(0);
//   const targetRef = useRef(value);

//   useEffect(() => {
//     targetRef.current = value;
//   }, [value]);

//   useEffect(() => {
//     const duration = 2000;
//     const start = Date.now();
//     const timer = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const progress = Math.min(elapsed / duration, 1);
//       const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
//       setCount(Math.floor(targetRef.current * easeProgress));
//       if (progress >= 1) clearInterval(timer);
//     }, 16);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="stat-card">
//       <h3>{label}</h3>
//       <p className="stat-value">{count.toLocaleString()}</p>
//     </div>
//   );
// };

// // ——————————————————————————————————————
// // ENHANCED: Floating Ornament (now with trail effect)
// // ——————————————————————————————————————
// const FloatingOrnament = () => {
//   const ref = useRef(null);
//   const trails = useRef([]);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const handleMouse = (e) => {
//       const rect = el.getBoundingClientRect();
//       const cx = rect.left + rect.width / 2;
//       const cy = rect.top + rect.height / 2;
//       const dx = (e.clientX - cx) / window.innerWidth;
//       const dy = (e.clientY - cy) / window.innerHeight;

//       el.style.transform = `translate(${dx * 40}px, ${dy * 40}px) rotate(${dx * 20}deg) scale(1.1)`;

//       // Add trail particle
//       trails.current.push({ x: e.clientX, y: e.clientY, life: 1 });
//       if (trails.current.length > 10) trails.current.shift();
//     };

//     window.addEventListener('mousemove', handleMouse);
//     return () => window.removeEventListener('mousemove', handleMouse);
//   }, []);

//   return (
//     <>
//       <div className="floating-ornament" ref={ref}>
//         <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M100 20 L120 70 L180 80 L130 110 L145 170 L100 140 L55 170 L70 110 L20 80 L80 70 Z"
//             fill="url(#gradOrnament)"
//             opacity="0.08"
//             filter="url(#glow)"
//           />
//           <defs>
//             <linearGradient id="gradOrnament" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#ff6b9d" />
//               <stop offset="50%" stopColor="#5e7bff" />
//               <stop offset="100%" stopColor="#a15eff" />
//             </linearGradient>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//               <feMerge> 
//                 <feMergeNode in="coloredBlur"/>
//                 <feMergeNode in="SourceGraphic"/>
//               </feMerge>
//             </filter>
//           </defs>
//         </svg>
//       </div>
//       {/* Trail dots */}
//       {trails.current.map((trail, i) => (
//         <div
//           key={i}
//           className="trail-dot"
//           style={{
//             left: trail.x,
//             top: trail.y,
//             opacity: trail.life,
//             animationDelay: `${i * 0.1}s`
//           }}
//         />
//       ))}
//     </>
//   );
// };

// const Dashboard = () => {
//   const { items, loading, refreshItems } = useItems();
//   const [showItemForm, setShowItemForm] = useState(false);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedItemForBooking, setSelectedItemForBooking] = useState(null);
  
//   const [confirmModal, setConfirmModal] = useState({
//     isOpen: false,
//     itemId: null,
//     itemName: ''
//   });

//   const handleAddItem = () => {
//     setSelectedItem(null);
//     setShowItemForm(true);
//   };

//   const handleEditItem = (item) => {
//     setSelectedItem(item);
//     setShowItemForm(true);
//   };

//   const handleDeleteItem = (item) => {
//     setConfirmModal({
//       isOpen: true,
//       itemId: item.id,
//       itemName: item.item_name
//     });
//   };

//   const confirmDeleteItem = async () => {
//     const { error } = await deleteItem(confirmModal.itemId);
//     if (!error) {
//       refreshItems();
//     } else {
//       alert('Error deleting item: ' + error);
//     }
//     setConfirmModal({ isOpen: false, itemId: null, itemName: '' });
//   };

//   const cancelDelete = () => {
//     setConfirmModal({ isOpen: false, itemId: null, itemName: '' });
//   };

//   const handleBookItem = (item) => {
//     setSelectedItemForBooking(item);
//     setShowBookingForm(true);
//   };

//   const handleFormSuccess = () => {
//     refreshItems();
//   };

//   if (loading) {
//     return (
//       <div className="dashboard-container">
//         <div className="shimmer-loading">
//           <div className="shimmer-card"></div>
//           <div className="shimmer-card"></div>
//           <div className="shimmer-card"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-wrapper">
//       {/* ——— INCREDIBLE: Multi-layer Background ——— */}
//       <div className="dashboard-bg">
//         <ParticleBackground />
//         <div className="bg-gradient"></div>
//         <FloatingOrnament />
//         <div className="bg-shapes">
//           <div className="shape shape-1"></div>
//           <div className="shape shape-2"></div>
//           <div className="shape shape-3"></div>
//         </div>
//       </div>

//       <div className="dashboard-container">
//         {/* ——— NEW: Hero Section with Sparkle ——— */}
//         <div className="hero-section">
//           <div className="hero-content">
//             <h1 className="hero-title">
//               My Chaniya Choli <Sparkles className="sparkle-icon" size={32} />
//             </h1>
//             <p className="hero-subtitle">Discover elegance in every thread – Your premium collection awaits</p>
//           </div>
//           <button className="btn-primary hero-btn" onClick={handleAddItem}>
//             <Plus size={20} />
//             Unveil New Treasures
//           </button>
//         </div>

//         {/* ——— ENHANCED: Animated Stats ——— */}
//         <div className="dashboard-stats">
//           <TiltCard>
//             <AnimatedCounter value={items.length} label="Total Treasures" />
//           </TiltCard>
//           <TiltCard>
//             <AnimatedCounter value={items.filter(i => !i.booked).length} label="Ready to Shine" />
//           </TiltCard>
//         </div>

//         <ItemList
//           items={items}
//           onEdit={handleEditItem}
//           onDelete={handleDeleteItem}
//           onBook={handleBookItem}
//         />

//         {showItemForm && (
//           <ItemForm
//             item={selectedItem}
//             onClose={() => setShowItemForm(false)}
//             onSuccess={handleFormSuccess}
//           />
//         )}

//         {showBookingForm && (
//           <BookingForm
//             item={selectedItemForBooking}
//             onClose={() => setShowBookingForm(false)}
//             onSuccess={() => {
//               setShowBookingForm(false);
//               refreshItems();
//             }}
//           />
//         )}

//         <ConfirmModal
//           isOpen={confirmModal.isOpen}
//           onClose={cancelDelete}
//           onConfirm={confirmDeleteItem}
//           title="Delete Item"
//           message={`Are you sure you want to delete "${confirmModal.itemName}"? This action cannot be undone.`}
//           confirmText="Delete"
//           cancelText="Cancel"
//           type="danger"
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// FILE 18: src/components/Dashboard/Dashboard.jsx (INCREDIBLE UPGRADE - Hover Removed on Stats)

import React, { useState, useEffect, useRef } from 'react';
import { Plus, Sparkles } from 'lucide-react';
import { useItems } from '../../hooks/useItems';
import { deleteItem } from '../../services/itemService';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import BookingForm from '../Booking/BookingForm';
import ConfirmModal from '../common/ConfirmModal';
import './Dashboard.css';

// ——————————————————————————————————————
// NEW: Particle System (Canvas-based, subtle magic dust)
// ——————————————————————————————————————
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsl(${Math.random() * 60 + 240}, 70%, 60%)` // Purple-blue sparkle
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = 0.95 * p.opacity; // Gentle fade

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (p.opacity < 0.1) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.opacity = Math.random() * 0.5 + 0.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationId.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

// ——————————————————————————————————————
// NEW: Tilt Card Wrapper (3D tilt on hover)
// ——————————————————————————————————————
const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={cardRef} className={`tilt-card ${className}`}>{children}</div>;
};

// ——————————————————————————————————————
// NEW: Animated Counter (for stats)
// ——————————————————————————————————————
const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const targetRef = useRef(value);

  useEffect(() => {
    targetRef.current = value;
  }, [value]);

  useEffect(() => {
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
      setCount(Math.floor(targetRef.current * easeProgress));
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stat-card">
      <h3>{label}</h3>
      <p className="stat-value">{count.toLocaleString()}</p>
    </div>
  );
};

// ——————————————————————————————————————
// ENHANCED: Floating Ornament (now with trail effect)
// ——————————————————————————————————————
const FloatingOrnament = () => {
  const ref = useRef(null);
  const trails = useRef([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;

      el.style.transform = `translate(${dx * 40}px, ${dy * 40}px) rotate(${dx * 20}deg) scale(1.1)`;

      // Add trail particle
      trails.current.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (trails.current.length > 10) trails.current.shift();
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <>
      <div className="floating-ornament" ref={ref}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 20 L120 70 L180 80 L130 110 L145 170 L100 140 L55 170 L70 110 L20 80 L80 70 Z"
            fill="url(#gradOrnament)"
            opacity="0.08"
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="gradOrnament" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b9d" />
              <stop offset="50%" stopColor="#5e7bff" />
              <stop offset="100%" stopColor="#a15eff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      {/* Trail dots */}
      {trails.current.map((trail, i) => (
        <div
          key={i}
          className="trail-dot"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: trail.life,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </>
  );
};

const Dashboard = () => {
  const { items, loading, refreshItems } = useItems();
  const [showItemForm, setShowItemForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemForBooking, setSelectedItemForBooking] = useState(null);
  
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    itemId: null,
    itemName: ''
  });

  const handleAddItem = () => {
    setSelectedItem(null);
    setShowItemForm(true);
  };

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setShowItemForm(true);
  };

  const handleDeleteItem = (item) => {
    setConfirmModal({
      isOpen: true,
      itemId: item.id,
      itemName: item.item_name
    });
  };

  const confirmDeleteItem = async () => {
    const { error } = await deleteItem(confirmModal.itemId);
    if (!error) {
      refreshItems();
    } else {
      alert('Error deleting item: ' + error);
    }
    setConfirmModal({ isOpen: false, itemId: null, itemName: '' });
  };

  const cancelDelete = () => {
    setConfirmModal({ isOpen: false, itemId: null, itemName: '' });
  };

  const handleBookItem = (item) => {
    setSelectedItemForBooking(item);
    setShowBookingForm(true);
  };

  const handleFormSuccess = () => {
    refreshItems();
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="shimmer-loading">
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      {/* ——— INCREDIBLE: Multi-layer Background ——— */}
      <div className="dashboard-bg">
        <ParticleBackground />
        <div className="bg-gradient"></div>
        <FloatingOrnament />
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="dashboard-container">
        {/* ——— NEW: Hero Section with Sparkle ——— */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              My Chaniya Choli <Sparkles className="sparkle-icon" size={32} />
            </h1>
            <p className="hero-subtitle">Discover elegance in every thread – Your premium collection awaits</p>
          </div>
          <button className="btn-primary hero-btn" onClick={handleAddItem}>
            <Plus size={20} />
            Unveil New Treasures
          </button>
        </div>

        {/* ——— ENHANCED: Animated Stats (Hover Effect Removed) ——— */}
        <div className="dashboard-stats">
          <AnimatedCounter value={items.length} label="Total Treasures" />
          <AnimatedCounter value={items.filter(i => !i.booked).length} label="Ready to Shine" />
        </div>

        <ItemList
          items={items}
          onEdit={handleEditItem}
          onDelete={handleDeleteItem}
          onBook={handleBookItem}
        />

        {showItemForm && (
          <ItemForm
            item={selectedItem}
            onClose={() => setShowItemForm(false)}
            onSuccess={handleFormSuccess}
          />
        )}

        {showBookingForm && (
          <BookingForm
            item={selectedItemForBooking}
            onClose={() => setShowBookingForm(false)}
            onSuccess={() => {
              setShowBookingForm(false);
              refreshItems();
            }}
          />
        )}

        <ConfirmModal
          isOpen={confirmModal.isOpen}
          onClose={cancelDelete}
          onConfirm={confirmDeleteItem}
          title="Delete Item"
          message={`Are you sure you want to delete "${confirmModal.itemName}"? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
          type="danger"
        />
      </div>
    </div>
  );
};

export default Dashboard;