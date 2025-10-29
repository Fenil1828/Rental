// // FILE 22: src/components/Booking/BookingForm.jsx

// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';
// import { createBooking, checkAvailability } from '../../services/bookingService';
// import { useAuth } from '../../hooks/useAuth';
// import { isValidDateRange, getTodayDate, calculateDays } from '../../utils/dateValidation';
// import AvailabilityChecker from './AvailabilityChecker';
// import './Booking.css';

// const BookingForm = ({ item, booking, onClose, onSuccess }) => {
//   const { user } = useAuth();
//   const [formData, setFormData] = useState({
//     customer_name: '',
//     customer_mobile: '',
//     start_date: '',
//     end_date: '',
//     rent_price: item ? item.rent_price : '',
//     discount: '' // 🔥 NEW: Discount field
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [availability, setAvailability] = useState(null);
//   const [conflictingBookings, setConflictingBookings] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [discountedPrice, setDiscountedPrice] = useState(0); // 🔥 NEW: Final price after discount

//   useEffect(() => {
//     if (booking) {
//       setFormData({
//         customer_name: booking.customer_name || '',
//         customer_mobile: booking.customer_mobile || '',
//         start_date: booking.start_date || '',
//         end_date: booking.end_date || '',
//         rent_price: booking.rent_price || '',
//         discount: booking.discount || '' // 🔥 NEW: Load discount if editing
//       });
//     }
//   }, [booking]);

//   useEffect(() => {
//     if (formData.start_date && formData.end_date && item) {
//       calculateTotalPrice();
//       checkItemAvailability();
//     }
//   }, [formData.start_date, formData.end_date]);

//   // 🔥 NEW: Recalculate when discount changes
//   useEffect(() => {
//     calculateDiscountedPrice();
//   }, [totalPrice, formData.discount]);

//   const calculateTotalPrice = () => {
//     if (!formData.start_date || !formData.end_date) return;

//     if (item.rent_type === 'per_day') {
//       const days = calculateDays(formData.start_date, formData.end_date);
//       setTotalPrice(days * item.rent_price);
//     } else {
//       setTotalPrice(item.rent_price);
//     }
//   };

//   // 🔥 NEW: Calculate final price after discount
//   const calculateDiscountedPrice = () => {
//     const discount = parseFloat(formData.discount) || 0;
    
//     if (discount < 0) {
//       setDiscountedPrice(totalPrice);
//       return;
//     }

//     const finalPrice = totalPrice - discount;
//     setDiscountedPrice(finalPrice > 0 ? finalPrice : 0);
//   };

//   const checkItemAvailability = async () => {
//     if (!item || !formData.start_date || !formData.end_date) return;

//     setAvailability({ checking: true });

//     const result = await checkAvailability(
//       item.id,
//       formData.start_date,
//       formData.end_date,
//       booking?.id
//     );

//     setAvailability({
//       available: result.available,
//       checking: false
//     });
//     setConflictingBookings(result.conflictingBookings || []);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!isValidDateRange(formData.start_date, formData.end_date)) {
//       setError('End date must be after or equal to start date');
//       return;
//     }

//     if (availability && !availability.available) {
//       setError('Item is not available for the selected dates');
//       return;
//     }

//     // 🔥 NEW: Validate discount
//     const discount = parseFloat(formData.discount) || 0;
//     if (discount < 0) {
//       setError('Discount cannot be negative');
//       return;
//     }

//     if (discount > totalPrice) {
//       setError('Discount cannot be greater than total price');
//       return;
//     }

//     setLoading(true);

//     const bookingData = {
//       ...formData,
//       item_id: item.id,
//       user_id: user.id,
//       status: 'active',
//       rent_price: discountedPrice, // 🔥 NEW: Save final price after discount
//       discount: discount // 🔥 NEW: Save discount amount
//     };

//     const { data, error: bookingError } = await createBooking(bookingData);

//     if (bookingError) {
//       setError(bookingError);
//       setLoading(false);
//     } else {
//       onSuccess();
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-header">
//           <div>
//             <h2>{booking ? 'Edit Booking' : 'Create Booking'}</h2>
//             {item && <p className="modal-subtitle">Item: {item.item_name}</p>}
//           </div>
//           <button className="btn-close" onClick={onClose}>
//             <X size={24} />
//           </button>
//         </div>

//         {error && <div className="error-message">{error}</div>}

//         <form onSubmit={handleSubmit} className="booking-form">
//           <div className="form-group">
//             <label htmlFor="customer_name">Customer Name *</label>
//             <input
//               type="text"
//               id="customer_name"
//               name="customer_name"
//               value={formData.customer_name}
//               onChange={handleChange}
//               required
//               placeholder="Enter customer name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="customer_mobile">Customer Mobile *</label>
//             <input
//               type="tel"
//               id="customer_mobile"
//               name="customer_mobile"
//               value={formData.customer_mobile}
//               onChange={handleChange}
//               required
//               placeholder="Enter mobile number"
//               pattern="[0-9]{10}"
//               title="Please enter a valid 10-digit mobile number"
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="start_date">Start Date *</label>
//               <input
//                 type="date"
//                 id="start_date"
//                 name="start_date"
//                 value={formData.start_date}
//                 onChange={handleChange}
//                 required
//                 min={getTodayDate()}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="end_date">End Date *</label>
//               <input
//                 type="date"
//                 id="end_date"
//                 name="end_date"
//                 value={formData.end_date}
//                 onChange={handleChange}
//                 required
//                 min={formData.start_date || getTodayDate()}
//               />
//             </div>
//           </div>

//           {/* 🔥 NEW: Discount Field */}
//           <div className="form-group">
//             <label htmlFor="discount">Discount (₹) <span className="optional-label">(Optional)</span></label>
//             <input
//               type="number"
//               id="discount"
//               name="discount"
//               value={formData.discount}
//               onChange={handleChange}
//               placeholder="Enter discount amount"
//               min="0"
//               max={totalPrice}
//               step="0.01"
//             />
//             <small className="field-hint">
//               Enter discount amount to reduce the total price
//             </small>
//           </div>

//           {formData.start_date && formData.end_date && item && (
//             <div className="booking-summary">
//               <div className="summary-row">
//                 <span>Duration:</span>
//                 <strong>{calculateDays(formData.start_date, formData.end_date)} day(s)</strong>
//               </div>
//               <div className="summary-row">
//                 <span>Price per {item.rent_type === 'per_day' ? 'day' : 'booking'}:</span>
//                 <strong>₹{item.rent_price}</strong>
//               </div>
//               <div className="summary-row">
//                 <span>Subtotal:</span>
//                 <strong>₹{totalPrice}</strong>
//               </div>
              
//               {/* 🔥 NEW: Show discount row if discount is entered */}
//               {formData.discount && parseFloat(formData.discount) > 0 && (
//                 <div className="summary-row discount-row">
//                   <span>Discount:</span>
//                   <strong className="discount-amount">- ₹{parseFloat(formData.discount).toFixed(2)}</strong>
//                 </div>
//               )}
              
//               <div className="summary-row total">
//                 <span>Final Price:</span>
//                 <strong>₹{discountedPrice.toFixed(2)}</strong>
//               </div>
//             </div>
//           )}

//           <AvailabilityChecker 
//             availability={availability} 
//             conflictingBookings={conflictingBookings}
//           />

//           <div className="form-actions">
//             <button type="button" className="btn-secondary" onClick={onClose}>
//               Cancel
//             </button>
//             <button 
//               type="submit" 
//               className="btn-primary" 
//               disabled={loading || (availability && !availability.available)}
//             >
//               {loading ? 'Creating...' : booking ? 'Update Booking' : 'Create Booking'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;

// FILE: src/components/Booking/BookingForm.jsx

import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Tag } from 'lucide-react';
import { createBooking, checkAvailability } from '../../services/bookingService';
import { useAuth } from '../../hooks/useAuth';
import { isValidDateRange, getTodayDate, calculateDays } from '../../utils/dateValidation';
import AvailabilityChecker from './AvailabilityChecker';
import './Booking.css';

const BookingForm = ({ item, booking, onClose, onSuccess }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_mobile: '',
    start_date: '',
    end_date: '',
    rent_price: item ? item.rent_price : '',
    discount: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [availability, setAvailability] = useState(null);
  const [conflictingBookings, setConflictingBookings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    if (booking) {
      setFormData({
        customer_name: booking.customer_name || '',
        customer_mobile: booking.customer_mobile || '',
        start_date: booking.start_date || '',
        end_date: booking.end_date || '',
        rent_price: booking.rent_price || '',
        discount: booking.discount || ''
      });
    }
  }, [booking]);

  useEffect(() => {
    if (formData.start_date && formData.end_date && item) {
      calculateTotalPrice();
      checkItemAvailability();
    }
  }, [formData.start_date, formData.end_date]);

  useEffect(() => {
    calculateDiscountedPrice();
  }, [totalPrice, formData.discount]);

  const calculateTotalPrice = () => {
    if (!formData.start_date || !formData.end_date) return;

    if (item.rent_type === 'per_day') {
      const days = calculateDays(formData.start_date, formData.end_date);
      setTotalPrice(days * item.rent_price);
    } else {
      setTotalPrice(item.rent_price);
    }
  };

  const calculateDiscountedPrice = () => {
    const discount = parseFloat(formData.discount) || 0;
    
    if (discount < 0) {
      setDiscountedPrice(totalPrice);
      return;
    }

    const finalPrice = totalPrice - discount;
    setDiscountedPrice(finalPrice > 0 ? finalPrice : 0);
  };

  const checkItemAvailability = async () => {
    if (!item || !formData.start_date || !formData.end_date) return;

    setAvailability({ checking: true });

    const result = await checkAvailability(
      item.id,
      formData.start_date,
      formData.end_date,
      booking?.id
    );

    setAvailability({
      available: result.available,
      checking: false
    });
    setConflictingBookings(result.conflictingBookings || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isValidDateRange(formData.start_date, formData.end_date)) {
      setError('End date must be after or equal to start date');
      return;
    }

    if (availability && !availability.available) {
      setError('Item is not available for the selected dates');
      return;
    }

    const discount = parseFloat(formData.discount) || 0;
    if (discount < 0) {
      setError('Discount cannot be negative');
      return;
    }

    if (discount > totalPrice) {
      setError('Discount cannot be greater than total price');
      return;
    }

    setLoading(true);

    const bookingData = {
      ...formData,
      item_id: item.id,
      user_id: user.id,
      status: 'active',
      rent_price: discountedPrice,
      discount: discount
    };

    const { data, error: bookingError } = await createBooking(bookingData);

    if (bookingError) {
      setError(bookingError);
      setLoading(false);
    } else {
      onSuccess();
    }
  };

  return (
    <div className="modal-overlay-glass" onClick={onClose}>
      <div className="modal-content-glass" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-glass">
          <div className="header-text">
            <h2>{booking ? 'Edit Booking' : 'Create New Booking'}</h2>
            {item && <p className="item-subtitle">📦 {item.item_name}</p>}
          </div>
          <button className="btn-close-glass" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {error && (
          <div className="error-banner">
            <span className="error-icon">⚠</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="booking-form-glass">
          <div className="form-group-glass">
            <label className="form-label-glass">
              <User size={18} />
              Customer Name *
            </label>
            <input
              type="text"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              required
              placeholder="Enter customer name"
              className="form-input-glass"
            />
          </div>

          <div className="form-group-glass">
            <label className="form-label-glass">
              <Phone size={18} />
              Customer Mobile *
            </label>
            <input
              type="tel"
              name="customer_mobile"
              value={formData.customer_mobile}
              onChange={handleChange}
              required
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
              className="form-input-glass"
            />
          </div>

          <div className="form-row-glass">
            <div className="form-group-glass">
              <label className="form-label-glass">
                <Calendar size={18} />
                Start Date *
              </label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                required
                min={getTodayDate()}
                className="form-input-glass"
              />
            </div>

            <div className="form-group-glass">
              <label className="form-label-glass">
                <Calendar size={18} />
                End Date *
              </label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                required
                min={formData.start_date || getTodayDate()}
                className="form-input-glass"
              />
            </div>
          </div>

          <div className="form-group-glass">
            <label className="form-label-glass">
              <Tag size={18} />
              Discount (₹) <span className="optional-text">(Optional)</span>
            </label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              placeholder="Enter discount amount"
              min="0"
              max={totalPrice}
              step="0.01"
              className="form-input-glass"
            />
            <span className="field-hint-glass">
              Apply a discount to reduce the total price
            </span>
          </div>

          {formData.start_date && formData.end_date && item && (
            <div className="summary-card-glass">
              <h3 className="summary-title">Booking Summary</h3>
              <div className="summary-rows">
                <div className="summary-row-glass">
                  <span>Duration</span>
                  <strong>{calculateDays(formData.start_date, formData.end_date)} day(s)</strong>
                </div>
                <div className="summary-row-glass">
                  <span>Price per {item.rent_type === 'per_day' ? 'day' : 'booking'}</span>
                  <strong>₹{item.rent_price}</strong>
                </div>
                <div className="summary-row-glass">
                  <span>Subtotal</span>
                  <strong>₹{totalPrice}</strong>
                </div>
                
                {formData.discount && parseFloat(formData.discount) > 0 && (
                  <div className="summary-row-glass discount">
                    <span>💰 Discount</span>
                    <strong className="discount-value">- ₹{parseFloat(formData.discount).toFixed(2)}</strong>
                  </div>
                )}
                
                <div className="summary-row-glass total">
                  <span>Final Amount</span>
                  <strong>₹{discountedPrice.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          )}

          <AvailabilityChecker 
            availability={availability} 
            conflictingBookings={conflictingBookings}
          />

          <div className="form-actions-glass">
            <button type="button" className="btn-cancel-glass" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-submit-glass" 
              disabled={loading || (availability && !availability.available)}
            >
              {loading ? 'Creating...' : booking ? 'Update Booking' : 'Create Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
