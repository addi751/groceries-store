import React from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Icon for submit button
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


// Sample background image URL (replace with your own image URL)
const backgroundImage = './Pic/Pic.png';

const Contact = () => {
    const styles = {
        container: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
        },
        navbar: {
            width: '95%',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
        },
        logo: {
            fontSize: '24px',
            fontFamily: "'Cinzel', serif",
        },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
            marginRight: '508px',
        },
        navLink: {
            margin: '0 15px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '22px',
            transition: 'color 0.3s ease',
        },
        navLinkHover: {
            color: 'yellow',
        },
        content: {
            textAlign: 'center',
            maxWidth: '600px',
            marginBottom: '30px',
            marginTop: '60px',
        },
        heading: {
            fontSize: '36px',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '18px',
            color: 'white',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '500px',
            padding: '40px 20px',
            borderRadius: '10px',
            marginBottom: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        formTitle: {
            textAlign: 'center',
            fontSize: '34px',
            color: 'white',
            margin: '40px 0px',
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
            color: 'white',
        },
        input: {
            backgroundColor: 'rgba(128, 128, 128, 0.2)', // Gray with low opacity
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            color: 'white',
            outline: 'none',
            fontSize: '16px',
            marginTop: '5px',
        },
        submitButton: {
            marginTop: '20px',
            padding: '10px',
            border: '2px solid yellow',
            backgroundColor: 'transparent',
            color: 'yellow',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            fontWeight: 'bold',
        },
        footer: {
            textAlign: 'center',
            marginTop: '20px',
            color: 'white',
            maxWidth: '600px',
        },
    };

    return (
        <>
        <div style={styles.container}>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <div style={styles.logo}>GroceryStore</div>
                <ul style={styles.navLinks}>
                    <li>
                        <NavLink
                            exact
                            to="/"
                            style={styles.navLink}
                            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                            onMouseLeave={(e) => (e.target.style.color = 'white')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/store"
                            style={styles.navLink}
                            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                            onMouseLeave={(e) => (e.target.style.color = 'white')}
                        >
                            Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={styles.navLink}
                            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                            onMouseLeave={(e) => (e.target.style.color = 'white')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={styles.navLink}
                            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                            onMouseLeave={(e) => (e.target.style.color = 'white')}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            style={styles.navLink}
                            onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                            onMouseLeave={(e) => (e.target.style.color = 'white')}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Content Section */}
            <div style={styles.content}>
                <h2 style={styles.heading}>Contact Us</h2>
                <p style={styles.paragraph}>
                    We'd love to hear from you! Please fill out the form below and we'll get in touch as soon as possible.
                </p>
            </div>

            {/* Contact Form */}
            <h3 style={styles.formTitle}>Get in Touch</h3> 
            <form style={styles.form}>
                <div style={styles.formGroup}>
                    <label>Name</label>
                    <input type="text" style={styles.input} placeholder="Your Name" />
                </div>
                <div style={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" style={styles.input} placeholder="Your Email" />
                </div>
                <div style={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" style={styles.input} placeholder="Your Password" />
                </div>
                <div style={styles.formGroup}>
                    <label>Message</label>
                    <textarea style={styles.input} placeholder="Your Message" rows="4"></textarea>
                </div>
                <button type="submit" style={styles.submitButton}>
                    <FaPaperPlane style={{ marginRight: '8px' }} /> Submit
                </button>
            </form>
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px', textAlign: 'left', marginTop: '0px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '2100px', margin: '0 auto' }}>
        
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

export default Contact;
