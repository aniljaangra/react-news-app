/**
 * Created by Anil Jangra on 5/23/2021
 */
import React, { useState } from 'react';

const Image = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    setIsLoading(false);
  }

  return (
    <>
      <img
        className="card-img-top"
        src="https://via.placeholder.com/300x200/fff"
        style={{ display: isLoading ? 'block' : 'none' }}
        alt="IMG"
      />
      <img
        className="card-img-top"
        src={src}
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={onLoad}
        alt="IMG"
      />
    </>
  );
};

export default Image;
