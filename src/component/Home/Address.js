import React from 'react';

const Address = () => {
  return (
    <>



<div
      class="row m-0 bg-black text-light mt-4 mb-4"
    >
      <div class="col border-right-1">
        <div class="col-sm text-center bg-danger py-lg-2">
          <p>Distance</p>
        </div>
        <div class="col-sm text-center py-lg-2">
          <p>Hourly</p>
        </div>
        <div class="col-sm text-center py-lg-2">
          <p>Flat Rate</p>
        </div>
      </div>

      <div class="col-sm mt-lg-5">
        <form class="form-label">
          <label for="address">Pickup Address</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter a location"
          />
        </form>
      </div>
      <div class="col-sm mt-lg-5">
        <form class="form-label">
          <label for="address">Drop Off Address</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter a location"
          />
        </form>
      </div>
      <div class="col-sm mt-lg-5">
        <form class="form-label">
          <label for="add">Return</label>
          <input class="form-control" type="text" placeholder="One Way" />
        </form>
      </div>
      <div class="col-sm mt-lg-5">
        <form class="form-label">
          <label for="address">Pick Up Date</label>
          <input class="form-control" type="date" placeholder="17/05/2024" />
        </form>
      </div>
      <div class="col-sm mt-lg-5">
        <form class="form-label">
          <label for="address">Pick Up Time</label>
          <input class="form-control" type="time" placeholder="17/05/2024" />
        </form>
      </div>
      <div class="col-sm mt-lg-5 mb-sm-4">
        <button
          class="btn text-light py-3 px-4"
          style={{backgroundColor: "rgb(239, 73, 101)", borderRadius: "50px"}}
        >
          Reserve Now {">"}
        </button>
      </div>
    </div>

     {/* Start */}

      <div className="container d-flex justify-content-center align-items-center flex-column mt-5 mb-5">
        <p className="fs-3">Our Fleet</p>
        <div className="my-3 title-line"
          // style={{ backgroundColor: 'rgb(230, 67, 67)', width: '4rem', height: '3px' }}
        ></div>
        <p className="text-center">
          Choose from a wide selection of boats ranging from luxury motor yachts to classic sailing yachts. We have every
          type of boat available to meet your needs. We also take custom orders, and your needs
          will help us acquire a specific yacht.
          <br />
        </p>
      </div>
    </>
  );
};

export default Address;
