import React from 'react';

const BannerSection = () => {
  const rotation = 45; // Rotation in degrees (change this value as needed)
  const position = { top: '-300px', left: '-150px'}; // Change top and left positions
  const size = { width: '700px', height: '1100px' }; // Change width and height
  const opacity = 0.4; // Opacity between 0 (transparent) to 1 (fully visible)
  

  const styles = {
    section: {
      padding: '0px 0', // Padding to create spacing for content
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', // Banner width 80%
      margin: '0 auto', // Centering the banner
      borderRadius: '0px', // Rounded corners for banner
      backgroundColor: '#674D00',
    },
    body1: {
      backgroundColor: '#674D00', // Body color
      height: '30vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    image: {
      position: 'absolute',
      top: position.top,
      left: position.left,
      width: size.width,
      height: size.height,
      opacity: opacity,
      transform: `rotate(${rotation}deg)`, // Apply rotation
      transition: 'transform 0.5s, opacity 0.5s, width 0.5s, height 0.5s',
    },
    body: {
        backgroundImage: 'url("./Pic/OIP.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(245, 220, 170, 0.2)', // Light golden overlay
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
      borderRadius: '15px',
    },
    leftImage: {
      margin: '20px 20px', // Margin for image on left
      borderRadius: '10px', // Rounded corners for the image
      width: '20%', // Adjust the width to be 30% of the banner
      height: 'auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Adding shadow to the image for depth
    },
    textContainer: {
      flex: 1, // Text container takes up the remaining space
      padding: '20px', // Padding inside the text area
      textAlign: 'center',
      fontFamily: '"Roboto", sans-serif',
      color: 'white',
    },
    heading: {
      fontSize: '58px', // Adjusted size for heading
      fontWeight: 'bold',
      marginBottom: '40px',
      color: 'white', // White heading text
    },
    description: {
      fontSize: '28px', // Adjusted size for description text
      lineHeight: '1.5',
      color: 'white', // White description text
    },
  };

  return (
   
    <>
       <div style={styles.body1}>
      <img
        src="./Pic/pineapple-fresh-white-background-31799603-removebg-preview.png"
        alt="Rotatable Image"
        style={styles.image}
      />
      <section style={styles.section}>
        <div style={styles.body}>
      <div style={styles.banner}>
        <img
          src="./Pic/OIP1.jpg"
          alt="Banner Left"
          style={styles.leftImage}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>Top Seller</h2>
          <p style={styles.description}>
            "On A Recent Test Run Of All Three Services, Text Free Was The Fastest, Most
            Reliable And Easiest To Use."
          </p>
        </div>
      </div>
      </div>
    </section>
          </div>
             </>
  );
};

export default BannerSection;



