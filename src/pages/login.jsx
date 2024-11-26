import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Login = () => {
  const styles = {
    navbar: {
      width: '95%',
      padding: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'right',
      position: 'absolute',
      top: 0,
    },
    logo: {
      color: 'black',
      fontSize: '24px',
      fontFamily: "'Cinzel', serif",
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
    },
    navLink: {
      margin: '0 10px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '24px',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: 'yellow',
    },
    container: {
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    leftSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
    },
    loginHeading: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '20px',
      marginTop: '80px',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginBottom: '40px',
      },
      icon: {
        width: '42px',
        height: '42px',
        cursor: 'pointer',
      },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '500px',
    },
    Heading: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '0px',
        marginTop: '10px',
      },
    inputHeading: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '10px',
      },
    input: {
      padding: '10px',
      marginBottom: '50px',
      borderRadius: '15px',
      border: '1px solid #ddd',
      outline: 'none',
    },
    loginButton: {
      padding: '10px',
      maxWidth: '300px',
      borderRadius: '15px',
      border: '2px solid yellow',
      backgroundColor: 'transparent',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '23px',
      cursor: 'pointer',
      marginBottom: '30px',
      marginLeft: '90px',
    },
    helpLink: {
      fontSize: '24px',
      color: 'gray',
      textAlign: 'center',
      cursor: 'pointer',
      marginBottom: '5px',
    },
    rightSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url("./AboutPic/Screenshot of About Us .pdf (2).jpg")', // Replace with actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '30% 0px 0px 0px',
      boxShadow: '0 4px 8px rgba(0.2, 0.2, 0.2, 0.8)',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      height: '100vh',
      marginBottom: '5px',

    },
    rightHeading: {
      fontSize: '44px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    rightParagraph: {
      fontSize: '36px',
      lineHeight: '1.5',
      maxWidth: '80%',
    },
  };

  return (
    <>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>GroceryStore</div>
        <ul style={styles.navLinks}>
          <li><NavLink exact to="/" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Home</NavLink></li>
          <li><NavLink to="/store" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Store</NavLink></li>
          <li><NavLink to="/about" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>About</NavLink></li>
          <li><NavLink to="/contact" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Contact</NavLink></li>
          <li><NavLink to="/login" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Login</NavLink></li>
        </ul>
      </nav>

      {/* Login Page Content */}
      <div style={styles.container}>
        {/* Left Section - Login Form */}
        <div style={styles.leftSection}>
          <h2 style={styles.loginHeading}>User Login</h2>
          <div style={styles.iconContainer}>
            <img src="/Pic/gmail-mail-icon-for-web-design-free-png.webp" alt="Google Logo" style={styles.icon} /> {/* Google Logo */}
            <h2 style={styles.Heading}>Or</h2>
            <img src="/Pic/OIP12-removebg-preview.png" alt="Facebook Logo" style={styles.icon} /> {/* Facebook Logo */}
          </div>
          <form style={styles.form}>
          <h2 style={styles.inputHeading}>Email</h2>
            <input type="email" placeholder="abc@example.com" style={styles.input} /> 
            <h2 style={styles.inputHeading}>Password</h2>
            <input type="password" placeholder="Password" style={styles.input} />
            <button type="submit" style={styles.loginButton}>Log In</button>
          </form>
          <div style={styles.helpLink}>Help</div>
          <div style={styles.helpLink}>Forgot Password?</div>
        </div>

        {/* Right Section - Image with Text */}
        <div style={styles.rightSection}>
          <h2 style={styles.rightHeading}>Welcome to GroceryStore</h2>
          <p style={styles.rightParagraph}>
            Discover a wide range of fresh and organic products to meet all your grocery needs.
          </p>
        </div>
       </div>
       
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px', textAlign: 'left', marginTop: '0px' }}>
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
      
    </>
  );
};

export default Login;
