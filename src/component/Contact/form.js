import React from 'react';

export const Form = () => {
    return (
        <>
<div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="col-12 py-lg-2">
            <label for="name" class="form-label"
              >Name<span class="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              class="form-control border-black p-2"
              id="name"
              name="name"
            />
          </div>
          <div class="col-12 py-lg-2">
            <label for="email" class="form-label"
              >Email<span class="text-danger fw-bold">*</span></label
            >
            <input
              type="email"
              class="form-control border-black p-3"
              id="mail"
              name="mail"
            />
          </div>
          <div class="col-12 py-lg-2">
            <label for="text" class="form-label">Subject</label>
            <input
              type="text"
              class="form-control border-black p-2"
              id="subject"
              name="subject"
            />
          </div>
          <div class="col-12 py-lg-2">
            <label for="message" class="form-label"
              >Message<span class="text-danger fw-bold">*</span></label
            >
            <textarea
              type="text"
              class="form-control border-black pb-5 pt-5"
              id="comment"
              name="cmnt"
            ></textarea>
          </div>
          <div class="col-5 py-lg-2 mt-2">
            <button
              class="btn text-light bg-danger mt-3 py-2 px-4 p-2"
              style={{borderRadius: "50px"}}
            >
              Submit
            </button>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="col-lg-12 col-sm-12">
            <h3 >Get In Touch</h3>
            <div class="title-line"></div>
            <br />
            <p>
              Duis commodo ipsum quis ante venenatis rhoncus. Vivamus imperdiet
              felis ac facilisis hendrerit. Nulla eu elementum ex, ut pulvinar
              est. Nam aliquet et tortor sed aliquet. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Integer sit amet aliquet leo sed aliquam ex.
            </p>
          </div>
          <div class="col">
            <h3>Contact Details</h3>
            <div class="title-line my-3"></div>
            <hr />
            <span
              ><p>
                <i class="bi bi-geo-alt-fill fs-4 text-danger pe-lg-3"></i> 700
                5th Avenue, New York City, United States
              </p></span
            >
            <hr />
            <span
              ><p>
                <i class="bi bi-telephone-fill fs-4 text-danger pe-lg-3"></i>
                1800-1111-2222
              </p></span
            >
            <hr />
            <span
              ><p>
                <i class="bi bi-envelope-fill fs-4 text-danger pe-lg-3"></i>
                booking@example.com
              </p></span
            >
            <hr />
          </div>
          <div class="col">
            <h3>Social Media</h3>
            <div class="title-line"></div>


            <ul class="nav unstyled mt-2"> 
              <li class="nav-item"><i class="bi bi-facebook text-danger fs-3 m-2"></i></li>
              <li class="nav-item"><i class="bi bi-instagram text-danger fs-3 m-2"></i></li>
              <li class="nav-item"><i class="bi bi-pinterest text-danger fs-3 m-2"></i></li>
              <li class="nav-item"><i class="bi bi-twitter text-danger fs-3 m-2"></i></li>
              <li class="nav-item"><i class="bi bi-youtube text-danger fs-3 m-2"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <iframe
            class="my-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7887.815334492768!2d77.71291485212595!3d8.70031821815369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0412471d773739%3A0xb4dcacfd574b43d4!2sBRASSY%20ACADEMY%20%7C%20Tirunelveli!5e0!3m2!1sen!2sin!4v1727014916879!5m2!1sen!2sin"
            width="600"
            height="450" 
            style={{ border: 0 ,width: "100%", height: "80vh"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
        </>
    );
};

export default Form;
