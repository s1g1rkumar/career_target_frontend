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
            <p>Laboriosam et omnis fuga quis dolor direda fara</p>
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
                    <h3>Eos aspernatur rem</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Facilis neque ipsa</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Volup amet voluptas</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Rerum omnis sint</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Alias possimus</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <div class="feature-box d-flex align-items-center">
                    <i class="bi bi-check"></i>
                    <h3>Repellendus mollitia</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Feature Icons --> */}
          <div class="row feature-icons mt-5 pb-5" data-aos="fade-up">
            <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

            <div class="row">
              <div
                class="col-xl-4 text-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img src={features3} class="img-fluid p-4" alt="" />
              </div>

              <div class="col-xl-8 d-flex content">
                <div class="row align-self-center gy-4">
                  <div class="col-md-6 icon-box" data-aos="fade-up">
                    <i class="ri-line-chart-line"></i>
                    <div>
                      <h4>Corporis voluptates sit</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum
                        pariatur laboris nisi ut aliquip
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i class="ri-stack-line"></i>
                    <div>
                      <h4>Ullamco laboris nisi</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i class="ri-brush-4-line"></i>
                    <div>
                      <h4>Labore consequatur</h4>
                      <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
                        ut maiores omnis facere
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i class="ri-magic-line"></i>
                    <div>
                      <h4>Beatae veritatis</h4>
                      <p>
                        Expedita veritatis consequuntur nihil tempore laudantium
                        vitae denat pacta
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i class="ri-command-line"></i>
                    <div>
                      <h4>Molestiae dolor</h4>
                      <p>
                        Et fuga et deserunt et enim. Dolorem architecto ratione
                        tensa raptor marte
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <i class="ri-radar-line"></i>
                    <div>
                      <h4>Explicabo consectetur</h4>
                      <p>
                        Est autem dicta beatae suscipit. Sint veritatis et sit
                        quasi ab aut inventore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Feature Icons --></div> */}
        </div>
      </section>

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" class="services mt-2 pb-2">
        <div class="container" data-aos="fade-up">
          <header class="section-header text-center">
            <h2>Services</h2>
            <p>Veritatis et dolores facere numquam et praesentium</p>
          </header>

          <div class="row gy-4">
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="service-box blue">
                <i
                  class="fas fa-user"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3>Nesciunt Mete</h3>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
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
                  class="fas fa-user"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3>Eosle Commodi</h3>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
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
                  class="fas fa-user"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3>Ledo Markt</h3>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
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
                  class="fas fa-user"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3>Asperiores Commodi</h3>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur.
                  Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
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
                  class="fas fa-user"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3>Velit Doloremque.</h3>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut
                  aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
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
                  class="fas fa-user"
                  style={{ fontSize: "70px", color: "#D3D3D3" }}
                ></i>
                <h3>Dolori Architecto</h3>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
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
