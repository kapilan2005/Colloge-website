// src/components/AboutHostel.js

import React from 'react';
import './AboutHostel.css'; // Import the CSS file for styling

const AboutHostel = () => {
  return (
    <section id="about-hostel">
      <div className="container">
        <h2>About the Hostel</h2>
        <div className="about-hostel-content">
          <div className="hostel-image">
            
          </div>
          <div className="hostel-description">
            <h3>Welcome to Our Hostel</h3>
            <p>
              Our hostel provides a comfortable and secure living environment for students. Located conveniently near the college campus, the hostel offers well-furnished rooms, recreational facilities, and round-the-clock security.
            </p>
            <p>
              Each room is equipped with essential amenities including high-speed internet, study desks, and comfortable bedding. We also offer common areas for socializing, a mess facility with nutritious meals, and laundry services.
            </p>
            <p>
              Our dedicated staff ensures that all students have a pleasant and enriching stay, focusing on both academic and personal growth. The hostel is designed to create a home-like atmosphere where students can thrive and make lasting memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHostel;
