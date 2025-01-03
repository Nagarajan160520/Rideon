import React from 'react';
import img7 from "../../Assets/Rideon Images/img-7.jpg";
import video from "../../Assets/Rideon video/Drive.mp4";



const Worksection = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4">
            <div className="col-md-6">
                <p className="fs-3">How We Work</p>
                <div
                className='title-line my-3'
                />
                <div className="card bg-secondary mt-3">
                <video width="100%" height="400" controls autoplay loop muted>
            <source src={video} type="video/mp4" />
            Your brow m-0 m-0ser does not support the video tag.
          </video>
                </div>
            </div>
            <div className="col-md-6 mt-sm-3">
                <p className="fs-3">Our Mission</p>
                <div
                className='title-line my-3' />
                <p className="border-bottom">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
                quidem amet quisquam est soluta voluptatum repellat consequatur ipsa
                velit dolores, deserunt voluptate itaque distinctio aperiam?
                </p>

                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
                <p className="border-bottom py-3">
                <i className="bi bi-chevron-right text-danger"></i> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nam, quis!
                </p>
            </div>
        </div>
      </div>
      
    </>
  );
}

export default Worksection;
