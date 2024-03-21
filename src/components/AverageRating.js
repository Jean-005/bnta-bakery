import React from 'react';

const AverageRating = ({ averageRating }) => {
  return (
    <>
      <h3 className="AveRtn">Average Rating of All Cakes: {averageRating}</h3>
    </>
  );
};

export default AverageRating;