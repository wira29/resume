import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About } from './pages'

const App = () => (
  <div class="wrapper">
    <aside id="sidebar" class="p-3">
      <div class="row justify-content-center">
        <div class="col-lg-12 d-flex justify-content-center">
          <img
            class="img-fluid rounded-circle"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            width="120"
            height="120"
            alt=""
          />
        </div>
        <div class="col-lg-12 d-flex justify-content-center mt-3">
          <span class="label">Programmer</span>
        </div>
        <div class="col-lg-12 d-flex justify-content-center mt-3">
          <h6 class="name">Wiradarma Nurmagika Bagaskara</h6>
        </div>
        <div class="col-lg-6 mt-1">
          <ul class="social-media">
            <li>
              {' '}
              <a
                href="https://www.facebook.com/profile.php?id=100008066238761"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="https://www.instagram.com/wirra_29/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="https://github.com/wira29" target="_blank">
                <i class="fab fa-github"></i>
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href="https://www.linkedin.com/in/wiradarma-bagaskara-917859217/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-12">
          <ul class="personal-data">
            <li>
              <i class="far fa-calendar   "></i>
              December 29, 2002
            </li>
            <li class="mt-2">
              <i class="fas fa-map-marker-alt"></i>
              Malang, East Java, Indonesia
            </li>
            <li class="mt-2">
              <i class="far fa-envelope"></i>
              bag4sk4r4@gmail.com
            </li>
            <li class="mt-2">
              <i class="fas fa-mobile-alt"></i>
              +62 3848 0201 20
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-auto">
        <div class="col-lg-12 d-grid gap-2">
          <a href="mailto:bag4sk4r4@gmail.com" class="btn btn-primary-template">
            <i class="fas fa-envelope"></i> Contact Me
          </a>
          <a href="" class="btn btn-outline-light btn-outline-template">
            <i class="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </aside>

    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Resume</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="index.html">
              About me
            </a>
            <a class="nav-link" href="skills.html">
              Skills
            </a>
            <a class="nav-link" href="resume.html">
              Resume
            </a>
            <a class="nav-link" href="portfolio.html">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>

    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={About} />
        </Switch>
      </Suspense>
    </Router>
  </div>
)

export default App
