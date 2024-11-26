import React from 'react';
import { FaSearch, FaStar  } from 'react-icons/fa'; // For the search icon
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';




const HeroSection = () => {
  const styles = {
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
      color: 'gray',
      fontSize: '24px',
      fontFamily: "'Cinzel', serif", // Greek-inspired font
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
    },
    navLink: {
      margin: '0 15px',
      color: 'gray',
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
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '40px 40px',
      backgroundColor: '#F5F5F5',
      fontFamily: "'Cinzel', serif",
      height: '800px'
    },
    content: {
      width: '25%',
      color: '#6D6D6D',
      marginLeft:'60px',

    },
    heading: {
      fontSize: '40px',
      fontWeight: 'normal',
      marginBottom: '10px',
    },
    highlight: {
      color: '#FFC107',
      fontSize: '48px',
      fontWeight: 'bold',
      fontFamily: "'Brush Script MT', cursive",
    },
    paragraph: {
      fontSize: '16px',
      marginBottom: '20px',
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      marginBottom: '20px',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      border: '2px solid #FFC107',
      borderRadius: '5px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
      image: {
        width: '60%',
        height: '600px',
        objectFit: 'cover',
        border: '0px solid ',
        borderRadius: '200px 0px 0px 200px',
        position: 'absolute',
        backgroundColor: '#f0f0f0', // Light background for the banner
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '590px',
        marginTop: '100px',
      },
    // image: {
    //   width: '100%',
    //   height: '100%',
    //   objectFit: 'cover',
    //   borderRadius: '200px 200px', // Ensures rounded corners
    //   position: 'relative',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   marginLeft: '800px',
    //   marginTop: '100px',
    // },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '60%',
      height: '78%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light black overlay
      zIndex: 1,
      marginLeft: '630px',
      marginTop: '150px',
      borderRadius: '200px 0px 0px 200px',
    },
  
  };
                                                //product css
  const products = [
    { id: 1, image: './StorePic/2.webp', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 2, image: './StorePic/3.jpg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 3, image: './StorePic/4.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 4, image: './StorePic/5.jpg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 5, image: './StorePic/6.jpg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 6, image: './StorePic/7.webp', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 7, image: './StorePic/8.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 8, image: './StorePic/9.jpg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
  ];
  const style = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      padding: '20px 100px', // Added left and right padding
      backgroundColor: '#FFFFFF',
      justifyItems: 'center', // Center-aligns content within each grid cell
    },
    productCard: {
      textAlign: 'left', // Center-aligns the product card content
      fontFamily: "'Cinzel', serif",
      color: '#6D6D6D',
      padding: '0px',
      borderRadius: '8px', // Slight rounding for a modern look
    },
    image: {
      width: '660px', // Larger image size
      height: '270px',
      objectFit: 'cover',
      display: 'block',
      margin: '0 auto', // Center the image
    },
    titleRatingContainer: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'left',
      marginTop: '0px',
      gap: '45px',
    },
    title: {
      color: '#FFC107',
      fontWeight: 'bold',
      fontSize: '18px',
      fontStyle: 'italic',
    },
    rating: {
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
    },
    description: {
      fontSize: '14px',
      margin: '10px 0',
      maxWidth:'150px'
    },
    button: {
      padding: '5px 60px',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      border: '2px solid #FFC107',
      borderRadius: '15px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      marginTop: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow for "Add to Cart" button
      display: 'inline-block',
      
    },
  };

                                                  //banner css
  const banner = {
    section: {
      backgroundColor: '#f5f5f5', // Light gray background for the section
      padding: '60px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    banner: {
      width: '100%',
      position: 'relative',
      backgroundImage: 'url(./StorePic/10.png)', // Replace with your background image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '40px',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Light black overlay
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      width: '50%',
      color: 'white',
      padding: '60px 200px',
    },
    heading: {
      fontSize: '56px',
      marginBottom: '0px',
    },
    paragraph: {
      fontSize: '28px',
      marginBottom: '20px',
      maxWidth: '700px'
    },
    rightImage: {
      width: '50%',
      position: 'relative',
      zIndex: 2,
      borderRadius: '10px',
      objectFit: 'cover',
    },
  };
   //product2 css
   const products2 = [
    { id: 1, image: './StorePic/12.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 2, image: './StorePic/13.jpg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 3, image: './StorePic/15.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 4, image: './StorePic/16.webp', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 5, image: './StorePic/17.jpg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 6, image: './StorePic/18.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 7, image: './StorePic/19.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 8, image: './StorePic/20.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
  ];

  //product2 banner css
  const productsBan = [
    { id: 1, image: './StorePic/21.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 2, image: './StorePic/22.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
  ];
  const stylePB = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0px',
      padding: '0px 100px', // Added left and right padding
      backgroundColor: '#f5f5f5',
      justifyItems: 'center', // Center-aligns content within each grid cell
      alignItems: 'center',
    },
    productCard: {
      textAlign: 'center', // Center-aligns the product card content
      fontFamily: "'Cinzel', serif",
      color: '#6D6D6D',
      padding: '0px',
      borderRadius: '8px', // Slight rounding for a modern look
      marginTop: '50px',
    },
    banner: {
      width: '100%',
      position: 'relative',
      borderRadius: '25px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '0px',
    },
    image: {
      borderRadius: '28px',
      width: '660px', // Larger image size
      height: '770px',
      objectFit: 'cover',
      display: 'block',
      margin: '0 auto', // Center the image
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Light black overlay
      zIndex: 1,
    },
    titleRatingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
      gap: '15px',
    },
    title: {
      color: '#FFC107',
      fontWeight: 'bold',
      fontSize: '48px',
      fontStyle: 'italic',
    },
    rating: {
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    description: {
      fontSize: '24px',
      margin: '10px 0',
    },
    button: {
      padding: '5px 60px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      border: '2px solid #FFC107',
      borderRadius: '15px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      marginTop: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow for "Add to Cart" button
      display: 'inline-block',
      
    },
  };
  
                                                   //banner css 2
  const banner2 = {
    section: {
      backgroundColor: '#f5f5f5', // Light gray background for the section
      padding: '90px 0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    banner: {
      width: '100%',
      position: 'relative',
      backgroundImage: 'url(./StorePic/23.png)', // Replace with your background image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Light black overlay
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      width: '50%',
      color: 'white',
      padding: '60px 200px',
    },
    heading: {
      fontSize: '56px',
      marginBottom: '0px',
    },
    paragraph: {
      fontSize: '28px',
      marginBottom: '20px',
      maxWidth: '700px'
    },
    rightImage: {
      width: '50%',
      position: 'relative',
      zIndex: 2,
      borderRadius: '10px',
      objectFit: 'cover',
    },
  };

  const products3 = [
    { id: 1, image: './StorePic/24.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 2, image: './StorePic/25.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 3, image: './StorePic/26.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 4, image: './StorePic/27.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 5, image: './StorePic/28.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 6, image: './StorePic/29.jpg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 7, image: './StorePic/29.png', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
    { id: 8, image: './StorePic/30.jpeg', title: 'Fresh', description: 'A mango is an edible stone fruit.', rating: 4.3 },
  ];
                                        //banner css 3
  const banner3 = {
    section: {
      backgroundColor: '#f5f5f5', // Light gray background for the section
      paddingTop: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    banner: {
      width: '100%',
      position: 'relative',
      backgroundImage: 'url(./StorePic/31.jpg)', // Replace with your background image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '15px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'right',
      padding: '40px',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Light black overlay
      zIndex: 1,
    },
    content: {
      position: 'relative',
      zIndex: 2,
      width: '50%',
      color: 'white',
      padding: '60px 200px',
    },
    heading: {
      fontSize: '56px',
      marginBottom: '0px',
    },
    paragraph: {
      fontSize: '28px',
      marginBottom: '20px',
      maxWidth: '700px'
    },
    rightImage: {
      width: '50%',
      position: 'relative',
      zIndex: 2,
      borderRadius: '10px',
      objectFit: 'cover',
    },
  };
  return (
    <>
     <nav style={styles.navbar}>
          <div style={styles.logo}>GroceryStore</div>
          <div style={styles.searchBar}>
            <FaSearch style={{ marginRight: '10px', color: 'gray' }} /> {/* Search icon */}
            <input type="text" placeholder="Search..." style={styles.searchInput} />
          </div>
          <ul style={styles.navLinks}>
          <li><NavLink exact to="/" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'gray'}>Home</NavLink></li>
        <li><NavLink to="/store" activeClassName="active" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'gray'}>Store</NavLink></li>
        <li><NavLink to="/about" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'gray'}>About</NavLink></li>
        <li><NavLink to="/contact" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'gray'}>Contact</NavLink></li>
        <li><NavLink to="/login" style={styles.navLink} onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color} onMouseLeave={(e) => e.target.style.color = 'gray'}>Login</NavLink></li>
         </ul>
        </nav>
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>
          Testy and <span style={styles.highlight}>Fresh</span>
        </h1>
        <p style={styles.paragraph}>
          A mango is an edible stone fruit produced by the tropical tree Mangifera indica.
        </p>
        <div style={styles.rating}>
          {[...Array(4)].map((_, index) => (
            <FaStar key={index} color="#FFC107" />
          ))}
          <FaStar color="#ccc" /> {/* Gray star for half rating */}
        </div>
        <button style={styles.button}>BUY NOW</button>
      </div>
      <div style={styles.overlay}></div>
        <img
          src="./StorePic/1.png" // Replace with the actual mango image URL
          alt="Mango"
          style={styles.image}
        />
      </div>
         
         {/* Product section */}
      <div style={style.container}>
        {products.map((product) => (
          <div key={product.id} style={style.productCard}>
            <img src={product.image} alt={product.title} style={style.image} />
            <div style={style.titleRatingContainer}>
              <span style={style.title}>{product.title}</span>
              <div style={style.rating}>
                {product.rating} <FaStar color="#FFC107" />
              </div>
             </div>
            <p style={style.description}>{product.description}</p>
            <button style={style.button}>Add to Cart</button>
          </div>
        ))}
      </div>
        
        {/* banner section */}
        <div style={banner.section}>
      <div style={banner.banner}>
        <div style={banner.overlay}></div>
        <div style={banner.content}>
          <h1 style={banner.heading}>Testy and </h1>
          <h1 style={{color:'yellow', fontSize: '56px', fontWeight:'bold', fontStyle:'italic'}}> Fresh</h1>

          <p style={banner.paragraph}>
          A mango is an edible stone fruit produced by the tropical tree Mangifera indica.
          </p>
        </div>
        <img
          src="/StorePic/11.png" // Replace with your image path
          alt="Banner Right"
          style={banner.rightImage}
        />
      </div>
    </div>

    {/* Product section2 */}
    <div style={style.container}>
        {products2.map((product) => (
          <div key={product.id} style={style.productCard}>
            <img src={product.image} alt={product.title} style={style.image} />
            <div style={style.titleRatingContainer}>
              <span style={style.title}>{product.title}</span>
              <div style={style.rating}>
                {product.rating} <FaStar color="#FFC107" />
              </div>
             </div>
            <p style={style.description}>{product.description}</p>
            <button style={style.button}>Add to Cart</button>
          </div>
        ))}
      </div>

       {/* Product section 2 banners */}
    <div style={stylePB.container}>
        {productsBan.map((product) => (
          <div key={product.id} style={stylePB.productCard}>
           <div style={stylePB.banner}>
           <div style={stylePB.overlay}></div>
            <img src={product.image} alt={product.title} style={stylePB.image} /></div>
            <div style={stylePB.titleRatingContainer}>
              <span style={stylePB.title}>{product.title}</span>
              <div style={stylePB.rating}>
                {product.rating} <FaStar color="#FFC107" />
              </div>
             </div>
            <p style={stylePB.description}>{product.description}</p>
            <button style={stylePB.button}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      {/* banner section 2*/}
      <div style={banner2.section}>
      <div style={banner2.banner}>
        <div style={banner2.overlay}></div>
        <div style={banner2.content}>
          <h1 style={banner2.heading}>Testy and </h1>
          <h1 style={{color:'yellow', fontSize: '56px', fontWeight:'bold', fontStyle:'italic'}}> Fresh</h1>

          <p style={banner2.paragraph}>
          A mango is an edible stone fruit produced by the tropical tree Mangifera indica.
          </p>
        </div>
      </div>
    </div>
    {/* Product section3 */}
    <div style={style.container}>
        {products3.map((product) => (
          <div key={product.id} style={style.productCard}>
            <img src={product.image} alt={product.title} style={style.image} />
            <div style={style.titleRatingContainer}>
              <span style={style.title}>{product.title}</span>
              <div style={style.rating}>
                {product.rating} <FaStar color="#FFC107" />
              </div>
             </div>
            <p style={style.description}>{product.description}</p>
            <button style={style.button}>Add to Cart</button>
          </div>
        ))}
      </div>
      {/* banner section 3*/}
      <div style={banner3.section}>
      <div style={banner3.banner}>
        <div style={banner3.overlay}></div>
        <div style={banner3.content}>
          <h1 style={banner3.heading}>Testy and </h1>
          <h1 style={{color:'yellow', fontSize: '56px', fontWeight:'bold', fontStyle:'italic'}}> Fresh</h1>

          <p style={banner3.paragraph}>
          A mango is an edible stone fruit produced by the tropical tree Mangifera indica.
          </p>
        </div>
      </div>
    </div>
                                  {/* footer */}
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
    </footer>s
    </>
  );
};

export default HeroSection;
