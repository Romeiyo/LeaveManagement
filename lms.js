window.addEventListener('load', function() {
  const splash = document.getElementById('splash-container');
  const mainContent = document.getElementById('login-container');
  
  // Wait 3 seconds, then fade out the splash screen
  setTimeout(function() {
    splash.style.opacity = '0';
    
    // After fade animation completes, hide splash and show content
    setTimeout(function() {
      splash.style.display = 'none';
      mainContent.style.display = 'block';
    }, 600); 
  }, 3000);
});