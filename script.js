// Show the form when the button is clicked
document.querySelector('.btn').addEventListener('click', () => {
  document.getElementById('enquiry-form-container').style.display = 'block';
});

// Close the form
document.getElementById('close-form').addEventListener('click', () => {
  document.getElementById('enquiry-form-container').style.display = 'none';
});

// Handle form submission
document.getElementById('enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Enquiry submitted successfully!');
  document.getElementById('enquiry-form-container').style.display = 'none';
});
