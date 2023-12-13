const apiURL = 'http://localhost:8000/marvelstars';

// Fetch data (GET request)
fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }
    return response.json();
  })
  .then(marvelstars => {
    console.log('Fetched Marvel Stars:');
    marvelstars.forEach(star => {
      console.log(star);
    });
  })
  .catch(error => {
    console.error(error.message);
  });

// Get a Marvel star by ID (GET request)
const starIdToGet = 1;
fetch(`${apiURL}/${starIdToGet}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to get Marvel Star by ID. Status code: ${response.status}`);
    }
    return response.json();
  })
  .then(marvelstar => {
    console.log(`Marvel Star with ID ${starIdToGet}:`);
    console.log(marvelstar);
  })
  .catch(error => {
    console.error(error.message);
  });

// Add a new Marvel star (POST request)
const newStar = {
  id: 18,
  rating: 9,
  name: 'Diana Prince',
  stagename: 'Wonder Woman',
  powers: 'Superhuman strength, agility, and durability. Wields the Lasso of Truth and indestructible bracelets.',
};

fetch(apiURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newStar),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to add new Marvel Star. Status code: ${response.status}`);
    }
    console.log('New Marvel Star added successfully.');
  })
  .catch(error => {
    console.error(error.message);
  });

// Edit an existing Marvel star (PUT request)
const updatedStar = {
  id: 1,
  rating: 9,
  name: 'Tony Stark',
  stagename: 'Ironman',
  powers: 'Upgraded powered armor with new features and enhancements.',
};

fetch(`${apiURL}/${updatedStar.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedStar),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to update Marvel Star. Status code: ${response.status}`);
    }
    console.log('Marvel Star updated successfully.');
  })
  .catch(error => {
    console.error(error.message);
  });

// Delete a Marvel star by ID (DELETE request)
const starIdToDelete = 2;
fetch(`${apiURL}/${starIdToDelete}`, {
  method: 'DELETE',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to delete Marvel Star by ID. Status code: ${response.status}`);
    }
    console.log(`Marvel Star with ID ${starIdToDelete} deleted successfully.`);
  })
  .catch(error => {
    console.error(error.message);
  });
