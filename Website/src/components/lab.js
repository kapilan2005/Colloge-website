import React from 'react';

const LabsPage = () => {
  const sectionStyle = {
    padding: '50px 20px',
    backgroundColor: '#f2f2f2',
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

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px',
  };

  const thStyle = {
    backgroundColor: '#2862af',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  return (
    <section id="labs" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>College Lab Facilities</h2>
        <p style={textStyle}>
          Our college is equipped with state-of-the-art laboratories to support various fields of study. Each lab is designed to provide practical experience and enhance the learning process.
        </p>
        <p style={textStyle}>
          <strong>Available Labs:</strong> We have a range of labs including Computer Labs, Electronics Labs, Chemistry Labs, and Mechanical Labs. Each lab is equipped with modern equipment to facilitate hands-on learning.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Lab Name</th>
              <th style={thStyle}>Purpose</th>
              <th style={thStyle}>Equipment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Computer Lab</td>
              <td style={tdStyle}>Software Development, Programming Practice</td>
              <td style={tdStyle}>High-end PCs, Development Software, Projector</td>
            </tr>
            <tr>
              <td style={tdStyle}>Electronics Lab</td>
              <td style={tdStyle}>Circuit Design, Electronics Experiments</td>
              <td style={tdStyle}>Oscilloscopes, Multimeters, Breadboards</td>
            </tr>
            <tr>
              <td style={tdStyle}>Chemistry Lab</td>
              <td style={tdStyle}>Chemical Reactions, Solution Preparation</td>
              <td style={tdStyle}>Beakers, Bunsen Burners, Reagents</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mechanical Lab</td>
              <td style={tdStyle}>Mechanical Testing, Material Science</td>
              <td style={tdStyle}>Hydraulic Press, Lathe Machines, Measuring Tools</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p style={textStyle}>
          <strong>Contact:</strong> For more information about the lab facilities or to book lab time, please contact the lab coordinator at <a href="mailto:labs@college.com" style={{ color: '#2862af' }}>labs@college.com</a> or call us at <a href="tel:+911234567890" style={{ color: '#2862af' }}>+91 123-456-7890</a>.
        </p>
      </div>
    </section>
  );
};

export default LabsPage;
