import React from "react";
import "../CSS/Services.css";
import features from "../Images/features.png";
import features3 from "../Images/features-3.png";
function Services() {
  return (
    <>
      {/* <!-- ======= Features Section ======= --> */}
      <section id="features" class="features mt-2 pb-5">
        <div class="container" data-aos="fade-up">
          <header class="section-header text-center">
            <h2>Features</h2>
            <p>Technical Help for You.</p>
          </header>

          <div class="row">
            <div class="col-lg-6">
              <img src={features} class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div class="row align-self-center gy-4">
                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <div class="feature-box d-flex align-items-center">
                    <i class="fas bi-check"></i>
                    <h3>IDE for coders</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Development Roadmaps </h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Get Doubt Assistance</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Practice</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Online Quiz</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Code And Learn</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" class="services mt-5 pb-2">
        <div class="container" data-aos="fade-up">
          <header class="section-header text-center">
            <h2>Services</h2>
            <p className="pt-2 ">'Being the Pro in Programming can be easy,</p>
            <p>especially if you start with us.'</p>
          </header>

          <div class="row gy-4 mt-5 pb-5">
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="service-box blue">
                <i
                  class="fas fa-laptop-code"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3 className="pt-2">Online IDE</h3>
                <p>
                  You and run your code online, just only with internet
                  connection.
                </p>

                <a href="#" class="read-more mt-md-4">
                  <span>Visit Now</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="service-box orange">
                <i
                  class="fas fa-book"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3 className="pt-2">Ebooks</h3>
                <p>
                  Learn Computer Science Technology Subjects in easy manner and
                  Free.
                </p>
                <a href="#" class="read-more">
                  <span>Visit Now</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="service-box green">
                <i
                  class="fas fa-route"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3 className="pt-2">Roadmaps</h3>
                <p>
                  Provind Developement Roadmaps so that you can learn
                  accordingly and set your future.
                </p>
                <a href="#" class="read-more">
                  <span>Visit Now</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="service-box red">
                <i
                  class="fas fa-tasks"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3 className="pt-2">Onlize Quiz</h3>
                <p>
                  You can enhance your technical knowledge just by attend online
                  quiz.
                </p>
                <a href="#" class="read-more mt-md-2">
                  <span>Visit Now</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="service-box purple">
                <i
                  class="fas fa-user-circle"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3 className="pt-2">Doubt Assistance</h3>
                <p>you will clear all your Technical double in easy way.</p>
                <a href="#" class="read-more mt-md-4">
                  <span>Visit Now</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div class="service-box pink">
                <i
                  class="fas fa-user-secret"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3 className="pt-2">Practice</h3>
                <p>
                  Learning keeps you in Practise mode so you can be able to
                  place in a company.
                </p>
                <a href="#" class="read-more">
                  <span>Visit Now</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Services Section --> */}
    </>
  );
}

export default Services;
