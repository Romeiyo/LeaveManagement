let currentAction = '';

function goBack() {
  // Navigate back to previous page
  //window.history.back();
  window.location.href = 'supervisor.html';
}

function downloadFile() {
  // Simulate file download
  alert('Downloading: Doctor\'s Note.pdf');
  // In a real application, you would trigger an actual file download here
}

function showModal(action) {
  currentAction = action;
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const message = document.getElementById('modal-message');

  switch(action) {
    case 'approve':
      title.textContent = 'Approve Leave Request';
      message.textContent = 'Are you sure you want to approve this leave request?';
      break;
    case 'reject':
      title.textContent = 'Reject Leave Request';
      message.textContent = 'Are you sure you want to reject this leave request?';
      break;
    case 'suggest':
      title.textContent = 'Suggest Changes';
      message.textContent = 'Would you like to suggest changes to this leave request?';
      break;
  }

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

function confirmAction() {
  // Handle the action based on currentAction
  switch(currentAction) {
    case 'approve':
      alert('Leave request approved successfully!');
      // In a real app, you would send this to your backend
      break;
    case 'reject':
      alert('Leave request rejected.');
      // In a real app, you would send this to your backend
      break;
    case 'suggest':
      alert('Suggestion sent to employee.');
      // In a real app, you would send this to your backend
      break;
  }

  closeModal();
  
  // Optionally redirect back after action
  setTimeout(() => {
    goBack();
  }, 1500);
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});