import React, { useState } from 'react';

const InfoCard = ({ icon, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        background: '#ffffff',
        borderRadius: '18px',
        padding: '35px',
        height: '100%',
        boxShadow: isHovered ? '0 15px 35px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.08)',
        transform: isHovered ? 'translateY(-8px)' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    };

    const iconStyle = {
        fontSize: '2.5rem',
        color: '#00A5EC',
        marginBottom: '15px'
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <i className={icon} style={iconStyle}></i>
            <h5 className="fw-bold mt-3">{title}</h5>
            <p className="text-muted">{description}</p>
        </div>
    );
};

export default InfoCard;