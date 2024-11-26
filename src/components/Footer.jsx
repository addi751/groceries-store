import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Footers = () => {
  return (
    <footer style={{ backgroundColor: '#031E00', color: '#fff', padding: '40px 20px', textAlign: 'left', marginTop: '0px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Logo Section */}
        <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>YOUR LOGO</h2>
        </div>
        
        {/* Product Column */}
        <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>PRODUCT</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
            <li>Product Overview</li>
            <li>Omni-Channel</li>
            <li>Sourcing</li>
            <li>Compliance & Contracting</li>
            <li>Payments</li>
            <li>Data & ReportingPricing</li>
          </ul>
        </div>
        
        {/* Why Worksome Column */}
        <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>WHY WORKSOME</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
            <li>Product Overview</li>
            <li>Omni-Channel</li>
            <li>Sourcing</li>
            <li>Compliance & Contracting</li>
            <li>Payments</li>
            <li>Data & ReportingPricing</li>
          </ul>
        </div>
        
        {/* Resources Column */}
        <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>RESOURCES</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
            <li>Product Overview</li>
            <li>Omni-Channel</li>
            <li>Sourcing</li>
            <li>Compliance & Contracting</li>
            <li>Payments</li>
            <li>Data & ReportingPricing</li>
          </ul>
        </div>
      </div>
        
      {/* Social Media Icons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        <FaPhoneAlt size={20} />
        <FaEnvelope size={20} />
        <FaFacebookF size={20} />
        <FaLinkedinIn size={20} />
        <FaTwitter size={20} />
      </div>
    </footer>
  );
};

export default Footers;
