// // // FILE 23: src/components/Booking/BookingList.jsx
// // import React, { useState } from 'react';
// // import { Trash2, Calendar, Phone, User, Search, Filter } from 'lucide-react';
// // import { useBookings } from '../../hooks/useBookings';
// // import { deleteBooking, updateBooking } from '../../services/bookingService';
// // import { formatDisplayDate } from '../../utils/dateValidation';
// // import ConfirmModal from '../common/ConfirmModal'; // 🔥 NEW IMPORT
// // import './Booking.css';

// // const BookingList = () => {
// //   const { bookings, loading, refreshBookings } = useBookings();
// //   const [filter, setFilter] = useState('all');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [dateFilter, setDateFilter] = useState('all');

// //   // 🔥 NEW: Confirmation modals state
// //   const [deleteConfirm, setDeleteConfirm] = useState({
// //     isOpen: false,
// //     bookingId: null,
// //     customerName: ''
// //   });

// //   const [completeConfirm, setCompleteConfirm] = useState({
// //     isOpen: false,
// //     bookingId: null,
// //     customerName: ''
// //   });

// //   // 🔥 NEW: Open delete confirmation
// //   const handleDeleteBooking = (booking) => {
// //     setDeleteConfirm({
// //       isOpen: true,
// //       bookingId: booking.id,
// //       customerName: booking.customer_name
// //     });
// //   };

// //   // 🔥 NEW: Confirm deletion
// //   const confirmDeleteBooking = async () => {
// //     const { error } = await deleteBooking(deleteConfirm.bookingId);
// //     if (!error) {
// //       refreshBookings();
// //     } else {
// //       alert('Error deleting booking: ' + error);
// //     }
// //     setDeleteConfirm({ isOpen: false, bookingId: null, customerName: '' });
// //   };

// //   // 🔥 NEW: Open complete confirmation
// //   const handleCompleteBooking = (booking) => {
// //     setCompleteConfirm({
// //       isOpen: true,
// //       bookingId: booking.id,
// //       customerName: booking.customer_name
// //     });
// //   };

// //   // 🔥 NEW: Confirm completion
// //   const confirmCompleteBooking = async () => {
// //     const { error } = await updateBooking(completeConfirm.bookingId, { status: 'completed' });
// //     if (!error) {
// //       refreshBookings();
// //     } else {
// //       alert('Error updating booking: ' + error);
// //     }
// //     setCompleteConfirm({ isOpen: false, bookingId: null, customerName: '' });
// //   };

// //   // 🔥 NEW: Filter and search logic
// //   const filteredBookings = bookings
// //     .filter(booking => {
// //       // Status filter
// //       if (filter === 'active' && booking.status !== 'active') return false;
// //       if (filter === 'completed' && booking.status !== 'completed') return false;

// //       // Search filter - search in item name, customer name, and phone
// //       if (searchTerm) {
// //         const search = searchTerm.toLowerCase();
// //         const itemName = booking.items?.item_name?.toLowerCase() || '';
// //         const customerName = booking.customer_name?.toLowerCase() || '';
// //         const customerMobile = booking.customer_mobile || '';

// //         const matchesSearch = 
// //           itemName.includes(search) ||
// //           customerName.includes(search) ||
// //           customerMobile.includes(search);

// //         if (!matchesSearch) return false;
// //       }

// //       // Date filter
// //       const today = new Date();
// //       today.setHours(0, 0, 0, 0);
// //       const bookingEndDate = new Date(booking.end_date);
// //       bookingEndDate.setHours(0, 0, 0, 0);

// //       if (dateFilter === 'ongoing') {
// //         const bookingStartDate = new Date(booking.start_date);
// //         bookingStartDate.setHours(0, 0, 0, 0);
// //         return bookingStartDate <= today && bookingEndDate >= today;
// //       }
// //       if (dateFilter === 'upcoming') {
// //         const bookingStartDate = new Date(booking.start_date);
// //         bookingStartDate.setHours(0, 0, 0, 0);
// //         return bookingStartDate > today;
// //       }
// //       if (dateFilter === 'past') {
// //         return bookingEndDate < today;
// //       }

// //       return true;
// //     });

// //   if (loading) {
// //     return (
// //       <div className="bookings-container">
// //         <div className="loading-state">Loading bookings...</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bookings-container">
// //       <div className="bookings-header">
// //         <div>
// //           <h1>Bookings</h1>
// //           <p>Manage your rental bookings</p>
// //         </div>

// //         <div className="filter-tabs">
// //           <button 
// //             className={filter === 'all' ? 'active' : ''} 
// //             onClick={() => setFilter('all')}
// //           >
// //             All ({bookings.length})
// //           </button>
// //           <button 
// //             className={filter === 'active' ? 'active' : ''} 
// //             onClick={() => setFilter('active')}
// //           >
// //             Active ({bookings.filter(b => b.status === 'active').length})
// //           </button>
// //           <button 
// //             className={filter === 'completed' ? 'active' : ''} 
// //             onClick={() => setFilter('completed')}
// //           >
// //             Completed ({bookings.filter(b => b.status === 'completed').length})
// //           </button>
// //         </div>
// //       </div>

// //       {/* 🔥 NEW: Search and Filter Bar */}
// //       <div className="filters-bar">
// //         <div className="search-box">
// //           <Search size={20} />
// //           <input
// //             type="text"
// //             placeholder="Search by item name, customer name, or phone number..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //           {searchTerm && (
// //             <button 
// //               className="clear-search" 
// //               onClick={() => setSearchTerm('')}
// //               title="Clear search"
// //             >
// //               ✕
// //             </button>
// //           )}
// //         </div>

// //         <div className="filter-controls">
// //           <div className="filter-group">
// //             <Filter size={18} />
// //             <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
// //               <option value="all">All Dates</option>
// //               <option value="ongoing">Ongoing</option>
// //               <option value="upcoming">Upcoming</option>
// //               <option value="past">Past</option>
// //             </select>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 🔥 NEW: Search Results Info */}
// //       {searchTerm && (
// //         <div className="search-results-info">
// //           <p>
// //             Found <strong>{filteredBookings.length}</strong> booking(s) matching "{searchTerm}"
// //           </p>
// //         </div>
// //       )}

// //       {filteredBookings.length === 0 ? (
// //         <div className="empty-state">
// //           <Calendar size={48} />
// //           {searchTerm ? (
// //             <p>No bookings found matching your search</p>
// //           ) : (
// //             <p>No bookings found</p>
// //           )}
// //           {searchTerm && (
// //             <button 
// //               className="btn-secondary" 
// //               onClick={() => setSearchTerm('')}
// //               style={{ marginTop: '15px' }}
// //             >
// //               Clear Search
// //             </button>
// //           )}
// //         </div>
// //       ) : (
// //         <div className="bookings-list">
// //           {filteredBookings.map(booking => (
// //             <div key={booking.id} className="booking-card">
// //               <div className="booking-item-info">
// //                 {booking.items?.photo_url && (
// //                   <img src={booking.items.photo_url} alt={booking.items.item_name} />
// //                 )}
// //                 <div>
// //                   <h3>{booking.items?.item_name || 'Unknown Item'}</h3>
// //                   <span className={`status-badge ${booking.status}`}>
// //                     {booking.status}
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="booking-details">
// //                 <div className="detail-row">
// //                   <User size={16} />
// //                   <span>{booking.customer_name}</span>
// //                 </div>
// //                 <div className="detail-row">
// //                   <Phone size={16} />
// //                   <span>{booking.customer_mobile}</span>
// //                 </div>
// //                 <div className="detail-row">
// //                   <Calendar size={16} />
// //                   <span>
// //                     {formatDisplayDate(booking.start_date)} - {formatDisplayDate(booking.end_date)}
// //                   </span>
// //                 </div>
                
// //                 {/* 🔥 NEW: Show discount if applied */}
// //                 {booking.discount && booking.discount > 0 && (
// //                   <div className="detail-row discount-info">
// //                     <span>Discount:</span>
// //                     <span className="discount-value">- ₹{booking.discount}</span>
// //                   </div>
// //                 )}
                
// //                 <div className="detail-row price">
// //                   <span>Total:</span>
// //                   <strong>₹{booking.rent_price}</strong>
// //                 </div>
// //               </div>

// //               <div className="booking-actions">
// //                 {booking.status === 'active' && (
// //                   <button 
// //                     className="btn-complete" 
// //                     onClick={() => handleCompleteBooking(booking.id)}
// //                   >
// //                     Mark Complete
// //                   </button>
// //                 )}
// //                 <button 
// //                   className="btn-delete-small" 
// //                   onClick={() => handleDeleteBooking(booking.id)}
// //                   title="Delete Booking"
// //                 >
// //                   <Trash2 size={16} />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
      
// //       {/* 🔥 NEW: Delete Confirmation Modal */}
// //       <ConfirmModal
// //         isOpen={deleteConfirm.isOpen}
// //         onClose={() => setDeleteConfirm({ isOpen: false, bookingId: null, customerName: '' })}
// //         onConfirm={confirmDeleteBooking}
// //         title="Delete Booking"
// //         message={`Are you sure you want to delete the booking for "${deleteConfirm.customerName}"? This action cannot be undone.`}
// //         confirmText="Delete"
// //         cancelText="Cancel"
// //         type="danger"
// //       />

// //       {/* 🔥 NEW: Complete Confirmation Modal */}
// //       <ConfirmModal
// //         isOpen={completeConfirm.isOpen}
// //         onClose={() => setCompleteConfirm({ isOpen: false, bookingId: null, customerName: '' })}
// //         onConfirm={confirmCompleteBooking}
// //         title="Mark as Completed"
// //         message={`Mark the booking for "${completeConfirm.customerName}" as completed?`}
// //         confirmText="Mark Complete"
// //         cancelText="Cancel"
// //         type="info"
// //       />
// //     </div>
// //   );
// // };

// // export default BookingList;

// // FILE: src/components/Booking/BookingList.jsx

// import React, { useState } from 'react';
// import { Trash2, Calendar, Phone, User, Search, Filter, CheckCircle, Clock } from 'lucide-react';
// import { useBookings } from '../../hooks/useBookings';
// import { deleteBooking, updateBooking } from '../../services/bookingService';
// import { formatDisplayDate } from '../../utils/dateValidation';
// import ConfirmModal from '../common/ConfirmModal';
// import './Booking.css';

// const BookingList = () => {
//   const { bookings, loading, refreshBookings } = useBookings();
//   const [filter, setFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dateFilter, setDateFilter] = useState('all');

//   const [deleteConfirm, setDeleteConfirm] = useState({
//     isOpen: false,
//     bookingId: null,
//     customerName: ''
//   });

//   const [completeConfirm, setCompleteConfirm] = useState({
//     isOpen: false,
//     bookingId: null,
//     customerName: ''
//   });

//   const handleDeleteBooking = (booking) => {
//     setDeleteConfirm({
//       isOpen: true,
//       bookingId: booking.id,
//       customerName: booking.customer_name
//     });
//   };

//   const confirmDeleteBooking = async () => {
//     const { error } = await deleteBooking(deleteConfirm.bookingId);
//     if (!error) {
//       refreshBookings();
//     } else {
//       alert('Error deleting booking: ' + error);
//     }
//     setDeleteConfirm({ isOpen: false, bookingId: null, customerName: '' });
//   };

//   const handleCompleteBooking = (booking) => {
//     setCompleteConfirm({
//       isOpen: true,
//       bookingId: booking.id,
//       customerName: booking.customer_name
//     });
//   };

//   const confirmCompleteBooking = async () => {
//     const { error } = await updateBooking(completeConfirm.bookingId, { status: 'completed' });
//     if (!error) {
//       refreshBookings();
//     } else {
//       alert('Error updating booking: ' + error);
//     }
//     setCompleteConfirm({ isOpen: false, bookingId: null, customerName: '' });
//   };

//   const filteredBookings = bookings.filter(booking => {
//     if (filter === 'active' && booking.status !== 'active') return false;
//     if (filter === 'completed' && booking.status !== 'completed') return false;

//     if (searchTerm) {
//       const search = searchTerm.toLowerCase();
//       const itemName = booking.items?.item_name?.toLowerCase() || '';
//       const customerName = booking.customer_name?.toLowerCase() || '';
//       const customerMobile = booking.customer_mobile || '';

//       const matchesSearch = 
//         itemName.includes(search) ||
//         customerName.includes(search) ||
//         customerMobile.includes(search);

//       if (!matchesSearch) return false;
//     }

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const bookingEndDate = new Date(booking.end_date);
//     bookingEndDate.setHours(0, 0, 0, 0);

//     if (dateFilter === 'ongoing') {
//       const bookingStartDate = new Date(booking.start_date);
//       bookingStartDate.setHours(0, 0, 0, 0);
//       return bookingStartDate <= today && bookingEndDate >= today;
//     }
//     if (dateFilter === 'upcoming') {
//       const bookingStartDate = new Date(booking.start_date);
//       bookingStartDate.setHours(0, 0, 0, 0);
//       return bookingStartDate > today;
//     }
//     if (dateFilter === 'past') {
//       return bookingEndDate < today;
//     }

//     return true;
//   });

//   if (loading) {
//     return (
//       <div className="bookings-container">
//         <div className="loading-shimmer">
//           <div className="shimmer-card"></div>
//           <div className="shimmer-card"></div>
//           <div className="shimmer-card"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bookings-wrapper">
//       <div className="bookings-container">
//         <div className="bookings-header">
//           <div className="header-content">
//             <h1 className="header-title">
//               <Calendar className="header-icon" size={32} />
//               Bookings Management
//             </h1>
//             <p className="header-subtitle">Track and manage your rental bookings effortlessly</p>
//           </div>

//           <div className="filter-tabs">
//             <button 
//               className={`tab-button ${filter === 'all' ? 'active' : ''}`}
//               onClick={() => setFilter('all')}
//             >
//               <span className="tab-label">All</span>
//               <span className="tab-count">{bookings.length}</span>
//             </button>
//             <button 
//               className={`tab-button ${filter === 'active' ? 'active' : ''}`}
//               onClick={() => setFilter('active')}
//             >
//               <Clock size={16} />
//               <span className="tab-label">Active</span>
//               <span className="tab-count">{bookings.filter(b => b.status === 'active').length}</span>
//             </button>
//             <button 
//               className={`tab-button ${filter === 'completed' ? 'active' : ''}`}
//               onClick={() => setFilter('completed')}
//             >
//               <CheckCircle size={16} />
//               <span className="tab-label">Completed</span>
//               <span className="tab-count">{bookings.filter(b => b.status === 'completed').length}</span>
//             </button>
//           </div>
//         </div>

//         <div className="filters-bar-glass">
//           <div className="search-box-glass">
//             <Search size={20} className="search-icon" />
//             <input
//               type="text"
//               placeholder="Search by item, customer, or phone..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="search-input-glass"
//             />
//             {searchTerm && (
//               <button 
//                 className="clear-btn" 
//                 onClick={() => setSearchTerm('')}
//               >
//                 ✕
//               </button>
//             )}
//           </div>

//           <div className="date-filter-glass">
//             <Filter size={18} />
//             <select 
//               value={dateFilter} 
//               onChange={(e) => setDateFilter(e.target.value)}
//               className="filter-select-glass"
//             >
//               <option value="all">All Dates</option>
//               <option value="ongoing">Ongoing</option>
//               <option value="upcoming">Upcoming</option>
//               <option value="past">Past</option>
//             </select>
//           </div>
//         </div>

//         {searchTerm && (
//           <div className="search-results-banner">
//             <span className="results-icon">🔍</span>
//             <p>Found <strong>{filteredBookings.length}</strong> booking(s) matching "{searchTerm}"</p>
//           </div>
//         )}

//         {filteredBookings.length === 0 ? (
//           <div className="empty-state-glass">
//             <Calendar size={64} className="empty-icon" />
//             <h3>No Bookings Found</h3>
//             <p>{searchTerm ? 'Try adjusting your search criteria' : 'Start creating bookings to see them here'}</p>
//             {searchTerm && (
//               <button className="btn-clear-search" onClick={() => setSearchTerm('')}>
//                 Clear Search
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="bookings-grid">
//             {filteredBookings.map((booking, index) => (
//               <div 
//                 key={booking.id} 
//                 className="booking-card-glass"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="card-header">
//                   <div className="item-info">
//                     {booking.items?.photo_url && (
//                       <div className="item-image-wrapper">
//                         <img src={booking.items.photo_url} alt={booking.items.item_name} />
//                       </div>
//                     )}
//                     <div className="item-details">
//                       <h3>{booking.items?.item_name || 'Unknown Item'}</h3>
//                       <span className={`status-pill ${booking.status}`}>
//                         {booking.status === 'active' ? <Clock size={14} /> : <CheckCircle size={14} />}
//                         {booking.status}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="card-body">
//                   <div className="detail-item">
//                     <User size={18} className="detail-icon" />
//                     <span>{booking.customer_name}</span>
//                   </div>
//                   <div className="detail-item">
//                     <Phone size={18} className="detail-icon" />
//                     <span>{booking.customer_mobile}</span>
//                   </div>
//                   <div className="detail-item">
//                     <Calendar size={18} className="detail-icon" />
//                     <span>{formatDisplayDate(booking.start_date)} - {formatDisplayDate(booking.end_date)}</span>
//                   </div>

//                   {booking.discount && booking.discount > 0 && (
//                     <div className="discount-badge">
//                       <span>💰 Discount: ₹{booking.discount}</span>
//                     </div>
//                   )}

//                   <div className="price-section">
//                     <span className="price-label">Total Amount</span>
//                     <span className="price-value">₹{booking.rent_price}</span>
//                   </div>
//                 </div>

//                 <div className="card-actions">
//                   {booking.status === 'active' && (
//                     <button 
//                       className="btn-complete-glass" 
//                       onClick={() => handleCompleteBooking(booking)}
//                     >
//                       <CheckCircle size={18} />
//                       Mark Complete
//                     </button>
//                   )}
//                   <button 
//                     className="btn-delete-glass" 
//                     onClick={() => handleDeleteBooking(booking)}
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <ConfirmModal
//         isOpen={deleteConfirm.isOpen}
//         onClose={() => setDeleteConfirm({ isOpen: false, bookingId: null, customerName: '' })}
//         onConfirm={confirmDeleteBooking}
//         title="Delete Booking"
//         message={`Are you sure you want to delete the booking for "${deleteConfirm.customerName}"? This action cannot be undone.`}
//         confirmText="Delete"
//         cancelText="Cancel"
//         type="danger"
//       />

//       <ConfirmModal
//         isOpen={completeConfirm.isOpen}
//         onClose={() => setCompleteConfirm({ isOpen: false, bookingId: null, customerName: '' })}
//         onConfirm={confirmCompleteBooking}
//         title="Mark as Completed"
//         message={`Mark the booking for "${completeConfirm.customerName}" as completed?`}
//         confirmText="Mark Complete"
//         cancelText="Cancel"
//         type="info"
//       />
//     </div>
//   );
// };

// export default BookingList;

// FILE: src/components/Booking/BookingList.jsx

import React, { useState } from 'react';
import { Trash2, Calendar, Phone, User, Search, Filter, CheckCircle, Clock } from 'lucide-react';
import { useBookings } from '../../hooks/useBookings';
import { deleteBooking, updateBooking } from '../../services/bookingService';
import { formatDisplayDate } from '../../utils/dateValidation';
import ConfirmModal from '../common/ConfirmModal';
import './Booking.css';

const BookingList = () => {
  const { bookings, loading, refreshBookings } = useBookings();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');

  const [deleteConfirm, setDeleteConfirm] = useState({
    isOpen: false,
    bookingId: null,
    customerName: ''
  });

  const [completeConfirm, setCompleteConfirm] = useState({
    isOpen: false,
    bookingId: null,
    customerName: ''
  });

  const handleDeleteBooking = (booking) => {
    setDeleteConfirm({
      isOpen: true,
      bookingId: booking.id,
      customerName: booking.customer_name
    });
  };

  const confirmDeleteBooking = async () => {
    const { error } = await deleteBooking(deleteConfirm.bookingId);
    if (!error) {
      refreshBookings();
    } else {
      alert('Error deleting booking: ' + error);
    }
    setDeleteConfirm({ isOpen: false, bookingId: null, customerName: '' });
  };

  const handleCompleteBooking = (booking) => {
    setCompleteConfirm({
      isOpen: true,
      bookingId: booking.id,
      customerName: booking.customer_name
    });
  };

  const confirmCompleteBooking = async () => {
    const { error } = await updateBooking(completeConfirm.bookingId, { status: 'completed' });
    if (!error) {
      refreshBookings();
    } else {
      alert('Error updating booking: ' + error);
    }
    setCompleteConfirm({ isOpen: false, bookingId: null, customerName: '' });
  };

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'active' && booking.status !== 'active') return false;
    if (filter === 'completed' && booking.status !== 'completed') return false;

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      const itemName = booking.items?.item_name?.toLowerCase() || '';
      const customerName = booking.customer_name?.toLowerCase() || '';
      const customerMobile = booking.customer_mobile || '';

      const matchesSearch = 
        itemName.includes(search) ||
        customerName.includes(search) ||
        customerMobile.includes(search);

      if (!matchesSearch) return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const bookingEndDate = new Date(booking.end_date);
    bookingEndDate.setHours(0, 0, 0, 0);

    if (dateFilter === 'ongoing') {
      const bookingStartDate = new Date(booking.start_date);
      bookingStartDate.setHours(0, 0, 0, 0);
      return bookingStartDate <= today && bookingEndDate >= today;
    }
    if (dateFilter === 'upcoming') {
      const bookingStartDate = new Date(booking.start_date);
      bookingStartDate.setHours(0, 0, 0, 0);
      return bookingStartDate > today;
    }
    if (dateFilter === 'past') {
      return bookingEndDate < today;
    }

    return true;
  });

  if (loading) {
    return (
      <div className="bookings-container">
        <div className="loading-shimmer">
          <div className="shimmer-card"></div>
          <div className="shimmer-card"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bookings-wrapper">
      <div className="bookings-container-compact">
        {/* Compact Header */}
        <div className="bookings-header-compact">
          <div className="header-content-compact">
            <h1 className="header-title-compact">
              <Calendar size={28} />
              Bookings
            </h1>
            <p className="header-subtitle-compact">Manage your rentals</p>
          </div>

          <div className="filter-tabs-compact">
            <button 
              className={`tab-btn-compact ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All <span className="badge">{bookings.length}</span>
            </button>
            <button 
              className={`tab-btn-compact ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              <Clock size={14} />
              Active <span className="badge">{bookings.filter(b => b.status === 'active').length}</span>
            </button>
            <button 
              className={`tab-btn-compact ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              <CheckCircle size={14} />
              Done <span className="badge">{bookings.filter(b => b.status === 'completed').length}</span>
            </button>
          </div>
        </div>

        {/* Compact Filters */}
        <div className="filters-bar-compact">
          <div className="search-box-compact">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="clear-btn" onClick={() => setSearchTerm('')}>✕</button>
            )}
          </div>

          <div className="date-filter-compact">
            <Filter size={16} />
            <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="ongoing">Ongoing</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {searchTerm && (
          <div className="search-results-compact">
            <span>🔍</span>
            <p>Found <strong>{filteredBookings.length}</strong> result(s)</p>
          </div>
        )}

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="empty-state-compact">
            <Calendar size={48} />
            <h3>No Bookings</h3>
            <p>{searchTerm ? 'No results found' : 'No bookings yet'}</p>
          </div>
        ) : (
          <div className="bookings-list-compact">
            {filteredBookings.map((booking, index) => (
              <div 
                key={booking.id} 
                className="booking-card-compact"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {/* Image */}
                <div className="card-image-compact">
                  {booking.items?.photo_url ? (
                    <img src={booking.items.photo_url} alt={booking.items.item_name} />
                  ) : (
                    <div className="no-image">📦</div>
                  )}
                </div>

                {/* Details */}
                <div className="card-details-compact">
                  <div className="card-header-compact">
                    <h3>{booking.items?.item_name || 'Unknown'}</h3>
                    <span className={`status-compact ${booking.status}`}>
                      {booking.status === 'active' ? <Clock size={12} /> : <CheckCircle size={12} />}
                      {booking.status}
                    </span>
                  </div>

                  <div className="details-grid-compact">
                    <div className="detail-compact">
                      <User size={14} />
                      <span>{booking.customer_name}</span>
                    </div>
                    <div className="detail-compact">
                      <Phone size={14} />
                      <span>{booking.customer_mobile}</span>
                    </div>
                    <div className="detail-compact calendar">
                      <Calendar size={14} />
                      <span>{formatDisplayDate(booking.start_date)} → {formatDisplayDate(booking.end_date)}</span>
                    </div>

                    {booking.discount && booking.discount > 0 && (
                      <div className="discount-compact">
                        💰 Discount: <strong>₹{booking.discount}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & Actions */}
                <div className="card-actions-compact">
                  <div className="price-compact">
                    <span>Total</span>
                    <strong>₹{booking.rent_price}</strong>
                  </div>

                  <div className="buttons-compact">
                    {booking.status === 'active' && (
                      <button 
                        className="btn-complete-compact" 
                        onClick={() => handleCompleteBooking(booking)}
                        title="Mark Complete"
                      >
                        <CheckCircle size={16} />
                      </button>
                    )}
                    <button 
                      className="btn-delete-compact" 
                      onClick={() => handleDeleteBooking(booking)}
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <ConfirmModal
        isOpen={deleteConfirm.isOpen}
        onClose={() => setDeleteConfirm({ isOpen: false, bookingId: null, customerName: '' })}
        onConfirm={confirmDeleteBooking}
        title="Delete Booking"
        message={`Delete booking for "${deleteConfirm.customerName}"?`}
        confirmText="Delete"
        cancelText="Cancel"
        type="danger"
      />

      <ConfirmModal
        isOpen={completeConfirm.isOpen}
        onClose={() => setCompleteConfirm({ isOpen: false, bookingId: null, customerName: '' })}
        onConfirm={confirmCompleteBooking}
        title="Mark Complete"
        message={`Mark "${completeConfirm.customerName}" as completed?`}
        confirmText="Complete"
        cancelText="Cancel"
        type="info"
      />
    </div>
  );
};

export default BookingList;
