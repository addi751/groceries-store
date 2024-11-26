import React from 'react';
import { FaSearch } from 'react-icons/fa'; // For the search icon
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const styles = {
    heroContainer: {
      width: '100%',
      height: '150vh',
      backgroundImage: 'url("./pic/54.jpg")',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroCard: {
      width: '90%',
      height: '150vh',
      backgroundImage: 'url("./pic/55.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      top: 100,
    },
    navbar: {
      width: '95%',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
    },
    logo: {
      color: 'white',
      fontSize: '24px',
      fontFamily: "'Cinzel', serif", // Greek-inspired font
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
    },
    navLink: {
      margin: '0 15px',
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: 'yellow',
    },
    searchBar: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '50px',
      padding: '0px 20px',
      marginLeft: '280px',
      
    },
    searchInput: {
      border: 'none',
      outline: 'none',
      padding: '5px',
      borderRadius: '50px',
      width: '150px',
      backgroundColor: '',
      
      
    },
    heroText: {
      padding: '20px',
      borderRadius: '10px',
      marginTop: '10px', // Push text down to avoid overlap with navbar
    },
    heroHeading: {
      fontSize: '98px',
      fontWeight:'bold',
      fontFamily: "'Cinzel', serif", // Greek-inspired font
    },
    heroParagraph: {
      fontSize: '48px',
      margin: '45px 0',
      fontFamily: "serif", // Greek-inspired font
    },
    shopNowBtn: {
      padding: '10px 80px',
      backgroundColor: 'transparent',
      color: '#E7D37F',
      border: '4px solid #E7D37F',
      borderRadius: '10px',
      fontSize: '28px',
      fontWeight:'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    shopNowBtnHover: {
      backgroundColor: '#E7D37F',
      color: '#333',
    },
  };

  return (
    <div style={styles.heroContainer}>
      {/* Hero Card with Navbar inside */}
      <div style={styles.heroCard}>
        
        {/* Navbar */}
        <nav style={styles.navbar}>
          <div style={styles.logo}>GroceryStore</div>
          <div style={styles.searchBar}>
            <FaSearch style={{ marginRight: '10px', color: 'gray' }} /> {/* Search icon */}
            <input type="text" placeholder="Search..." style={styles.searchInput} />
          </div>
          <ul style={styles.navLinks}>
          <li><NavLink exact to="/" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Home</NavLink></li>
        <li><NavLink to="/store" activeClassName="active" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Store</NavLink></li>
        <li><NavLink to="/about" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>About</NavLink></li>
        <li><NavLink to="/contact" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Contact</NavLink></li>
        <li><NavLink to="/login" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'white'}>Login</NavLink></li>
         </ul>
        </nav>

        {/* Hero Text */}
        <div style={styles.heroText}>
          <h1 style={styles.heroHeading}>Millions Of <br /> Happy</h1>
          <p style={styles.heroParagraph}>Send unlimited free texts and make WiFi calls <br />
            from a free phone number. Download <br />
            the free app or sign up online to <br />
            pick your free phone number.
          </p>
          <button
            style={styles.shopNowBtn}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = styles.shopNowBtnHover.backgroundColor;
              e.target.style.color = styles.shopNowBtnHover.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#E7D37F';
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
