import React from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../../src/redux/store';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  return (
    <div>
      <h2>Component B</h2>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;