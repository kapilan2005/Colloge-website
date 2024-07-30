import React from 'react';

const TransportPage = () => {
  const sectionStyle = {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333',
  };

  const textStyle = {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#666',
  };


  return (
    <section id="transport" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>College Transport Services</h2>
        <p style={textStyle}>
          Our college provides comprehensive transport services to ensure that students have easy and safe access to the campus. We offer a range of bus routes covering various areas to accommodate our students' needs.
        </p>
        <p style={textStyle}>
          <strong>Bus Routes:</strong> We have several bus routes that connect major localities to the college. Please check the schedule below for the details of each route.
        </p>
        <p style={textStyle}>
          <strong>Contact:</strong> For any inquiries regarding the transport services, please contact the transport office at <a href="mailto:nlc@college.com" style={{ color: '#2862af' }}>transport@college.com</a> or call us at <a href="tel:+919934567890" style={{ color: '#2862af' }}>+91 993-456-7890</a>.
        </p>
        <div style={{ marginTop: '20px' }}>
          
        </div>
      </div>
    </section>
  );
};

export default TransportPage;
