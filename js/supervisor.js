// View leave request details
function viewRequest(employeeNumber) {
  console.log('Viewing request for:', employeeNumber);
  // Navigate to leave request details page
  window.location.href = 'request.html?emp=' + employeeNumber;
  
  // In a real application, you would:
  // 1. Pass the employee number to the details page
  // 2. Fetch the complete leave request data
  // 3. Display it on the leave-request.html page
}

// Logout functionality
document.querySelector('.nav-item.logout').addEventListener('click', function(e) {
  e.preventDefault();
  
  const confirmLogout = confirm('Are you sure you want to logout?');
  
  if (confirmLogout) {
    // Clear any stored user data
    // In a real app, you would clear tokens, session data, etc.
    
    // Redirect to login page
    window.location.href = 'login.html';
  }
});

// Add active state to nav items
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    if (!this.classList.contains('logout')) {
      document.querySelectorAll('.nav-item').forEach(nav => {
        nav.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Optional: Add search/filter functionality
function filterTable(searchTerm) {
  const table = document.querySelector('.leave-table tbody');
  const rows = table.querySelectorAll('tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    if (text.includes(searchTerm.toLowerCase())) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Optional: Load data from backend/Firebase
async function loadLeaveRequests() {
  // In a real application, you would:
  // 1. Fetch data from your backend or Firebase
  // 2. Populate the table dynamically
  // 3. Handle loading states and errors
  
  // Example structure:
  // const requests = await fetchLeaveRequests();
  // populateTable(requests);
}

// Call on page load
// loadLeaveRequests();