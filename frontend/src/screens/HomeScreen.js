import React, { useState, useEffect, Fragment } from 'react';
// import menu from '../menu';
import Dish from '../components/Dish';
import axios from 'axios';

const HomeScreen = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await axios.get('/api/dishes');

      setDishes(data);
    };

    fetchDishes();
  }, []);
  return (
    <>
      <h1>Popular Dishes</h1>

      {dishes.map((card) => (
        <Fragment key={card._id}>
          <Dish card={card} />
        </Fragment>
      ))}
    </>
  );
};

export default HomeScreen;
