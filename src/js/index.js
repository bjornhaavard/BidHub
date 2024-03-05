// Define the router function
function router() {
    const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
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
// Calling the router function
router();

