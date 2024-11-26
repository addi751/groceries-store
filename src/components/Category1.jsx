import React from 'react';

const CategorySection1 = () => {
 const styles = {
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
      height: '85%',
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
    <section style={{ padding: '40px', backgroundColor: '#674D00' }}>
      <div style={styles.container}>
        {/* Top Left Image */}
        <div style={styles.topLeft}>
          <img
            src="./Pic/41.png"
            alt="Top Left"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Center Large Image */}
        <div style={styles.center}>
          <img
            src="./Pic/39.jpg"
            alt="Center"
            style={styles.centerImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Top Right Image */}
        <div style={styles.topRight}>
          <img
            src="./Pic/38.jpg"
            alt="Top Right"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Bottom Left Image */}
        <div style={styles.topLeft1}>
          <img
            src="./Pic/43.png"
            alt="Bottom Left"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Bottom Right Image */}
        <div style={styles.topRight1}>
          <img
            src="./Pic/44.png"
            alt="Bottom Right"
            style={styles.smallImage}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </section>
    
  );
};

export default CategorySection1;
