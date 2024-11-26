import React from 'react';
import { NavLink } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; // For the search icon
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


function AboutUs() {
  const styles = {
    navLinks: {
      display: 'flex',
      listStyle: 'none',
    },
    navLink: {
      margin: '0 5px',
      color: 'black',
      textDecoration: 'none',
      fontSize: '28px',
      fontWeight: 'bold',
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
      marginLeft: '500px',
    },
    searchInput: {
      border: 'none',
      outline: 'none',
      padding: '5px',
      borderRadius: '50px',
      width: '150px',
    },
  };

  return (
    <div style={{ fontFamily: 'Kaushan Script, Inria Sans' }}>
      {/* Navbar */}
      <nav style={{
        position: 'absolute',
        top: '14px',
        width: '100%',
        padding: '0px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
      }}>
        <div style={{ fontSize: '34px', fontWeight: 'bold', color: 'white' }}>Your Logo</div>
        <div style={styles.searchBar}>
          <FaSearch style={{ marginRight: '10px', color: 'gray' }} />
          <input type="text" placeholder="Search..." style={styles.searchInput} />
        </div>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: '0px 0px',
        }}>
          <li><NavLink exact to="/" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'black'}>Home</NavLink></li>
        <li><NavLink to="/store" activeClassName="active" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'black'}>Store</NavLink></li>
        <li><NavLink to="/about" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'black'}>About</NavLink></li>
        <li><NavLink to="/contact" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'black'}>Contact</NavLink></li>
        <li><NavLink to="/login" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'black'}>Login</NavLink></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: '#F3F4F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0px',
        boxShadow: '0 4px 8px rgba(0.2, 0.2, 0.2, 0.2)',
        color: 'rgba(0, 0, 0, 0.5)',
      }}>
        {/* Background Images */}
        <div style={{
          position: 'absolute',
          top: '0%',
          left: '1%',
          width: '65%',
          height: '900px',
          backgroundImage: 'url("./AboutPic/1.jpg")',
          backgroundSize: 'cover',
          clipPath: "polygon(0% 0%, 100% 0%, 76% 47%, 70% 100%, 0% 100%)",
        }}></div>
        <div style={{
          position: 'absolute',
          top: '0%',
          right: '1%',
          width: '56%',
          height: '900px',
          backgroundImage: 'url("./AboutPic/2.png")',
          backgroundSize: 'cover',
          backgroundColor: '#D3D3D3',
          clipPath: "polygon(44% 0, 100% 1%, 100% 100%, 8% 100%, 14% 50%)",
        }}></div>

        {/* Hero Text */}
        <div style={{
          textAlign: 'left',
          zIndex: 1,
          color: '#333',
          marginRight: '600px',
          width: '40%',
        }}>
          <h1 style={{ fontSize: '88px', fontWeight: 'bold', color: 'yellow', marginBottom: '10px' }}>About Us</h1>
          <p style={{ fontSize: '30px', maxWidth: '500px', fontWeight: 'bold', color: '#F0F0F0' }}>
            Discover our story, our values, and how we aim to make a difference.
          </p>
        </div>
      </section>

      {/* New Section with Images and Text Content */}
      <section style={{ display: 'flex', padding: '60px 40px', alignItems: 'center' }}>
        {/* Left: Images with Zoom Effect */}
        <div style={{ flex: 1, display: 'flex', gap: '20px' }}>
          {['/AboutPic/3.png', '/AboutPic/4.png', '/AboutPic/5.png'].map((src, index) => (
            <div key={index} style={{
              width: '300px',
              height: '550px',
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '10px',
                textAlign: 'center',
                position: 'relative',
                top: '450px',
                width: '100%',
              }}>
                <h3>Image Title {index + 1}</h3>
                <p>Short description here.</p>
                <a href="#" style={{ color: 'yellow', textDecoration: 'underline' }}>See More</a>
              </div>
            </div>
          ))}
        </div>
        

        {/* Right: Text Content with Sign-Up Link */}
        <div style={{
          flex: 1,
          padding: '20px',
          textAlign: 'center',
          color: '#333',
        }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>Join Our Community</h2>
          <p style={{ fontSize: '20px', marginBottom: '20px' }}>
            Be a part of our journey and stay connected with the latest updates, events, and opportunities.
          </p>
          <a href="#" style={{ color: 'blue', fontSize: '18px', textDecoration: 'underline' }}>Sign Up</a>
        </div>
      </section>
   

    {/* New Section with Image on Left and Text on Right */}
    <section style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: '#E8E8E8' }}>
    {/* Left: Image */}
    <div style={{
      flex: 1,
      backgroundImage: 'url("./AboutPic/Screenshot of About Us .pdf (2).jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0px',
      width: '180%',
      height: '700px',
    }}></div>

    {/* Right: Text Content */}
    <div style={{
      flex: 1,
      padding: '20px',
      textAlign: 'center',
      color: '#333',
    }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>Our Mission</h2>
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>
        We strive to make a positive impact through our products and services.
        Join us on this journey to inspire, create, and make a difference.
      </p>
      <a href="#" style={{ color: 'black', fontSize: '18px', textDecoration: 'underline' }}>See More</a>
    </div>
  </section>

  {/* New Section with Image on right and Text on left */}
  <section style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: 'white' }}>
    {/* Right: Text Content */}
    <div style={{
      flex: 1,
      padding: '20px',
      textAlign: 'center',
      color: '#333',
    }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>Our Mission</h2>
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>
        We strive to make a positive impact through our products and services.
        Join us on this journey to inspire, create, and make a difference.
      </p>
      <a href="#" style={{ color: 'black', fontSize: '18px', textDecoration: 'underline' }}>See More</a>
    </div>
   
   
    {/* Left: Image */}
    <div style={{
      flex: 1,
      backgroundImage: 'url("./AboutPic/Screenshot of About Us .pdf (1).jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0px',
      width: '100%',
      height: '700px',
    }}></div>
  </section>

  <div style={{ fontFamily: 'Kaushan Script, Inria Sans' }}>
      
      {/* New Section with Text and 3 Centered Image Blocks */}
      <section style={{ backgroundColor: '#E8E8E8', padding: '60px 0', textAlign: 'center' }}>
        {/* Main Heading and Paragraph */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>Our Vision</h2>
          <p style={{ fontSize: '20px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
            Learn more about what drives us forward, our values, and our goals for the future.
          </p>
        </div>

        {/* Image Blocks */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* Image Block 1 */}
          <div style={{
            width: '300px',
            textAlign: 'center',
          }}>
            <div style={{
              backgroundImage: 'url("./AboutPic/Screenshot of About Us .pdf (3).jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              width: '100%',
              height: '400px',
            }}></div>
            {/* Text Content Below Image */}
            <div style={{ marginTop: '15px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Our Story</h3>
              <p style={{ fontSize: '16px', color: '#555' }}>
                Discover the journey that brought us here and where we're headed next.
              </p>
              <a href="#" style={{ color: 'blue', fontSize: '16px', textDecoration: 'underline' }}>See More</a>
            </div>
          </div>

          {/* Image Block 2 */}
          <div style={{
            width: '300px',
            textAlign: 'center',
          }}>
            <div style={{
              backgroundImage: 'url("./AboutPic/Screenshot of About Us .pdf (4).jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              width: '100%',
              height: '400px',
            }}></div>
            {/* Text Content Below Image */}
            <div style={{ marginTop: '15px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Our Team</h3>
              <p style={{ fontSize: '16px', color: '#555' }}>
                Meet the dedicated individuals working behind the scenes.
              </p>
              <a href="#" style={{ color: 'blue', fontSize: '16px', textDecoration: 'underline' }}>See More</a>
            </div>
          </div>

          {/* Image Block 3 */}
          <div style={{
            width: '300px',
            textAlign: 'center',
          }}>
            <div style={{
              backgroundImage: 'url("./AboutPic/Screenshot of About Us .pdf (5).jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              width: '100%',
              height: '400px',
            }}></div>
            {/* Text Content Below Image */}
            <div style={{ marginTop: '15px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Our Future</h3>
              <p style={{ fontSize: '16px', color: '#555' }}>
                See our vision for tomorrow and the goals we strive to achieve.
              </p>
              <a href="#" style={{ color: 'blue', fontSize: '16px', textDecoration: 'underline' }}>See More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
      {/* New Section with Image on Left and Text on Right */}
    <section style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: 'white' }}>
    {/* Left: Image */}
    <div style={{
      flex: 1,
      backgroundImage: 'url("./AboutPic/11.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '0px',
      width: '180%',
      height: '700px',
    }}></div>

    {/* Right: Text Content */}
    <div style={{
      flex: 1,
      padding: '20px',
      textAlign: 'center',
      color: '#333',
    }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>Our Mission</h2>
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>
        We strive to make a positive impact through our products and services.
        Join us on this journey to inspire, create, and make a difference.
      </p>
      <a href="#" style={{ color: 'black', fontSize: '18px', textDecoration: 'underline' }}>See More</a>
    </div>
  </section>

  <footer style={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px', textAlign: 'left' }}>
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

  </div>

  );
}

export default AboutUs;
