import React from 'react';

const CategorySection = () => {
    const rotation = 30; // Rotation in degrees (change this value as needed)
    const position = { top: '300px', left: '-100px'}; // Change top and left positions
    const size = { width: '1000px', height: '2000px' }; // Change width and height
    const opacity = 0.3; // Opacity between 0 (transparent) to 1 (fully visible)

  const styles = {
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
    container: {
      display: 'grid',
      gridTemplateAreas: `
        "topLeft center topRight"
        "bottomLeft center bottomRight"
      `,
      gridTemplateColumns: '1fr 2fr 1fr',
      gap: '20px',
      padding: '0px 100px',
      backgroundColor: '#674D00',
      marginTop:'50px',
    },
    centerImage: {
      gridArea: 'center',
      borderRadius: '15px',
      width: '100%',
      height: '95%',
      objectFit: 'fill',
      transition: 'transform 0.3s',
    },
    smallImage: {
      borderRadius: '15px',
      width: '100%',
      height: '90%',
      objectFit: 'cover',
      transition: 'transform 0.3s',
    },
    topLeft: {
      gridArea: 'topLeft',
      padding: '10px',
      height: '50vh',
    },
    topRight: {
      gridArea: 'topRight',
      padding: '10px',
      height: '50vh',
    },
    topLeft1: {
        gridArea: 'topLeft',
        padding: '10px',
        height: '50vh',
        marginTop:'350px',
    },
    topRight1: {
        gridArea: 'topRight',
        padding: '10px',
        height: '50vh',
        marginTop:'350px',
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
    <section style={{ padding: '40px', backgroundColor: '#674D00' }}>
      <div style={styles.container}>
        {/* Top Left Image */}
        <div style={styles.topLeft}>
          <img
            src="./Pic/30.png"
            alt="Top Left"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Center Large Image */}
        <div style={styles.center}>
          <img
            src="./Pic/24.png"
            alt="Center"
            style={styles.centerImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Top Right Image */}
        <div style={styles.topRight}>
          <img
            src="./Pic/25.png"
            alt="Top Right"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Bottom Left Image */}
        <div style={styles.topLeft1}>
          <img
            src="./Pic/23.png"
            alt="Bottom Left"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Bottom Right Image */}
        <div style={styles.topRight1}>
          <img
            src="./Pic/26.png"
            alt="Bottom Right"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </section>
    </div>
             </>
  );
};

export default CategorySection;
