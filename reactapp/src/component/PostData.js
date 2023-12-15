import React, { useState } from 'react';

const PostData = () => {
    const [inputData, setInputData] = useState({
        id: '', rating: '', name: '', stagename: '', powers: ''
    });

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/marvelstars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputData),
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="id"
                value={inputData.id}
                onChange={handleChange}
                placeholder="ID"
            />
            <input
                type="text"
                name="rating"
                value={inputData.rating}
                onChange={handleChange}
                placeholder="Rating"
            />
            <input
                type="text"
                name="name"
                value={inputData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="stagename"
                value={inputData.stagename}
                onChange={handleChange}
                placeholder="Stage Name"
            />
            <input
                type="text"
                name="powers"
                value={inputData.powers}
                onChange={handleChange}
                placeholder="Powers"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostData;
