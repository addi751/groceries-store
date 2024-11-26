import React from 'react';

const BannerSection1 = () => {
    const rotation = -15; // Rotation in degrees (change this value as needed)

  const styles = {
    section: {
      padding: '150px 150px', // Padding to create spacing for content
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', // Banner width 80%
      height: '100vh',
      margin: '0px auto', // Centering the banner
      borderRadius: '0px', // Rounded corners for banner
      backgroundColor: '#674D00',
    },
    body: {
        backgroundColor: '#031E00', // Light golden overlay
        margin: '0px',
        position: 'relative',
        width: '80%',
        borderRadius: '15px',
    },
    banner: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for text area
      borderRadius: '25px',
      padding: '20px 0',
    },
    leftImage: {
      margin: '40px 120px', // Margin for image on left
      borderRadius: '10px', // Rounded corners for the image
      width: '30%', // Adjust the width to be 30% of the banner
      height: 'auto',
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0)', // Adding shadow to the image for depth
      transform: `rotate(${rotation}deg)`,
      transition: 'transform 0.3s',
    },
    textContainer: {
      flex: 1, // Text container takes up the remaining space
      padding: '20px', // Padding inside the text area
      textAlign: 'left',
      fontFamily: '"Roboto", sans-serif',
      color: 'white',
    },
    heading1: {
      fontSize: '58px', // Adjusted size for heading
      fontWeight: 'bold',
      marginBottom: '0px',
      color: 'white', // White heading text
    },
    heading: {
        fontSize: '38px', // Adjusted size for heading
        fontWeight: 'bold',
        marginBottom: '0px',
        color: 'white', // White heading text
    },
    description: {
      fontSize: '22px', // Adjusted size for description text
      lineHeight: '1.5',
      color: 'white', // White description text
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
        margin: '20px 10px',
      },
      addToCartBtnHover: {
        backgroundColor: '#E7D37F',
        
      },
  };

  return (

      <section style={styles.section}>
        <div style={styles.body}>
      <div style={styles.banner}>
        <img
          src="./Pic/14-removebg-preview.png"
          alt="Banner Left"
          style={styles.leftImage}
          onMouseEnter={(e) => e.target.style.transform = 'rotate(-17.5deg)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(-15deg)'}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.heading1}> Coca Cola</h2>
          <h3 style={styles.heading}> 1 litre</h3>
          <p style={styles.description}>
          “On a recent test run of
          all three services.
          </p>
          <button
                style={styles.addToCartBtn}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.addToCartBtnHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Add to Cart
              </button>
        </div>
      </div>
      </div>
    </section>
         
  );
};

export default BannerSection1;



