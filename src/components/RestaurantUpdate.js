import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantUpdate() {
  const [restaurantData, setRestaurantData] = useState({
    name: null,
    email: null,
    address: null,
    rating: null,
  });
  

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/restaurant/${id}`)
      .then((response) => response.json())
      .then((result) => {
        console.warn(result);
        setRestaurantData({
          name: result.name,
          email: result.email,
          address: result.address,
          rating: result.rating,
        });
      });
  }, [id]); // The effect will re-run when 'id' changes
    
  const update = () => {
    fetch(`http://localhost:3000/restaurant/${id}`, {  // Use 'id' directly here
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurantData),
    })
      .then((result) => result.json())
      .then((resp) => {
        alert('Successfully updated');
      });
  };

  return (
    <div>
      <h1>RestaurantUpdate</h1>
      <div>
        <input
          onChange={(event) => setRestaurantData({ ...restaurantData, name: event.target.value })}
          placeholder="Restaurant Name"
          value={restaurantData.name}
        />{' '}
        <br />
        <input
          onChange={(event) => setRestaurantData({ ...restaurantData, address: event.target.value })}
          placeholder="Address"
          value={restaurantData.address}
        />{' '}
        <br />
        <input
          onChange={(event) => setRestaurantData({ ...restaurantData, rating: event.target.value })}
          placeholder="Rating"
          value={restaurantData.rating}
        />{' '}
        <br />
        <input
          onChange={(event) => setRestaurantData({ ...restaurantData, email: event.target.value })}
          placeholder="Email"
          value={restaurantData.email}
        />{' '}
        <br />
         <button onClick={update}>Update Restaurant</button> 
      </div>
    </div>
  );
}

export default RestaurantUpdate;
