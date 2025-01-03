export const Footer = () => {
  return (

    <footer class="bg-dark">
      <div class="container-fluid">
        <div class="container pt-4 pb-2">
          <div class="row m-0 m-0 text-white bg-dark">
            <div class="col-sm">
              <div class="container">
                <h3 class="fs-5">ABOUT US</h3>
                <div class="title-line my-4"></div>
                <p>
                  Pellentesque feugiat feugiat ipsum, nec sollicitudin tortor
                  convallis et. In venenatis, turpis eu condimentum ultrices,
                  dui erat elementum ante, vitae finibus nisi libero a justo.
                  Mauris ex ante, imperdiet et elementum id, mollis
                </p>
                <p>
                  Quis felis. Praesent aliquet porttitor sem, at pretium erat
                  tristique at. Proin molestie eros et ipsum pretium efficitur.
                  Curabitur ligula sem, auctor at malesuada non, lobortis ornare
                  dolor. Ut vitae ante non lectus fermentum
                </p>
              </div>
            </div>
            <div class="col-sm">
              <div class="container">
                <h3 class="fs-5">NEWSLETTER</h3>
                <div class="title-line my-4 my-4"></div>
                <p>
                  Subscribe to our newsletter for news, updates, exclusive
                  discounts and offers.
                </p>
                <input
                  type="text"
                  class="form-control"
                  id="subscribe"
                  name="subscriber"
                  style={{borderRadius: "0px"}}
                />
                <button
                  class="btn text-light bg-danger mt-3 py-2 px-4 p-2"
                  style={{borderRadius: "50px"}}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div class="col-sm">
              <div class="container">
                <h3 class="fs-5">CONTACT DETAILS</h3>
                <div class="title-line my-4 my-4"></div>
                <span
                  ><p>
                    <i class="bi bi-geo-alt-fill fs-4 text-light pe-lg-3"></i>
                    700 5th Avenue, New York City, United States
                  </p></span
                >
                <span
                  ><p>
                    <i class="bi bi-telephone-fill fs-4 text-light pe-lg-3"></i>
                    1800-1111-2222 <br /><span class="text-secondary ms-lg-5"
                      >Mon-Fri, 9.00am until 6.30pm</span
                    >
                  </p></span
                >
                <span
                  ><p>
                    <i class="bi bi-envelope-fill fs-4 text-light pe-lg-3"></i>
                    booking@example.com<br /><span
                      class="text-secondary ms-lg-5"
                      >We reply within 24hrs</span
                    >
                  </p></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="text-white" />
      <p
        class="d-flex justify-content-center text-white"
        style={{paddingTop: "20px", paddingBottom: "20px"}}
      >
        © 2024 Brassyacademy.All Rights Reserved
      </p>
    </footer>
    
  )
}
export default Footer;
