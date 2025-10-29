// // FILE 25: src/utils/exportHelpers.js

// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import Papa from 'papaparse';
// import { formatDisplayDate } from './dateValidation';

// export const exportToCSV = (bookings) => {
//   const csvData = bookings.map(booking => ({
//     'Item ID': booking.item_id,
//     'Item Name': booking.items?.item_name || 'N/A',
//     'Customer Name': booking.customer_name,
//     'Mobile': booking.customer_mobile,
//     'Start Date': formatDisplayDate(booking.start_date),
//     'End Date': formatDisplayDate(booking.end_date),
//     'Discount': booking.discount ? `₹${booking.discount}` : '₹0', // 🔥 NEW
//     'Rent Price': `₹${booking.rent_price}`,
//     'Status': booking.status,
//     'Created At': formatDisplayDate(booking.created_at)
//   }));

//   const csv = Papa.unparse(csvData);
//   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//   const link = document.createElement('a');
//   const url = URL.createObjectURL(blob);
  
//   link.setAttribute('href', url);
//   link.setAttribute('download', `bookings_${new Date().toISOString().split('T')[0]}.csv`);
//   link.style.visibility = 'hidden';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// export const exportToPDF = (bookings) => {
//   const doc = new jsPDF();
  
//   // Add title
//   doc.setFontSize(18);
//   doc.text('Chaniya Choli Rental - Booking Report', 14, 20);
  
//   // Add date
//   doc.setFontSize(11);
//   doc.text(`Generated on: ${formatDisplayDate(new Date())}`, 14, 30);
  
//   // Prepare table data
//   // 🔥 NEW: Include discount in PDF table
//   const tableData = bookings.map(booking => [
//     booking.items?.item_name || 'N/A',
//     booking.customer_name,
//     booking.customer_mobile,
//     formatDisplayDate(booking.start_date),
//     formatDisplayDate(booking.end_date),
//     booking.discount ? `₹${booking.discount}` : '-', // 🔥 NEW
//     `₹${booking.rent_price}`,
//     booking.status.toUpperCase()
//   ]);
  
//   // Add table
//   doc.autoTable({
//     startY: 40,
//     head: [['Item', 'Customer', 'Mobile', 'Start', 'End', 'Discount', 'Price', 'Status']], // 🔥 NEW column
//     body: tableData,
//     theme: 'grid',
//     headStyles: {
//       fillColor: [102, 126, 234],
//       textColor: 255,
//       fontStyle: 'bold'
//     },
//     styles: {
//       fontSize: 8, // 🔥 Reduced to fit discount column
//       cellPadding: 5
//     },
//     alternateRowStyles: {
//       fillColor: [245, 245, 245]
//     }
//   });
  
//   // Add summary
//   const finalY = doc.lastAutoTable.finalY || 40;
//   doc.setFontSize(12);
//   doc.text(`Total Bookings: ${bookings.length}`, 14, finalY + 15);
  
//   const totalRevenue = bookings.reduce((sum, b) => sum + parseFloat(b.rent_price), 0);
//   const totalDiscount = bookings.reduce((sum, b) => sum + parseFloat(b.discount || 0), 0); // 🔥 NEW
  
//   doc.text(`Total Revenue: ₹${totalRevenue.toFixed(2)}`, 14, finalY + 25);
//   doc.text(`Total Discounts: ₹${totalDiscount.toFixed(2)}`, 14, finalY + 35); // 🔥 NEW
  
//   // Save PDF
//   doc.save(`bookings_report_${new Date().toISOString().split('T')[0]}.pdf`);
// };

// export const exportItemsToCSV = (items) => {
//   const csvData = items.map(item => ({
//     'Item ID': item.id,
//     'Item Name': item.item_name,
//     'Description': item.description || 'N/A',
//     'Rent Price': `₹${item.rent_price}`,
//     'Price Type': item.rent_type === 'per_day' ? 'Per Day' : 'Per Booking',
//     'Created At': formatDisplayDate(item.created_at)
//   }));

//   const csv = Papa.unparse(csvData);
//   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//   const link = document.createElement('a');
//   const url = URL.createObjectURL(blob);
  
//   link.setAttribute('href', url);
//   link.setAttribute('download', `items_${new Date().toISOString().split('T')[0]}.csv`);
//   link.style.visibility = 'hidden';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// FILE: src/utils/exportHelpers.js

import { jsPDF } from 'jspdf'; // ✅ Changed: Use named import
import autoTable from 'jspdf-autotable'; // ✅ Changed: Import autoTable properly
import Papa from 'papaparse';
import { formatDisplayDate } from './dateValidation';

// Enhanced CSV Export
export const exportToCSV = (bookings) => {
  if (bookings.length === 0) {
    alert('No data to export');
    return;
  }

  const csvData = bookings.map(booking => ({
    'Item ID': booking.item_id,
    'Item Name': booking.items?.item_name || 'N/A',
    'Customer Name': booking.customer_name,
    'Mobile': booking.customer_mobile,
    'Start Date': formatDisplayDate(booking.start_date),
    'End Date': formatDisplayDate(booking.end_date),
    'Discount': booking.discount && parseFloat(booking.discount) > 0 ? `₹${booking.discount}` : '₹0',
    'Rent Price': `₹${booking.rent_price}`,
    'Status': booking.status,
    'Created At': formatDisplayDate(booking.created_at)
  }));

  const csv = Papa.unparse(csvData);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `bookings_report_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Premium PDF Export
export const exportToPDF = (bookings) => {
  if (bookings.length === 0) {
    alert('No data to export');
    return;
  }

  const doc = new jsPDF('l', 'mm', 'a4'); // Landscape for better table view

  // Calculate statistics
  const totalRevenue = bookings.reduce((sum, b) => sum + parseFloat(b.rent_price || 0), 0);
  const totalDiscount = bookings.reduce((sum, b) => sum + parseFloat(b.discount || 0), 0);
  const activeBookings = bookings.filter(b => b.status === 'active').length;
  const completedBookings = bookings.filter(b => b.status === 'completed').length;

  // Header - Premium Title
  doc.setFontSize(24);
  doc.setTextColor(46, 64, 83); // Navy
  doc.text('Chaniya Choli Rental', 14, 18);
  
  doc.setFontSize(16);
  doc.setTextColor(127, 140, 141);
  doc.text('Booking Report & Analytics', 14, 26);

  // Subtitle
  doc.setFontSize(10);
  doc.setTextColor(93, 109, 126);
  doc.text(`Generated on: ${new Date().toLocaleDateString('en-IN', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}`, 14, 33);

  // Decorative line
  doc.setDrawColor(26, 188, 156); // Teal
  doc.setLineWidth(1);
  doc.line(14, 36, 283, 36);

  // Statistics Summary Box
  doc.setFillColor(248, 249, 250); // Light gray background
  doc.roundedRect(14, 40, 255, 26, 2, 2, 'F');
  
  // Summary border
  doc.setDrawColor(232, 236, 239);
  doc.setLineWidth(0.5);
  doc.roundedRect(14, 40, 255, 26, 2, 2, 'S');

  doc.setFontSize(10);
  doc.setTextColor(44, 62, 80);
  doc.setFont(undefined, 'bold');
  
  const statsY = 50;
  doc.text(`Total Bookings: ${bookings.length}`, 20, statsY);
  doc.text(`Active: ${activeBookings}`, 80, statsY);
  doc.text(`Completed: ${completedBookings}`, 130, statsY);
  
  doc.setFontSize(11);
  doc.setTextColor(26, 188, 156); // Teal
  doc.text(`Revenue: ₹${totalRevenue.toFixed(2)}`, 190, statsY);
  
  if (totalDiscount > 0) {
    doc.setFontSize(9);
    doc.setTextColor(231, 76, 60); // Red
    doc.text(`Discounts: -₹${totalDiscount.toFixed(2)}`, 20, statsY + 8);
  }

  // Table headers
  const headers = [['Item Name', 'Customer', 'Mobile', 'Start Date', 'End Date', 'Status', 'Discount', 'Price']];

  // Table data
  const tableData = bookings.map(booking => [
    booking.items?.item_name || 'N/A',
    booking.customer_name,
    booking.customer_mobile,
    formatDisplayDate(booking.start_date),
    formatDisplayDate(booking.end_date),
    booking.status.toUpperCase(),
    booking.discount && parseFloat(booking.discount) > 0 ? `₹${parseFloat(booking.discount).toFixed(2)}` : '-',
    `₹${parseFloat(booking.rent_price).toFixed(2)}`
  ]);

  // ✅ Use autoTable function
  autoTable(doc, {
    head: headers,
    body: tableData,
    startY: 70,
    theme: 'grid',
    styles: {
      fontSize: 9,
      cellPadding: 4,
      overflow: 'linebreak',
      halign: 'left',
      font: 'helvetica',
      textColor: [44, 62, 80]
    },
    headStyles: {
      fillColor: [46, 64, 83], // Navy
      textColor: [255, 255, 255],
      fontSize: 10,
      fontStyle: 'bold',
      halign: 'center',
      valign: 'middle'
    },
    columnStyles: {
      0: { cellWidth: 42 }, // Item Name
      1: { cellWidth: 35 }, // Customer
      2: { cellWidth: 28 }, // Mobile
      3: { cellWidth: 28 }, // Start Date
      4: { cellWidth: 28 }, // End Date
      5: { cellWidth: 24, halign: 'center' }, // Status
      6: { cellWidth: 22, halign: 'center' }, // Discount
      7: { cellWidth: 26, halign: 'right', fontStyle: 'bold' } // Price
    },
    alternateRowStyles: {
      fillColor: [248, 249, 250]
    },
    didParseCell: function(data) {
      // Color status cells
      if (data.column.index === 5 && data.section === 'body') {
        const status = data.cell.text[0].toLowerCase();
        if (status === 'active') {
          data.cell.styles.fillColor = [232, 248, 245]; // Light teal
          data.cell.styles.textColor = [26, 188, 156]; // Teal
          data.cell.styles.fontStyle = 'bold';
        } else if (status === 'completed') {
          data.cell.styles.fillColor = [235, 245, 251]; // Light blue
          data.cell.styles.textColor = [52, 152, 219]; // Blue
          data.cell.styles.fontStyle = 'bold';
        }
      }
      
      // Highlight discount cells
      if (data.column.index === 6 && data.section === 'body' && data.cell.text[0] !== '-') {
        data.cell.styles.textColor = [231, 76, 60]; // Red
        data.cell.styles.fontStyle = 'bold';
        data.cell.styles.fillColor = [254, 242, 242]; // Light red
      }
      
      // Highlight price column
      if (data.column.index === 7 && data.section === 'body') {
        data.cell.styles.fontStyle = 'bold';
        data.cell.styles.textColor = [46, 64, 83]; // Navy
      }
    },
    didDrawPage: function(data) {
      // Footer line
      doc.setDrawColor(232, 236, 239);
      doc.setLineWidth(0.5);
      doc.line(14, doc.internal.pageSize.height - 15, 283, doc.internal.pageSize.height - 15);
      
      // Page number
      const pageCount = doc.internal.getNumberOfPages();
      const pageNumber = doc.internal.getCurrentPageInfo().pageNumber;
      
      doc.setFontSize(9);
      doc.setTextColor(127, 140, 141);
      doc.text(
        `Page ${pageNumber} of ${pageCount}`,
        doc.internal.pageSize.width / 2,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );
      
      // Footer text
      doc.setFontSize(8);
      doc.text('Chaniya Choli Rental System', 14, doc.internal.pageSize.height - 10);
      doc.text(
        new Date().toLocaleDateString('en-IN'),
        doc.internal.pageSize.width - 14,
        doc.internal.pageSize.height - 10,
        { align: 'right' }
      );
    }
  });

  // Final Summary Box (if space available)
  const finalY = doc.lastAutoTable.finalY + 15;
  
  if (finalY < doc.internal.pageSize.height - 65) {
    // Dark summary box
    doc.setFillColor(46, 64, 83); // Navy
    doc.roundedRect(14, finalY, 255, 38, 3, 3, 'F');
    
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Report Summary', 20, finalY + 12);
    
    // Summary data
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    let summaryX = 20;
    const summaryItems = [
      { label: 'Total Bookings', value: bookings.length },
      { label: 'Active', value: activeBookings },
      { label: 'Completed', value: completedBookings },
      { label: 'Revenue', value: `₹${totalRevenue.toFixed(2)}` }
    ];
    
    summaryItems.forEach(item => {
      doc.setFont(undefined, 'normal');
      doc.setTextColor(200, 200, 200);
      doc.text(item.label, summaryX, finalY + 24);
      
      doc.setFont(undefined, 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(String(item.value), summaryX, finalY + 32);
      
      summaryX += 62;
    });
    
    // Discount line if applicable
    if (totalDiscount > 0) {
      doc.setFontSize(9);
      doc.setTextColor(255, 193, 193);
      doc.text(`Total Discounts Applied: ₹${totalDiscount.toFixed(2)}`, 20, finalY + 42);
    }
  }

  // Save PDF
  const fileName = `chaniya_choli_bookings_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};

// Export Items to CSV
export const exportItemsToCSV = (items) => {
  if (items.length === 0) {
    alert('No items to export');
    return;
  }

  const csvData = items.map(item => ({
    'Item ID': item.id,
    'Item Name': item.item_name,
    'Description': item.description || 'N/A',
    'Rent Price': `₹${item.rent_price}`,
    'Price Type': item.rent_type === 'per_day' ? 'Per Day' : 'Per Booking',
    'Created At': formatDisplayDate(item.created_at)
  }));

  const csv = Papa.unparse(csvData);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `items_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
