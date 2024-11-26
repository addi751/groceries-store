import React from 'react';

const ProductGrid = () => {
  const cardData = [
    { id: 1, title: 'Milk', description: 'Millions Of Happy Users', image: './Pic/45.png', style: { height: '115%', width: '100%' } },
    { id: 2, title: 'Pineapple', description: 'Millions Of Happy Users', image: './Pic/46.png', style: { height: '140%', width: '100%' } },
    { id: 3, title: 'Pumpkin', description: 'Millions Of Happy Users', image: './Pic/47.png', style: { height: '110%', width: '100%' } },
    { id: 4, title: 'Vegetables', description: 'Millions Of Happy Users', image: './Pic/48.png', style: { height: '110%', width: '100%' } },
    { id: 5, title: 'Grocery Bag', description: 'Millions Of Happy Users', image: './Pic/50.png', style: { height: '85%', width: '100%', top:'60px' } },
    { id: 6, title: 'Tomatoes', description: 'Millions Of Happy Users', image: './Pic/51.png', style: { height: '60%', width: '100%', top:'150px' } },
    { id: 7, title: 'Dough', description: 'Millions Of Happy Users', image: './Pic/52.png', style: { height: '90%', width: '135%', top:'40px' } },
    { id: 8, title: 'Wine Bottle', description: 'Millions Of Happy Users', image: './Pic/53.png', style: { height: '90%', width: '65%', top:'40px', left: '100px' } },
  ];

  return (
    <div style={{ backgroundColor: '#674D00', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
      <div style={{ backgroundColor: '#031E00', width: '80%', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
        {cardData.map((card) => (
          <div key={card.id} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', ...card.style }}>
            <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '5px 10px', borderRadius: '5px' }}>
              <h3 style={{ margin: 0, fontSize: '1.2em', fontWeight:'bold', color: '#E7D37F' }}>{card.title}</h3>
              <p style={{ margin: 0, fontSize: '1em', color: 'white' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
