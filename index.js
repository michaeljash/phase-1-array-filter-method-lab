// Code your solution here
// Function to find matching drivers
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function to fuzzy match drivers
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function to match driver names
  function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  