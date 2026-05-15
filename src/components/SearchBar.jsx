import React, { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
    // 1. State for our form inputs
    const [keyword, setKeyword] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [experience, setExperience] = useState('');

    // State to handle the location dropdown visibility
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    // Reference to detect clicks outside the location dropdown
    const locationRef = useRef(null);

    // Mock data for cities (Replace this with data from your API if needed)
    const cityList = [
        "Bangalore", "Mumbai", "Pune", "Hyderabad", "Chennai",
        "Delhi", "Gurgaon", "Noida", "Kolkata", "Remote"
    ];

    // Filter cities based on what the user types
    const filteredCities = cityList.filter(city =>
        city.toLowerCase().includes(locationInput.toLowerCase())
    );

    // Handle closing the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (locationRef.current && !locationRef.current.contains(event.target)) {
                setIsLocationOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle selecting a city from the dropdown
    const handleSelectLocation = (city) => {
        setLocationInput(city);
        setIsLocationOpen(false);
    };

    // Handle the final search submission
    const handleSearch = () => {
        const searchParams = {
            keyword,
            location: locationInput,
            experience
        };

        console.log("Searching with params:", searchParams);
        // TODO: Add your API call or routing logic here!
        // Example: navigate(`/FetchJobDetails?keyword=${keyword}&location=${locationInput}&experience=${experience}`);
    };

    // --- Styles ---
    const searchContainerStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        padding: '10px 20px',
        maxWidth: '1000px',
        margin: '40px auto',
        border: '1px solid #f0f0f0'
    };

    const inputStyle = {
        border: 'none',
        outline: 'none',
        width: '100%',
        padding: '10px',
        color: '#555',
        backgroundColor: 'transparent'
    };

    const selectStyle = {
        ...inputStyle,
        cursor: 'pointer',
        appearance: 'none', // Removes default browser styling on select arrow
        WebkitAppearance: 'none',
        MozAppearance: 'none'
    };

    const dividerStyle = {
        borderRight: '2px solid #f0f0f0',
        height: '30px'
    };

    const dropdownStyle = {
        position: 'absolute',
        top: '110%',
        left: '0',
        width: '100%',
        backgroundColor: '#fff',
        border: '1px solid #f0f0f0',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        maxHeight: '200px',
        overflowY: 'auto',
        zIndex: 1000,
        padding: '10px 0'
    };

    const suggestionItemStyle = {
        padding: '10px 20px',
        cursor: 'pointer',
        color: '#555',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    };

    return (
        <div className="container">
            <div style={searchContainerStyle} className="d-flex flex-column flex-md-row align-items-center justify-content-between">

                {/* Keyword Input */}
                <div className="d-flex align-items-center flex-grow-1 px-3 w-100">
                    <i className="fas fa-search" style={{ color: '#00A5EC' }}></i>
                    <input
                        type="text"
                        placeholder="Skills, Job Title or Company"
                        style={inputStyle}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>

                <div className="d-none d-md-block" style={dividerStyle}></div>

                {/* Location Input with Custom Dropdown */}
                <div
                    className="d-flex align-items-center flex-grow-1 px-3 w-100 mt-3 mt-md-0"
                    style={{ position: 'relative' }}
                    ref={locationRef}
                >
                    <i className="fas fa-map-marker-alt" style={{ color: '#00A5EC' }}></i>
                    <input
                        type="text"
                        placeholder="Select Location"
                        style={inputStyle}
                        value={locationInput}
                        onChange={(e) => setLocationInput(e.target.value)}
                        onFocus={() => setIsLocationOpen(true)}
                    />

                    {/* Location Suggestion Box */}
                    {isLocationOpen && (
                        <div style={dropdownStyle}>
                            {filteredCities.length > 0 ? (
                                filteredCities.map((city, index) => (
                                    <div
                                        key={index}
                                        style={suggestionItemStyle}
                                        onClick={() => handleSelectLocation(city)}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                    >
                                        <i className="fas fa-map-marker-alt text-muted"></i>
                                        {city}
                                    </div>
                                ))
                            ) : (
                                <div style={{ padding: '10px 20px', color: '#999' }}>No locations found</div>
                            )}
                        </div>
                    )}
                </div>

                <div className="d-none d-md-block" style={dividerStyle}></div>

                {/* Experience Select Dropdown */}
                <div className="d-flex align-items-center flex-grow-1 px-3 w-100 mt-3 mt-md-0" style={{ position: 'relative' }}>
                    <i className="fas fa-briefcase" style={{ color: '#00A5EC' }}></i>
                    <select
                        style={selectStyle}
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    >
                        <option value="">Experience</option>
                        <option value="0">Fresher</option>
                        <option value="1">1+ Years</option>
                        <option value="2">2+ Years</option>
                        <option value="5">5+ Years</option>
                    </select>
                    {/* Add a custom arrow icon for the select box since default is hidden */}
                    <i className="fas fa-chevron-down" style={{ color: '#ccc', position: 'absolute', right: '20px', pointerEvents: 'none', fontSize: '12px' }}></i>
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="btn rounded-pill px-5 py-2 mt-3 mt-md-0 w-100 w-md-auto text-white"
                    style={{ backgroundColor: '#00A5EC', fontWeight: '600', border: 'none' }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;