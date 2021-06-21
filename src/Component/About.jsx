import React from "react";
import "../CSS/About.css";
import values1 from "../Images/values-1.png";
import values2 from "../Images/values-2.png";
import values3 from "../Images/values-3.png";
import hero from "../Images/hero-img.png";
function About() {
  return (
    <>
      <main id="main">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row gx-0">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="content">
                  <h3>Who We Are</h3>
                  <h2>
                    We provide a variety of services for you to learn, thrive
                    and also have fun!
                  </h2>
                  <p>Free Tutorials, Articles,Frequent Coding Competitions.</p>
                  <p>
                    CareerTarget is a platform to learn skills that you need for
                    technology jobs. We help you polish your skills and get
                    ready for the job, whether you are a fresh college graduate
                    or a working professional.
                  </p>
                </div>
              </div>

              <div
                class="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={hero} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Values Section ======= --> */}
        <section id="values" class="values">
          <div class="container" data-aos="fade-up">
            <header class="section-header text-center">
              <h3>Our values</h3>
              <p>
                If you are passionate about tackling some of the most
                interesting problems around,
              </p>
              <p>we would love to hear from you.</p>
            </header>

            <div class="row">
              <div class="col-lg-4">
                <div class="box" data-aos="fade-up" data-aos-delay="200">
                  <img src={values1} class="img-fluid" alt="" />
                  <h3>Data Driven</h3>
                  <p>We never stop learning</p>
                  <p>We operate in a ‘no excuse’ zone</p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="fade-up" data-aos-delay="400">
                  <img src={values2} class="img-fluid" alt="" />
                  <h3>Customer Delight</h3>
                  <p>We are obsessed with customer happiness</p>
                  <p>We sweat the details in every interaction</p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="fade-up" data-aos-delay="600">
                  <img src={values3} class="img-fluid" alt="" />
                  <h3>Giver</h3>
                  <p>We are direct, but not mean</p>
                  <p>We make time to help others achieve their goals</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Values Section --> */}
        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" class="counts">
          <div class="container" data-aos="fade-up">
            <div class="row gy-4">
              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="far fa-smile" style={{ color: "#40E0D0" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      class="purecounter"
                    >
                      2000+
                    </span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="far fa-file-alt" style={{ color: "#ee6c20" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="1"
                      class="purecounter"
                    >
                      10+
                    </span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="fas fa-headset" style={{ color: "#15be56" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1463"
                      data-purecounter-duration="1"
                      class="purecounter"
                    >
                      4560+
                    </span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="fas fa-user" style={{ color: "#bb0852" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-duration="1"
                      class="purecounter"
                    >
                      100+
                    </span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}
      </main>
    </>
  );
}

export default About;
