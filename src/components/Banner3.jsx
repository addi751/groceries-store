import React from 'react';
import { MdHeight } from 'react-icons/md';

const BannerSection3 = () => {
 
  

  const styles = {
    section: {
      paddingTop: '50px', // Padding to create spacing for content
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', // Banner width 80%
      margin: '0 auto', // Centering the banner
      borderRadius: '0px', // Rounded corners for banner
      backgroundColor: '#674D00',
    },
    body: {
        backgroundImage: 'url("./Pic/26.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(245, 220, 170, 0.2)', // Light golden overlay
        marginBottom: '30px',
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
      margin: '20px 40px', // Margin for image on left
      borderRadius: '10px', // Rounded corners for the image
      width: '30%',
      height: '300px',
      objectFit: 'cover',
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
   
   
      <section style={styles.section}>
        <div style={styles.body}>
      <div style={styles.banner}>
        <img
          src="./Pic/28.png"
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
          
  );
};

export default BannerSection3;



