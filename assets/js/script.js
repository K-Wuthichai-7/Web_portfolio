// Navabr

class Icon_social extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <div class="social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/get.richard1/" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
        `
    }
}

customElements.define('icon-social', Icon_social)

// Navbar end


// Education
class Education extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
         <h4>
            Vocational Diploma in  &amp; Digital Technologys
        </h4>
            <h5>2021 - 2023</h5>
        <p><em>Intrachai Commercial College,Bangkok,Thai</em></p>
        <p>
            Digital Business Technology major (Professional Associate Degree) or Business Computer major (Professional    Associate
            Degree) Study information technology subjects. To be used in the business and industrial sectors Learn from the basics
            of computer systems, working principles, computer network systems. Maintain and repair computers, including using office
            programs.
        </p>
        `
    }
}

customElements.define('education-one', Education)




class EducationTwo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
     
        <h4>Bachelor of Science in &amp; Computer Science</h4>
        <h5>2023 - Present</h5>
        <p><em>Rajamangala university of technology</em></p>
        <p>
            Computer science It is a field of study that focuses on learning about computer programming. Software design and development Working with databases, coding, and many other things related to computers.
        </p>
        `
    }
}

customElements.define('education-two', EducationTwo)

// Education end


// Pjpanchaksilu
class Pjpanchaksilut extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/panchaksilut.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web 1</h4>
              <p>panchaksilut</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/panchaksilut.png" data-gallery="portfolioGallery"
                  class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="https://panchaksilut-11.000webhostapp.com/index.php" data-gallery="portfolioDetailsGallery"
                  data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i
                    class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
        `
    }
}

customElements.define('pj-panchaksilut', Pjpanchaksilut)
// Pjpanchaksilu