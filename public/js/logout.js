const logoutHandler = async () => {
    try {
      // Send a GET request to the logout endpoint
      const response = await fetch('/api/users/logout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the login page or another page.
        document.location.replace('/');
      } else {
        alert('Failed to log out.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging out.');
    }
  };
  
  // Add an event listener to the logout link or button
  document.querySelector('#logout-link').addEventListener('click', logoutHandler);