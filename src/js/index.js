// Define the router function
function router(path) {
  switch (path) {
    case '/':
      // Handle the root path
      console.log('Welcome to the homepage');
      break;
    case '/about':
      // Handle the about path
      console.log('This is the about page');
      break;
    case '/contact':
      // Handle the contact path
      console.log('Contact us at example@example.com');
      break;
    default:
      // Handle any other paths
      console.log('Page not found');
      break;
  }
}

// Example usage
router('/');
router('/about');
router('/contact');
router('/unknown');
