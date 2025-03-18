const fields = [
    { label: "Hackathon Title", placeholder: "Enter Hackathon Title", options: [] },
    { label: "Organizer", placeholder: "Enter Organizer Name", options: ['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'] },
    { label: "Event Date", placeholder: "Enter Event Date", options: [] },
    { label: "Duration", placeholder: "Enter Duration", options: ['24 Hours', '48 Hours', '72 Hours'] },
    { 
      label: "Location", 
      placeholder: "Enter Event Location", 
      options: [
          'Online', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 
          'Jaipur', 'Lucknow', 'Chandigarh', 'Bhopal', 'Indore', 'Nagpur', 'Visakhapatnam', 'Patna', 'Ludhiana', 
          'Thiruvananthapuram', 'Kochi', 'Coimbatore', 'Mysore', 'Vadodara', 'Surat', 'Rajkot', 'Nashik', 
          'Aurangabad', 'Kanpur', 'Agra', 'Varanasi', 'Dehradun', 'Guwahati', 'Ranchi', 'Bhubaneswar', 
          'Jamshedpur', 'Madurai', 'Tiruchirappalli', 'Gwalior', 'Jodhpur', 'Udaipur', 'Noida', 'Gurgaon', 
          'Faridabad', 'Meerut', 'Allahabad', 'Amritsar', 'Vijayawada', 'Raipur', 'Shimla', 'Gangtok', 'Imphal',
          'Aizawl', 'Itanagar', 'Shillong', 'Panaji', 'Pondicherry', 'Daman', 'Srinagar', 'Leh'
      ] 
  },
    { label: "Prize", placeholder: "Enter Prize Amount", options: ['₹10k', '₹50k', '₹1 Lakh', '₹5 Lakhs', '₹10 Lakhs'] }
];

const content = `
<h4>About The Hackathon</h4>
<p>Write description here...</p>
<h4>Guidelines</h4>
<ul>
  <li>Add guidelines here...</li>
</ul>
<h4>Eligibility Criteria</h4>
<ul>
  <li>Add eligibility criteria here...</li>
</ul>
<h4>Judging Criteria</h4>
<ul>
  <li>Add judging criteria here...</li>
</ul>
`;

export { fields, content };
