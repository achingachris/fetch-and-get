const axios = require("axios");

const apiURL = "http://localhost:8000/marvelstars";

// Fetch data (GET request)
axios
  .get(apiURL)
  .then((response) => {
    const marvelstars = response.data;
    console.log("Fetched Marvel Stars:");
    marvelstars.forEach((star) => {
      console.log(star);
    });
  })
  .catch((error) => {
    console.error(
      `Failed to fetch data. Status code: ${error.response.status}`
    );
  });

// Get a Marvel star by ID (GET request)
const starIdToGet = 1;
axios
  .get(`${apiURL}/${starIdToGet}`)
  .then((response) => {
    const marvelstar = response.data;
    console.log(`Marvel Star with ID ${starIdToGet}:`);
    console.log(marvelstar);
  })
  .catch((error) => {
    console.error(
      `Failed to get Marvel Star by ID. Status code: ${error.response.status}`
    );
  });

// Add a new Marvel star (POST request)
const newStar = {
  id: 11,
  rating: 9,
  name: "Diana Prince",
  stagename: "Wonder Woman",
  powers:
    "Superhuman strength, agility, and durability. Wields the Lasso of Truth and indestructible bracelets.",
};

axios
  .post(apiURL, newStar)
  .then((response) => {
    console.log("New Marvel Star added successfully.");
  })
  .catch((error) => {
    console.error(
      `Failed to add new Marvel Star. Status code: ${error.response.status}`
    );
  });

// Edit an existing Marvel star (PUT request)
const updatedStar = {
  id: 1,
  rating: 9,
  name: "Tony Stark",
  stagename: "Ironman",
  powers: "Upgraded powered armor with new features and enhancements.",
};

axios
  .put(`${apiURL}/${updatedStar.id}`, updatedStar)
  .then((response) => {
    console.log("Marvel Star updated successfully.");
  })
  .catch((error) => {
    console.error(
      `Failed to update Marvel Star. Status code: ${error.response.status}`
    );
  });

// Delete a Marvel star by ID (DELETE request)
const starIdToDelete = 2;
axios
  .delete(`${apiURL}/${starIdToDelete}`)
  .then((response) => {
    console.log(`Marvel Star with ID ${starIdToDelete} deleted successfully.`);
  })
  .catch((error) => {
    console.error(
      `Failed to delete Marvel Star by ID. Status code: ${error.response.status}`
    );
  });
