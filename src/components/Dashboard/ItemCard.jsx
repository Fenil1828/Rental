// // // // FILE 15: src/components/Dashboard/ItemCard.jsx

// // // import React from 'react';
// // // import { Trash2, Edit, Calendar } from 'lucide-react';
// // // import './Dashboard.css';

// // // const ItemCard = ({ item, onEdit, onDelete, onBook }) => {
// // //   return (
// // //     <div className="item-card">
// // //       <div className="item-image">
// // //         {item.photo_url ? (
// // //           <img src={item.photo_url} alt={item.item_name} />
// // //         ) : (
// // //           <div className="no-image">No Image</div>
// // //         )}
// // //       </div>
      
// // //       <div className="item-details">
// // //         <h3>{item.item_name}</h3>
// // //         <p className="item-description">{item.description}</p>
        
// // //         <div className="item-price">
// // //           <span className="price">₹{item.rent_price}</span>
// // //           <span className="price-type">/{item.rent_type === 'per_day' ? 'day' : 'booking'}</span>
// // //         </div>
        
// // //         <div className="item-actions">
// // //           <button className="btn-icon btn-book" onClick={() => onBook(item)} title="Create Booking">
// // //             <Calendar size={18} />
// // //             Book
// // //           </button>
// // //           <button className="btn-icon btn-edit" onClick={() => onEdit(item)} title="Edit Item">
// // //             <Edit size={18} />
// // //           </button>
// // //           {/* 🔥 CHANGED: Pass entire item object instead of just ID */}
// // //           <button className="btn-icon btn-delete" onClick={() => onDelete(item)} title="Delete Item">
// // //             <Trash2 size={18} />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ItemCard;


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
// //           <div className="no-image">No Image Available</div>
// //         )}
// //       </div>
      
// //       <div className="item-details">
// //         <h3>{item.item_name}</h3>
// //         <p className="item-description">{item.description || 'No description available'}</p>
        
// //         <div className="item-price">
// //           <span className="price">₹{item.rent_price.toLocaleString()}</span>
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
// //           <button className="btn-icon btn-delete" onClick={() => onDelete(item)} title="Delete Item">
// //             <Trash2 size={18} />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ItemCard;

// import React, { useState } from 'react';
// import { Trash2, Edit, Calendar } from 'lucide-react';

// const ItemCard = ({ item, onEdit, onDelete, onBook }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

//   const handleDelete = () => {
//     setShowDeleteConfirm(true);
//   };

//   const confirmDelete = () => {
//     onDelete(item);
//     setShowDeleteConfirm(false);
//   };

//   const styles = `
//     @keyframes slideUp {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     @keyframes shimmer {
//       0% { background-position: -1000px 0; }
//       100% { background-position: 1000px 0; }
//     }

//     @keyframes pulse {
//       0%, 100% { transform: scale(1); }
//       50% { transform: scale(1.1); }
//     }

//     @keyframes float {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-8px); }
//     }

//     .item-card {
//       background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
//       border-radius: 16px;
//       overflow: hidden;
//       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//       transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
//       animation: slideUp 0.6s ease-out;
//       position: relative;
//       cursor: pointer;
//       border: 1px solid rgba(0, 0, 0, 0.05);
//     }

//     .item-card:hover {
//       transform: translateY(-12px);
//       box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
//       border-color: rgba(0, 0, 0, 0.1);
//     }

//     .item-card::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       height: 4px;
//       background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b);
//       background-size: 300% 100%;
//     }

//     .item-card:hover::before {
//       animation: shimmer 3s infinite;
//     }

//     .item-image {
//       position: relative;
//       height: 220px;
//       background: linear-gradient(135deg, #e0e7ff 0%, #f3e7e9 100%);
//       overflow: hidden;
//     }

//     .item-image img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       transition: transform 0.6s ease;
//     }

//     .item-card:hover .item-image img {
//       transform: scale(1.12) rotate(1deg);
//     }

//     .no-image {
//       width: 100%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//       color: white;
//       font-weight: 500;
//       font-size: 14px;
//     }

//     .item-details {
//       padding: 20px;
//       background: white;
//     }

//     .item-details h3 {
//       margin: 0 0 10px 0;
//       font-size: 18px;
//       font-weight: 700;
//       color: #1a1a1a;
//       transition: color 0.3s ease;
//     }

//     .item-card:hover .item-details h3 {
//       color: #667eea;
//     }

//     .item-description {
//       margin: 8px 0 14px 0;
//       font-size: 14px;
//       color: #666;
//       line-height: 1.5;
//       opacity: 0.85;
//     }

//     .item-price {
//       display: flex;
//       align-items: baseline;
//       gap: 6px;
//       margin-bottom: 16px;
//       padding: 10px 12px;
//       background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
//       border-radius: 8px;
//       transition: all 0.3s ease;
//     }

//     .item-card:hover .item-price {
//       transform: scale(1.02);
//       box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
//     }

//     .price {
//       font-size: 22px;
//       font-weight: 800;
//       color: #ff6b6b;
//     }

//     .price-type {
//       font-size: 12px;
//       color: #d63031;
//       font-weight: 600;
//       letter-spacing: 0.5px;
//     }

//     .item-actions {
//       display: flex;
//       gap: 8px;
//       justify-content: space-between;
//     }

//     .btn-icon {
//       flex: 1;
//       padding: 10px;
//       border: none;
//       border-radius: 10px;
//       font-size: 13px;
//       font-weight: 600;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       gap: 6px;
//       position: relative;
//       overflow: hidden;
//     }

//     .btn-icon::before {
//       content: '';
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       width: 0;
//       height: 0;
//       border-radius: 50%;
//       background: rgba(255, 255, 255, 0.3);
//       transform: translate(-50%, -50%);
//       transition: width 0.6s, height 0.6s;
//     }

//     .btn-icon:active::before {
//       width: 300px;
//       height: 300px;
//     }

//     .btn-book {
//       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//       color: white;
//       box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
//     }

//     .btn-book:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
//     }

//     .btn-edit {
//       background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
//       color: white;
//       box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
//     }

//     .btn-edit:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 6px 20px rgba(78, 205, 196, 0.4);
//     }

//     .btn-delete {
//       background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
//       color: white;
//       box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
//     }

//     .btn-delete:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
//     }

//     .btn-delete:active {
//       transform: scale(0.95);
//     }

//     .delete-confirm {
//       position: absolute;
//       inset: 0;
//       background: rgba(0, 0, 0, 0.7);
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       gap: 12px;
//       border-radius: 16px;
//       animation: slideUp 0.3s ease-out;
//       z-index: 10;
//     }

//     .delete-confirm p {
//       color: white;
//       font-weight: 600;
//       text-align: center;
//       margin: 0;
//     }

//     .confirm-actions {
//       display: flex;
//       gap: 10px;
//     }

//     .confirm-actions button {
//       padding: 8px 16px;
//       border: none;
//       border-radius: 8px;
//       font-weight: 600;
//       cursor: pointer;
//       transition: all 0.3s ease;
//     }

//     .confirm-yes {
//       background: #ff6b6b;
//       color: white;
//     }

//     .confirm-yes:hover {
//       background: #ff5252;
//       transform: scale(1.05);
//     }

//     .confirm-no {
//       background: white;
//       color: #333;
//     }

//     .confirm-no:hover {
//       background: #f0f0f0;
//       transform: scale(1.05);
//     }
//   `;

//   return (
//     <>
//       <style>{styles}</style>
//       <div 
//         className="item-card"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {showDeleteConfirm && (
//           <div className="delete-confirm">
//             <p>Delete this item?</p>
//             <div className="confirm-actions">
//               <button className="confirm-yes" onClick={confirmDelete}>Yes</button>
//               <button className="confirm-no" onClick={() => setShowDeleteConfirm(false)}>No</button>
//             </div>
//           </div>
//         )}

//         <div className="item-image">
//           {item.photo_url ? (
//             <img src={item.photo_url} alt={item.item_name} />
//           ) : (
//             <div className="no-image">No Image Available</div>
//           )}
//         </div>
        
//         <div className="item-details">
//           <h3>{item.item_name}</h3>
//           <p className="item-description">{item.description || 'No description available'}</p>
          
//           <div className="item-price">
//             <span className="price">₹{item.rent_price.toLocaleString()}</span>
//             <span className="price-type">/{item.rent_type === 'per_day' ? 'day' : 'booking'}</span>
//           </div>
          
//           <div className="item-actions">
//             <button className="btn-icon btn-book" onClick={() => onBook(item)} title="Create Booking">
//               <Calendar size={18} />
//               Book
//             </button>
//             <button className="btn-icon btn-edit" onClick={() => onEdit(item)} title="Edit Item">
//               <Edit size={18} />
//             </button>
//             <button className="btn-icon btn-delete" onClick={handleDelete} title="Delete Item">
//               <Trash2 size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
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
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .item-card {
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: fadeIn 0.5s ease-out;
      position: relative;
      cursor: pointer;
      border: 1px solid #e5e7eb;
    }

    .item-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
      border-color: #d1d5db;
    }

    .item-image {
      position: relative;
      height: 240px;
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      overflow: hidden;
    }

    .item-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .item-card:hover .item-image img {
      transform: scale(1.03);
    }

    .no-image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
      color: white;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.5px;
    }

    .item-details {
      padding: 20px;
      background: white;
    }

    .item-details h3 {
      margin: 0 0 8px 0;
      font-size: 18px;
      font-weight: 600;
      color: #111827;
      transition: color 0.3s ease;
      line-height: 1.4;
    }

    .item-card:hover .item-details h3 {
      color: #4b5563;
    }

    .item-description {
      margin: 0 0 16px 0;
      font-size: 14px;
      color: #6b7280;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .item-price {
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-bottom: 16px;
      padding: 14px 16px;
      background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
      border-radius: 10px;
      border: 1px solid #4b5563;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    }

    .item-price::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.5s ease;
    }

    .item-card:hover .item-price::before {
      left: 100%;
    }

    .item-card:hover .item-price {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
      border-color: #6b7280;
    }

    .price {
      font-size: 24px;
      font-weight: 800;
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      letter-spacing: -0.5px;
    }

    .price-type {
      font-size: 13px;
      color: #d1d5db;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .item-actions {
      display: flex;
      gap: 8px;
      justify-content: space-between;
    }

    .btn-icon {
      flex: 1;
      padding: 10px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      position: relative;
      overflow: hidden;
      background: white;
    }

    .btn-book {
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
      color: white;
      border: 1px solid #1e40af;
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      font-weight: 700;
      position: relative;
      overflow: hidden;
    }

    .btn-book::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s ease;
    }

    .btn-book:hover::before {
      left: 100%;
    }

    .btn-book:hover {
      background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%);
      border-color: #1e3a8a;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    .btn-edit {
      color: #374151;
      border-color: #d1d5db;
    }

    .btn-edit:hover {
      background: #f9fafb;
      border-color: #9ca3af;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .btn-delete {
      color: #6b7280;
      border-color: #d1d5db;
    }

    .btn-delete:hover {
      background: #fef2f2;
      border-color: #fca5a5;
      color: #dc2626;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
    }

    .btn-icon:active {
      transform: translateY(0);
    }

    .delete-confirm {
      position: absolute;
      inset: 0;
      background: rgba(17, 24, 39, 0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      border-radius: 12px;
      animation: fadeIn 0.25s ease-out;
      z-index: 10;
      backdrop-filter: blur(4px);
    }

    .delete-confirm p {
      color: white;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      margin: 0;
    }

    .confirm-actions {
      display: flex;
      gap: 12px;
    }

    .confirm-actions button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .confirm-yes {
      background: #dc2626;
      color: white;
    }

    .confirm-yes:hover {
      background: #b91c1c;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
    }

    .confirm-no {
      background: white;
      color: #374151;
      border: 1px solid #d1d5db;
    }

    .confirm-no:hover {
      background: #f9fafb;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
              <button className="confirm-yes" onClick={confirmDelete}>Yes, Delete</button>
              <button className="confirm-no" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
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