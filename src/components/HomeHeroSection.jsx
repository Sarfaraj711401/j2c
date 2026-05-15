import React from 'react';

const HomeHeroSection = () => {
  // Original styles unchanged
  const statCardStyle = {
    background: '#ffffff',
    borderRadius: '15px',
    padding: '25px 15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.04)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1',
    minWidth: '140px'
  };

  const hiringBannerStyle = {
    background: '#EAF6FE',
    borderLeft: '5px solid #00A5EC',
    borderRadius: '8px',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '30px'
  };

  const registerButtonStyle = {
    border: '1px solid #00A5EC',
    background: 'transparent',
    color: '#00A5EC',
    padding: '8px 16px',
    borderRadius: '5px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer'
  };

  // Clean minimal right column
  const featureContainerStyle = {
    background: 'white',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
    border: '1px solid #f1f5f9'
  };

  const featureCardStyle = {
    background: 'white',
    borderRadius: '16px',
    padding: '28px 20px',
    textAlign: 'center',
    border: '1px solid #f1f5f9',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    cursor: 'pointer'
  };

  const featureIconStyle = (color) => ({
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 18px',
    fontSize: '1.6rem',
    color: 'white'
  });

  const ctaButtonStyle = {
    background: '#00A5EC',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '25px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginTop: '16px',
    transition: 'background 0.3s ease'
  };

  return (
    <section className="container py-5 mt-4">
      <div className="row align-items-center gy-4">
        {/* LEFT: 100% UNCHANGED */}
        <div className="col-lg-7 mb-5 mb-lg-0 pe-lg-5">
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1A202C', lineHeight: '1.2' }}>
            Begin your<br />
            <span style={{ color: '#00A5EC' }}>Journey to Career</span><br />
            with confidence 🚀
          </h1>
          <p className="mt-3 mb-5" style={{ fontSize: '1.1rem', color: '#666', maxWidth: '95%' }}>
            Discover internships, jobs, and courses that unlock your potential and guide you to your dream career.
          </p>

          <div className="d-flex flex-column flex-md-row gap-3">
            <div style={statCardStyle}>
              <i className="fas fa-briefcase mb-3" style={{ fontSize: '2rem', color: '#8A5A44' }}></i>
              <h5 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '10px' }}>5,000+ Jobs</h5>
              <p style={{ fontSize: '0.85rem', color: '#777', margin: '0', lineHeight: '1.4' }}>
                Verified opportunities
              </p>
            </div>
            <div style={statCardStyle}>
              <i className="fas fa-graduation-cap mb-3" style={{ fontSize: '2rem', color: '#3A4368' }}></i>
              <h5 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '10px' }}>1,200+ Internships</h5>
              <p style={{ fontSize: '0.85rem', color: '#777', margin: '0', lineHeight: '1.4' }}>
                Hands-on projects
              </p>
            </div>
            <div style={statCardStyle}>
              <i className="fas fa-seedling mb-3" style={{ fontSize: '2rem', color: '#6DBE45' }}></i>
              <h5 style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '10px' }}>100+ Courses</h5>
              <p style={{ fontSize: '0.85rem', color: '#777', margin: '0', lineHeight: '1.4' }}>
                Skill development
              </p>
            </div>
          </div>

          <div style={hiringBannerStyle}>
            <span style={{ fontWeight: '600', color: '#333', fontSize: '0.95rem' }}>
              Looking to hire? <span style={{ color: '#00A5EC' }}>Post internships & jobs for free</span>
            </span>
            <button style={registerButtonStyle}>Register as Employer →</button>
          </div>
        </div>

        {/* RIGHT: CLEAN MINIMAL PERFECTION */}
        <div className="col-lg-5 ps-lg-4">
          <div style={featureContainerStyle}>
            <h3 style={{ 
              fontSize: '1.6rem', 
              fontWeight: '700', 
              color: '#1A202C', 
              textAlign: 'center', 
              marginBottom: '30px' 
            }}>
              Why Choose Us
            </h3>

            {/* Main Feature Card */}
            <div style={featureCardStyle} 
                 onMouseEnter={(e) => {
                   e.target.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)';
                   e.target.style.transform = 'translateY(-4px)';
                 }} 
                 onMouseLeave={(e) => {
                   e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                   e.target.style.transform = 'translateY(0)';
                 }}>
              <div style={featureIconStyle('#00A5EC')}>
                <i className="fas fa-check-circle"></i>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1A202C', marginBottom: '12px' }}>
                100% Verified Jobs
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#64748B', marginBottom: '20px', lineHeight: '1.5' }}>
                Partnered with 500+ top companies. No scams.
              </p>
              <button style={ctaButtonStyle}
                      onMouseEnter={(e) => e.target.style.background = '#0088CC'}
                      onMouseLeave={(e) => e.target.style.background = '#00A5EC'}>
                Find Jobs Now
              </button>
            </div>

            {/* Two Small Features */}
            <div className="row g-3 mt-4">
              <div className="col-6">
                <div style={featureCardStyle} 
                     onMouseEnter={(e) => {
                       e.target.style.boxShadow = '0 12px 30px rgba(16,185,129,0.2)';
                       e.target.style.transform = 'translateY(-2px)';
                     }} 
                     onMouseLeave={(e) => {
                       e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                       e.target.style.transform = 'translateY(0)';
                     }}>
                  <div style={featureIconStyle('#10B981')}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h6 style={{ fontSize: '1rem', fontWeight: '600', color: '#1A202C', marginBottom: '8px' }}>
                    Interview Prep
                  </h6>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>Mock calls included</p>
                </div>
              </div>
              <div className="col-6">
                <div style={featureCardStyle} 
                     onMouseEnter={(e) => {
                       e.target.style.boxShadow = '0 12px 30px rgba(245,158,11,0.2)';
                       e.target.style.transform = 'translateY(-2px)';
                     }} 
                     onMouseLeave={(e) => {
                       e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                       e.target.style.transform = 'translateY(0)';
                     }}>
                  <div style={featureIconStyle('#F59E0B')}>
                    <i className="fas fa-headset"></i>
                  </div>
                  <h6 style={{ fontSize: '1rem', fontWeight: '600', color: '#1A202C', marginBottom: '8px' }}>
                    Live Support
                  </h6>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>24/7 mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;