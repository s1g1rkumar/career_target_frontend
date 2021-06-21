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
                    Expedita voluptas omnis cupiditate totam eveniet nobis sint
                    iste. Dolores est repellat corrupti reprehenderit.
                  </h2>
                  <p>
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed
                    deserunt et. Inventore et et dolor consequatur itaque ut
                    voluptate sed et. Magnam nam ipsum tenetur suscipit
                    voluptatum nam et est corrupti.
                  </p>
                  {/* <div class="text-center text-lg-start">
                    <a
                      href="#"
                      class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Read More</span>
                      <i class="bi bi-arrow-right"></i>
                    </a>
                  </div> */}
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
              <h3>Our Values</h3>
              <p>Odit est perspiciatis laborum et dicta</p>
            </header>

            <div class="row">
              <div class="col-lg-4">
                <div class="box" data-aos="fade-up" data-aos-delay="200">
                  <img src={values1} class="img-fluid" alt="" />
                  <h3>Ad cupiditate sed est odio</h3>
                  <p>
                    Eum ad dolor et. Autem aut fugiat debitis voluptatem
                    consequuntur sit. Et veritatis id.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="fade-up" data-aos-delay="400">
                  <img src={values2} class="img-fluid" alt="" />
                  <h3>Voluptatem voluptatum alias</h3>
                  <p>
                    Repudiandae amet nihil natus in distinctio suscipit id.
                    Doloremque ducimus ea sit non.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="fade-up" data-aos-delay="600">
                  <img src={values3} class="img-fluid" alt="" />
                  <h3>Fugit cupiditate alias nobis.</h3>
                  <p>
                    Quam rem vitae est autem molestias explicabo debitis sint.
                    Vero aliquid quidem commodi.
                  </p>
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
