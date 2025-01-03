import React from 'react';


const Content = () => {
    return (
        <>

            {/* <div className="container">
                <div className="row m-0 mt-5">
                    <div className="col-md-6">
                        <p className="fs-3">
                            <i className="bi bi-calendar-check p-3 text-danger"></i>Easy Online Booking
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
                            aliquid rerum fugit voluptatum architecto maxime reprehenderit
                            necessitatibus beatae odio totam?
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="fs-3">
                            <i className="bi bi-bookmark-star p-3 text-danger"></i>Professional Drivers
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
                            temporibus minus eius eligendi excepturi itaque adipisci nam explicabo
                            delectus aliquam.
                        </p>
                    </div>
                </div>

                <div className="row m-0 mt-5">
                    <div className="col-md-6">
                        <p className="fs-3">
                            <i className="bi bi-car-front-fill p-3 text-danger "></i>Big Fleet of Vehicles
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
                            aliquid rerum fugit voluptatum architecto maxime reprehenderit
                            necessitatibus beatae odio totam?
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p className="fs-3">
                        <i className="bi bi-card-checklist text-danger "></i>
                           
                            Online Payment
                        </p>
                        <div
                            className="ms-5"
                            style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
                        ></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
                            temporibus minus eius eligendi excepturi itaque adipisci nam explicabo
                            delectus aliquam.
                        </p>
                    </div>
                </div>
            </div> */}



<div class="container mb-5">
      <div class="row m-0 m-0 my-4">
        <div class="col-lg-1">
          <div class="icon-borders" style={{color: "rgb(141, 1, 1)"}}>
            <span><i class="bi bi-calendar2-check h1 py-3 px-3"></i></span>
          </div>
        </div>
        <div class="col-lg-5 col-sm-8 query-1">
          <h3>Easy Online Booking</h3>
          <div class="title-line my-4 my-3"></div>
          <p>
            Vestibulum efficitur se sit amet sem semper luctus pellentes auctor
            tristique ornare. Ut porta ut magna in cursus.
          </p>
        </div>
        <div class="col-lg-1">
          <div class="icon-borders" style={{color: "rgb(141, 1, 1)"}}>
            <span><i class="bi bi-star-fill h1 py-3 px-3"></i></span>
          </div>
        </div>
        <div class="col-lg-5 query-1">
          <h3>Professional Drivers</h3>
          <div class="title-line my-4 my-3"></div>
          <p>
            Vestibulum efficitur se sit amet sem semper luctus pellentes auctor
            tristique ornare. Ut porta ut magna in cursus.
          </p>
        </div>
      </div>
      <div class="row m-0 m-0">
        <div class="col-lg-1">
          <div class="icon-borders" style={{color: "rgb(141, 1, 1)"}}>
            <span><i class="bi bi-car-front-fill h1 py-3 px-3"></i></span>
          </div>
        </div>
        <div class="col-lg-5 query-1">
          <h3>Big Fleet Of Vehicles</h3>
          <div class="title-line my-4 my-3"></div>
          <p>
            Vestibulum efficitur se sit amet sem semper luctus pellentes auctor
            tristique ornare. Ut porta ut magna in cursus.
          </p>
        </div>
        <div class="col-lg-1">
          <div class="icon-borders text-center" style={{color: "rgb(141, 1, 1)"}}>
            <span><i class="fa fa-cc-visa fs-3 px-3 py-2"></i></span>
          </div>
        </div>
        <div class="col-lg-5 query-1">
          <h3>Online Payment</h3>
          <div class="title-line my-4 my-3"></div>
          <p>
            Vestibulum efficitur se sit amet sem semper luctus pellentes auctor
            tristique ornare. Ut porta ut magna in cursus.
          </p>
        </div>
      </div>
    </div>
        </>
    );
};

export default Content;
