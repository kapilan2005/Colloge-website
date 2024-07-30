import React from 'react';

const MessPage = () => {
  const sectionStyle = {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
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

  const menuStyle = {
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
    <section id="mess" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>College Mess Facilities</h2>
        <p style={textStyle}>
          Our college mess offers a variety of dining options to cater to the diverse needs of our students. The mess is equipped with modern facilities to ensure a comfortable and hygienic dining experience.
        </p>
        <p style={textStyle}>
          <strong>Dining Options:</strong> We provide a range of meal plans including vegetarian and non-vegetarian options. Our menu is updated regularly to include a variety of dishes.
        </p>
        <p style={textStyle}>
          <strong>Meal Plans:</strong> We offer flexible meal plans to accommodate students' preferences and schedules. Students can choose from daily, weekly, or monthly meal plans.
        </p>
        <table style={menuStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Day</th>
              <th style={thStyle}>Breakfast</th>
              <th style={thStyle}>Lunch</th>
              <th style={thStyle}>Dinner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Monday</td>
              <td style={tdStyle}>Pancakes, Fruits</td>
              <td style={tdStyle}>Chicken Curry, Rice</td>
              <td style={tdStyle}>Pasta, Salad</td>
            </tr>
            <tr>
              <td style={tdStyle}>Tuesday</td>
              <td style={tdStyle}>Omelette, Toast</td>
              <td style={tdStyle}>Vegetable Stir Fry, Noodles</td>
              <td style={tdStyle}>Grilled Chicken, Vegetables</td>
            </tr>
            <tr>
              <td style={tdStyle}>Wednesday</td>
              <td style={tdStyle}>Smoothies, Bagels</td>
              <td style={tdStyle}>Beef Stew, Mashed Potatoes</td>
              <td style={tdStyle}>Rice, Dal</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p style={textStyle}>
          <strong>Contact:</strong> For any inquiries regarding the mess facilities or meal plans, please contact the mess office at <a href="mailto:mess@college.com" style={{ color: '#2862af' }}>mess@college.com</a> or call us at <a href="tel:+911234567890" style={{ color: '#2862af' }}>+91 123-456-7890</a>.
        </p>
      </div>
    </section>
  );
};

export default MessPage;
