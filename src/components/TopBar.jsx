import React from 'react';

const TopBar = () => {
    const topBarStyle = {
        backgroundColor: '#00A5EC', // The distinct blue from your design
        fontSize: '0.85rem',
        fontWeight: '500'
    };

    return (
        <div style={topBarStyle} className="text-white py-2 px-4 d-flex justify-content-between align-items-center d-none d-lg-flex">
            <div>
                <i className="fas fa-phone-alt me-2"></i> +91 86977 41611 / +91 83340 01667 / 033-4517-9993
                <span className="mx-3">|</span>
                <i className="fas fa-envelope me-2"></i> contact@j2c.in
            </div>
            <div>
                <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    );
};

export default TopBar;