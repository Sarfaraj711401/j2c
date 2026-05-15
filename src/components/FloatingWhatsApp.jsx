import React from 'react';

const FloatingWhatsApp = () => {
    const floatStyle = {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: '#FFF',
        borderRadius: '50px',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '35px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
        zIndex: '1000',
        cursor: 'pointer',
        transition: 'transform 0.3s ease'
    };

    return (
        <div
            style={floatStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() => window.open('https://wa.me/918697741611', '_blank')}
        >
            <i className="fab fa-whatsapp"></i>
        </div>
    );
};

export default FloatingWhatsApp;