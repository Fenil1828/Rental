// // // FILE 15: src/components/Dashboard/ItemCard.jsx

// // import React from 'react';
// // import { Trash2, Edit, Calendar } from 'lucide-react';
// // import './Dashboard.css';

// // const ItemCard = ({ item, onEdit, onDelete, onBook }) => {
// //   return (
// //     <div className="item-card">
// //       <div className="item-image">
// //         {item.photo_url ? (
// //           <img src={item.photo_url} alt={item.item_name} />
// //         ) : (
// //           <div className="no-image">No Image</div>
// //         )}
// //       </div>
      
// //       <div className="item-details">
// //         <h3>{item.item_name}</h3>
// //         <p className="item-description">{item.description}</p>
        
// //         <div className="item-price">
// //           <span className="price">₹{item.rent_price}</span>
// //           <span className="price-type">/{item.rent_type === 'per_day' ? 'day' : 'booking'}</span>
// //         </div>
        
// //         <div className="item-actions">
// //           <button className="btn-icon btn-book" onClick={() => onBook(item)} title="Create Booking">
// //             <Calendar size={18} />
// //             Book
// //           </button>
// //           <button className="btn-icon btn-edit" onClick={() => onEdit(item)} title="Edit Item">
// //             <Edit size={18} />
// //           </button>
// //           {/* 🔥 CHANGED: Pass entire item object instead of just ID */}
// //           <button className="btn-icon btn-delete" onClick={() => onDelete(item)} title="Delete Item">
// //             <Trash2 size={18} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ItemCard;


// import React from 'react';
// import { Trash2, Edit, Calendar } from 'lucide-react';
// import './Dashboard.css';

// const ItemCard = ({ item, onEdit, onDelete, onBook }) => {
//   return (
//     <div className="item-card">
//       <div className="item-image">
//         {item.photo_url ? (
//           <img src={item.photo_url} alt={item.item_name} />
//         ) : (
//           <div className="no-image">No Image Available</div>
//         )}
//       </div>
      
//       <div className="item-details">
//         <h3>{item.item_name}</h3>
//         <p className="item-description">{item.description || 'No description available'}</p>
        
//         <div className="item-price">
//           <span className="price">₹{item.rent_price.toLocaleString()}</span>
//           <span className="price-type">/{item.rent_type === 'per_day' ? 'day' : 'booking'}</span>
//         </div>
        
//         <div className="item-actions">
//           <button className="btn-icon btn-book" onClick={() => onBook(item)} title="Create Booking">
//             <Calendar size={18} />
//             Book
//           </button>
//           <button className="btn-icon btn-edit" onClick={() => onEdit(item)} title="Edit Item">
//             <Edit size={18} />
//           </button>
//           <button className="btn-icon btn-delete" onClick={() => onDelete(item)} title="Delete Item">
//             <Trash2 size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;

import React, { useState } from 'react';
import { Trash2, Edit, Calendar } from 'lucide-react';

const ItemCard = ({ item, onEdit, onDelete, onBook }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(item);
    setShowDeleteConfirm(false);
  };

  const styles = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }

    .item-card {
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
      animation: slideUp 0.6s ease-out;
      position: relative;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .item-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
      border-color: rgba(0, 0, 0, 0.1);
    }

    .item-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b);
      background-size: 300% 100%;
    }

    .item-card:hover::before {
      animation: shimmer 3s infinite;
    }

    .item-image {
      position: relative;
      height: 220px;
      background: linear-gradient(135deg, #e0e7ff 0%, #f3e7e9 100%);
      overflow: hidden;
    }

    .item-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .item-card:hover .item-image img {
      transform: scale(1.12) rotate(1deg);
    }

    .no-image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-weight: 500;
      font-size: 14px;
    }

    .item-details {
      padding: 20px;
      background: white;
    }

    .item-details h3 {
      margin: 0 0 10px 0;
      font-size: 18px;
      font-weight: 700;
      color: #1a1a1a;
      transition: color 0.3s ease;
    }

    .item-card:hover .item-details h3 {
      color: #667eea;
    }

    .item-description {
      margin: 8px 0 14px 0;
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      opacity: 0.85;
    }

    .item-price {
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-bottom: 16px;
      padding: 10px 12px;
      background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .item-card:hover .item-price {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
    }

    .price {
      font-size: 22px;
      font-weight: 800;
      color: #ff6b6b;
    }

    .price-type {
      font-size: 12px;
      color: #d63031;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .item-actions {
      display: flex;
      gap: 8px;
      justify-content: space-between;
    }

    .btn-icon {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      position: relative;
      overflow: hidden;
    }

    .btn-icon::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }

    .btn-icon:active::before {
      width: 300px;
      height: 300px;
    }

    .btn-book {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    .btn-book:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    .btn-edit {
      background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
    }

    .btn-edit:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(78, 205, 196, 0.4);
    }

    .btn-delete {
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }

    .btn-delete:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    }

    .btn-delete:active {
      transform: scale(0.95);
    }

    .delete-confirm {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      border-radius: 16px;
      animation: slideUp 0.3s ease-out;
      z-index: 10;
    }

    .delete-confirm p {
      color: white;
      font-weight: 600;
      text-align: center;
      margin: 0;
    }

    .confirm-actions {
      display: flex;
      gap: 10px;
    }

    .confirm-actions button {
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .confirm-yes {
      background: #ff6b6b;
      color: white;
    }

    .confirm-yes:hover {
      background: #ff5252;
      transform: scale(1.05);
    }

    .confirm-no {
      background: white;
      color: #333;
    }

    .confirm-no:hover {
      background: #f0f0f0;
      transform: scale(1.05);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div 
        className="item-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showDeleteConfirm && (
          <div className="delete-confirm">
            <p>Delete this item?</p>
            <div className="confirm-actions">
              <button className="confirm-yes" onClick={confirmDelete}>Yes</button>
              <button className="confirm-no" onClick={() => setShowDeleteConfirm(false)}>No</button>
            </div>
          </div>
        )}

        <div className="item-image">
          {item.photo_url ? (
            <img src={item.photo_url} alt={item.item_name} />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
        </div>
        
        <div className="item-details">
          <h3>{item.item_name}</h3>
          <p className="item-description">{item.description || 'No description available'}</p>
          
          <div className="item-price">
            <span className="price">₹{item.rent_price.toLocaleString()}</span>
            <span className="price-type">/{item.rent_type === 'per_day' ? 'day' : 'booking'}</span>
          </div>
          
          <div className="item-actions">
            <button className="btn-icon btn-book" onClick={() => onBook(item)} title="Create Booking">
              <Calendar size={18} />
              Book
            </button>
            <button className="btn-icon btn-edit" onClick={() => onEdit(item)} title="Edit Item">
              <Edit size={18} />
            </button>
            <button className="btn-icon btn-delete" onClick={handleDelete} title="Delete Item">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;