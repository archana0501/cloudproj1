// JavaScript to populate the product dropdown
const productDropdown = document.getElementById('productDropdown');

// Function to populate dropdown options
function populateDropdown() {
  // No changes needed here
}

// Event listener for form submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevents default form submission for demonstration

  // You can handle form submission here (e.g., send data to a server)
  const formData = new FormData(feedbackForm);

  // Convert formData to a plain object
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Add the selected product to the formDataObject
  formDataObject.product = productDropdown.value;

  // Save form data to Cosmos DB (assuming you have a server-side endpoint)
  try {
    const response = await fetch('YOUR_SERVER_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      feedbackForm.reset();
    } else {
      throw new Error('Failed to save form data');
    }
  } catch (error) {
    console.error('Error saving form data:', error);
    alert('Failed to submit form. Please try again.');
  }
});

// Call the function to populate the dropdown when the page loads
window.onload = populateDropdown;
