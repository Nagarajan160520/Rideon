import React from 'react';
import video from "../../Assets/Rideon video/Drive.mp4";

const Video = () => {
  return (
    <> 
      <div className="container mt-5">
        <div className="row m-0">
          <div className="col-lg">
            <p className="fs-3">About Us</p>
            <div className='title-line my-3'
              // style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
            ></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              deleniti eum a voluptatem vero omnis ab ad, maxime voluptatum amet,
              dolorem modi possimus placeat aliquid libero et vitae, rem
              repudiandae! Lorem ipsum dolor sit amet.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              minima. In accusamus, soluta nesciunt omnis non vel voluptatem
              maiores corporis quaerat, quo dicta dolores amet fugiat ducimus
              possimus doloribus impedit minus! Corporis, soluta!
            </p>
            <input
              type="button"
              value="Learn more >"
              className="btn bg-danger text-white rounded-pill mb-3"
              style={{ border: 0 }}
            />
          </div>
          <div className="col-lg">
            <div className="card bg-secondary">
              <video width="100%" height="400" controls autoplay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;