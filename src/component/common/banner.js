import React from 'react';
import img1 from "../../Assets/Rideon images2/img-1.jpg"

export const Banner = (props) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          height: '35vh',
          width: '100%',
          backgroundSize: 'cover',
          marginTop:"-40px"
        }}
        className="d-flex justify-content-center align-items-center flex-column">
        <p className="fs-1">{props.Title}</p>
        <div className='title-line my-3'></div>
        <p className="text-center">Home {">"} {props.page}</p>
      </div>
    </>
  );
};

export default Banner;
