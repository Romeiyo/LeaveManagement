window.addEventListener('load', function() {
  const splash = document.getElementById('splash-container');
  const loginContent = document.getElementById('login-container');
  
  //Wait 3s then fade out the splash screen
  setTimeout(function() {
    splash.style.opacity = '0';
    
    //After fade animation completes
    setTimeout(function() {
      splash.style.display = 'none';
      loginContent.style.display = 'block';
    }, 600); 
  }, 3000);
});

