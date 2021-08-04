import React from 'react'
import { Code, Computer, Mobile } from '../assets/icon'

const About = () => (
  <main id="content">
    <div class="card card-content">
      <div class="container">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="text-white title-content">
                <span>About</span> me
              </h3>
            </div>
            <div class="col-lg-12 mt-4">
              <p class="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur doloremque vel, vero tempore minima, dolore modi
                facilis corrupti voluptatum repellendus fugit laborum molestias
                delectus recusandae quaerat, dolor harum nostrum. Tempora?
                Fugit, commodi? Reprehenderit praesentium reiciendis
                voluptatibus porro alias? Fuga reiciendis temporibus magnam
                minima libero? Dignissimos ullam rem repellendus aperiam maiores
                molestias facere, voluptatem iure, adipisci perspiciatis nobis
                repudiandae fuga totam. Molestias ea non, porro assumenda
                voluptatem soluta tempore error eius. Minus maxime ipsa minima
                fuga provident sint omnis voluptatum veritatis accusantium
                animi, aut dolores, nemo harum mollitia corrupti ex asperiores.
              </p>
              <div class="row">
                <div class="col-lg-3 d-grid gap-2">
                  <a href="portfolio.html" class="btn btn-primary-template">
                    <i class="fas fa-arrow-left"></i> View Portfolio
                  </a>
                </div>
                <div class="col-lg-3 d-grid gap-2">
                  <a
                    href="mailto:bag4sk4r4@gmail.com"
                    class="btn btn-outline-light btn-outline-template"
                  >
                    <i class="fas fa-envelope"></i> Contact me
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mt-5">
              <h5 class="text-white">What I'm Doing</h5>
            </div>
            <div class="col-lg-12 mt-3">
              <div class="row">
                <div class="col-lg-5 mb-3">
                  <div class="card card-about">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4">
                          <img
                            class="icon-about"
                            src={Computer}
                            width="80"
                            height="80"
                          />
                        </div>
                        <div class="col-lg-8 d-flex flex-column">
                          <h6>Web Design</h6>
                          <p class="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 col-md-12 mb-3">
                  <div class="card card-about">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4">
                          <img
                            class="icon-about"
                            src={Code}
                            width="80"
                            height="80"
                          />
                        </div>
                        <div class="col-lg-8 d-flex flex-column">
                          <h6>Web Development</h6>
                          <p class="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 mb-3">
                  <div class="card card-about">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-lg-4">
                          <img
                            class="icon-about"
                            src={Mobile}
                            width="80"
                            height="80"
                          />
                        </div>
                        <div class="col-lg-8 d-flex flex-column">
                          <h6>Mobile Apps</h6>
                          <p class="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
)

export default About
