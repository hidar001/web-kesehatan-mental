/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    // Hapus console.log debug
    // console.log('ScrollReveal:', ScrollReveal);
    // console.log('sr:', sr);

    // Konfigurasi ScrollReveal - hapus yang duplikat dan gunakan satu konfigurasi
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true // Aktifkan reset agar animasi muncul setiap scroll
    });

    // Home section animations dengan timing yang lebih cepat
    sr.reveal('.home__title', {
        duration: 1500,
        origin: 'left',
        distance: '70px',
        delay: 200
    });
    
    sr.reveal('.home__subtitle', {
        duration: 1500,
        origin: 'right',
        distance: '70px',
        delay: 300
    });
    
    sr.reveal('.home__description', {
        duration: 1500,
        origin: 'bottom',
        distance: '70px',
        delay: 400
    });
    
    sr.reveal('.home__button', {
        duration: 1500,
        origin: 'bottom',
        distance: '70px',
        delay: 500
    });
    
    sr.reveal('.home__social', {
        duration: 1500,
        origin: 'left',
        distance: '70px',
        delay: 600
    });

    // About section animations
    sr.reveal('.about__container', {
        duration: 1500,
        origin: 'bottom'
    });

    // Symptoms section dengan interval untuk efek cascade
    sr.reveal('.symptoms__description', {
        duration: 1500,
        origin: 'top'
    });
    
    sr.reveal('.symptoms__card', {
        duration: 1500,
        origin: 'bottom',
        distance: '60px',
        interval: 200 // Memberikan delay antara setiap card
    });

    // Tips section dengan interval
    sr.reveal('.tips__card', {
        duration: 1500,
        origin: 'bottom',
        distance: '60px',
        interval: 200
    });

    // Resources section
    sr.reveal('.resources__filters', {
        duration: 1500,
        origin: 'top',
        distance: '40px'
    });
    
    sr.reveal('.resource__card', {
        duration: 1500,
        origin: 'bottom',
        distance: '60px',
        interval: 200
    });

    // Contact section
    sr.reveal('.contact__container', {
        duration: 1500,
        origin: 'bottom',
        distance: '60px'
    });
    
    sr.reveal('.contact__description', {
        duration: 1500,
        delay: 200
    });
    
    sr.reveal('.contact__button', {
        duration: 1500,
        delay: 400,
        origin: 'bottom',
        distance: '40px'
    });

    // Footer animation
    sr.reveal('.footer__container', {
        duration: 1500,
        origin: 'bottom',
        distance: '40px'
    });
});

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Tambahkan konfigurasi ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Terapkan animasi ke elemen-elemen
sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`);
sr.reveal(`.home__description`, {delay: 500});
sr.reveal(`.home__search`, {delay: 600});
sr.reveal(`.home__value`, {delay: 700});
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'});
sr.reveal(`.logos__img`, {interval: 100});
sr.reveal(`.value__images, .contact__content`, {origin: 'left'});
sr.reveal(`.value__content, .contact__images`, {origin: 'right'});

// Tambahkan smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tambahkan animasi navbar saat scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});