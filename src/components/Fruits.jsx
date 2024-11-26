import React from 'react';
import Slider from 'react-slick';

const TopSeller = () => {
  // Styles
  const styles = {
    section: {
      padding: '10px 0px',
      backgroundColor: '#674D00',
      textAlign: 'left', // Center the heading and content
      width: '100%',
      fontSize: '80px',
      fontWeight: 'bold',

      
    },
    sliderContainer: {
      margin: '30px auto', // Center the carousel
      width: '90%', // Set the carousel width to 70%
    },
    card: {
      backgroundColor: '#031E00', // Dark Green background
      color: 'white',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      width: '85%',
    },
    cardImage: {
      width: '100%',
      margin: '10px 0px',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '18px 0px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginTop: '15px',
    },
    cardDescription: {
      fontSize: '14px',
      margin: '5px 0',
    },
    addToCartBtn: {
      padding: '10px',
      backgroundColor: 'transparent', // Tomato color for the button
      color: 'white',
      border: '2px solid #E7D37F',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '70%',
      margin: '20px 40px',
    },
    addToCartBtnHover: {
      backgroundColor: '#E7D37F',
      
    },
  };

  // Carousel settings
  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable next/prev arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides
    dots: false, // Disable dots
    centerMode: true, // C  enter the carousel
  };

  return (
    <section style={styles.section}>
      <h2 style={{color: 'black'}}>Fruits</h2>
      <div style={styles.sliderContainer}>
        <Slider {...settings}>
          {/* Product Card 1 */}
          <div style={{ padding: '20px' }}>
            <div style={styles.card}>
              <img
                src="./Pic/29.png"
                alt="Product 1"
                style={styles.cardImage}
              />
              <h3 style={styles.cardTitle}>Product 1</h3>
              <p style={styles.cardDescription}>This is a description of Product 1. It's a top seller!</p>
              <button
                style={styles.addToCartBtn}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.addToCartBtnHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div style={{ padding: '20px' }}>
            <div style={styles.card}>
              <img
                src="./Pic/31.jpg"
                alt="Product 2"
                style={styles.cardImage}
              />
              <h3 style={styles.cardTitle}>Product 2</h3>
              <p style={styles.cardDescription}>This is a description of Product 2. It's a top seller!</p>
              <button
                style={styles.addToCartBtn}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.addToCartBtnHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Add to Cart
              </button>
            </div>
          </div>

           {/* Product Card 3 */}
           <div style={{ padding: '20px' }}>
            <div style={styles.card}>
              <img
                src="./Pic/32.png"
                alt="Product 2"
                style={styles.cardImage}
              />
              <h3 style={styles.cardTitle}>Product 3</h3>
              <p style={styles.cardDescription}>This is a description of Product 2. It's a top seller!</p>
              <button
                style={styles.addToCartBtn}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.addToCartBtnHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product Card 4 */}
          <div style={{ padding: '20px' }}>
            <div style={styles.card}>
              <img
                src="./Pic/33.png"
                alt="Product 3"
                style={styles.cardImage}
              />
              <h3 style={styles.cardTitle}>Product 4</h3>
              <p style={styles.cardDescription}>This is a description of Product 3. It's a top seller!</p>
              <button
                style={styles.addToCartBtn}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.addToCartBtnHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Add more product cards as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default TopSeller;
