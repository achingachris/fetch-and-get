// fetch => in-built
// axios => 3rd party
const axios = require("axios");
const apiURL = "http://localhost:8000/marvelstars";

// fetch(apiURL)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Failed to fetch data. Status code: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((marvelstars) => {
//     console.log("Fetched Marvel Stars:");
//     marvelstars.forEach((star) => {
//       console.log(star);
//     });
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// axios
//   .get(apiURL)
//   .then((response) => {
//     const marvelstars = response.data;
//     console.log("Fetched Marvel Stars:");
//     marvelstars.forEach((star) => {
//       console.log(star);
//     });
//   })
//   .catch((error) => {
//     console.error(
//       `Failed to fetch data. Status code: ${error.response.status}`
//     );
//   });

// const newStar = {
//   id: 1999,
//   rating: 10,
//   name: "Rose Mohando",
//   stagename: "Rosy",
//   powers: "Singing gospels songs, that apparently Kenyans love them",
// };

// axios
//   .post(apiURL, newStar)
//   .then((response) => {
//     console.log("New Marvel Star added successfully.");
//   })
//   .catch((error) => {
//     console.error(
//       `Failed to add new Marvel Star. Status code: ${error.response.status}`
//     );
//   });

// const updatedStar = {
//   id: 1999,
//   rating: 100000,
//   name: "Rose Mohando",
//   stagename: "Rick Rose",
//   powers: "Singing gospels songs, that apparently Kenyans love them",
// };

// axios
//   .put(`${apiURL}/${updatedStar.id}`, updatedStar)
//   .then((response) => {
//     console.log("Marvel Star updated successfully.");
//   })
//   .catch((error) => {
//     console.error(
//       `Failed to update Marvel Star. Status code: ${error.response.status}`
//     );
//   });







const starIdToDelete = 1;
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