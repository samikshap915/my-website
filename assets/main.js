/* =========================================================
   FEATURES SECTION ANIMATION
   ========================================================= */

const featureBoxes = document.querySelectorAll('.features .col-md-3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

featureBoxes.forEach(box => {
    observer.observe(box);
});


/* =========================================================
   GOALS SECTION ANIMATION
   ========================================================= */

const goalElements = document.querySelectorAll(
    '.goals-section .col-md-5, .goals-section .col-md-7'
);

const goalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

goalElements.forEach(el => {
    goalObserver.observe(el);
});


/* =========================================================
   STATS SECTION ANIMATION
   ========================================================= */

const statsElements = document.querySelectorAll(
    '.stats-grid .text-center, .stats-section .col-md-7'
);

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

statsElements.forEach(el => {
    statsObserver.observe(el);
});


/* =========================================================
   CTA BAND ANIMATION
   ========================================================= */

const ctaElements = document.querySelectorAll(
    '.cta-band h2, .cta-band p, .cta-band .btn'
);

const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

ctaElements.forEach(el => {
    ctaObserver.observe(el);
});


/* =========================================================
   TESTIMONIAL SECTION ANIMATION
   ========================================================= */

const testimonialSection = document.querySelector('.testimonials');

const testimonialSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

testimonialSectionObserver.observe(testimonialSection);


/* =========================================================
   FOOTER CTA ANIMATION
   ========================================================= */

const footerCTA = document.querySelector('.footer-cta .container');

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

footerObserver.observe(footerCTA);

document.querySelectorAll('.offcanvas .nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    const offcanvasEl = document.getElementById('mobileMenu');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);

    offcanvas.hide();

    offcanvasEl.addEventListener('hidden.bs.offcanvas', function () {
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, { once: true });
  });
});