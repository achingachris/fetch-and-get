import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/marvelstars")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  // Ensure that data is an array before mapping
  if (!Array.isArray(data)) return <p>Data format is incorrect.</p>;

  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index}>
          <h5>{item.name} ({item.stagename})</h5>
          <p>Rating: {item.rating}</p>
          <p>Powers: {item.powers}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
