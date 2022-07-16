(() => {
  const refs = {
    openFormBtn: document.querySelector('[data-form-open]'),
    closeFormBtn: document.querySelector('[data-form-close]'),
    form: document.querySelector('[data-form]'),
    body: document.querySelector('body'),

    openGeoBtn: document.querySelector('[data-geo-open]'),
    closeGeoBtn: document.querySelector('[data-geo-close]'),
    geo: document.querySelector('[data-geo]'),
  };

  refs.openFormBtn.addEventListener('click', toggleForm);
  refs.closeFormBtn.addEventListener('click', toggleForm);

  refs.openGeoBtn.addEventListener('click', toggleGeo);
  refs.closeGeoBtn.addEventListener('click', toggleGeo);

  function toggleGeo() {
    refs.geo.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleForm() {
    refs.form.classList.toggle('is-hidden');

    refs.body.classList.toggle('no-scroll');
  }
})();


const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    console.log(n);
    for (slide of slides) {
        slide.classList.remove('active');
    }
     slides[n].classList.add('active');
}

const activeDot = n => {
    console.log(n);
    for (dot of dots) {
        dot.classList.remove('active_dot');
    }
     dots[n].classList.add('active_dot');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind)
    activeDot(ind)
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
        }  
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1
        prepareCurrentSliden(index);
    } else {
        index--;
        prepareCurrentSlide(index);
        }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);