import React, { useState } from 'react';

const TeamCard = ({ image, icon, name, role, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '18px',
    padding: '30px',
    height: '100%',
    textAlign: 'center',
    boxShadow: isHovered ? '0 15px 40px rgba(0, 165, 236, 0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid #f0f0f0',
    transform: isHovered ? 'translateY(-10px)' : 'none',
    transition: 'all 0.3s ease'
  };

  const photoCircleStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00A5EC, #0088c9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '2.5rem',
    margin: '0 auto 20px',
    overflow: 'hidden',
    border: '4px solid #f0f8ff',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={photoCircleStyle}>
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <i className={icon}></i>
        )}
      </div>
      <h4 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#001f3f', marginBottom: '2px' }}>{name}</h4>
      <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#00A5EC', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
        {role}
      </div>
      <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
};

export default TeamCard;