/*=============== A.CHANGE BACKGROUND | FROM GitHub (1.HEADER) ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Saat scroll lebih besar dari 50 tinggi viewport, tambahkan kelas scroll-header ke tag header
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== B.SWIPER POPULAR  | FROM Swiperjs.com (4.POPULAR) ===============*/
var swiper = new Swiper(".popular__container", {
    spaceBetween  : 88,
    grabCursor    : true,
    centeredSlides: true,
    slidesPerView : 'auto',
    loop          : true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

 
/*=============== VALUE ACCORDION (5.VALUE) ===============*/               /*PELAJARI!!*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item)=> {
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open') 

        toggleItem(item)

        if(openItem && openItem!== item){
          toggleItem(openItem)
        }
    })
})


const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
    }else{
      accordionContent.style.height = accordionContent.scrollHeight + 'px' 
      item.classList.add('accordion-open')
    }
}


/*=============== SCROLL SECTIONS ACTIVE LINK  |  FROM GitHub  ===============*/        /*PELAJARI!!*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link') /*Copy to HTML (1.header[html]) (I.active-link[css])*/
		}else{
			sectionsClass.classList.remove('active-link') 
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP | FROM GitHub (9.SCROOL UP)===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Saat scroll lebih tinggi dari 350 viewport height, tambahkan kelas show-scroll ke tag a dengan kelas scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') /*Copy Paste (II.show scrool up[css])*/
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME | FROM GitHub (IV. DARK LIGHT THEME)===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Topik yang dipilih sebelumnya (jika pengguna memilih)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Kami mendapatkan tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas tema gelap
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Kami memvalidasi jika pengguna sebelumnya memilih topik
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Kami menyimpan tema dan ikon saat ini yang dipilih pengguna
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION | From ScrollRevealJS===============*/ 
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true
})

sr.reveal(`.home__title, .popular__container, .subscribe__container`)
sr.reveal('.home__description, .footer__container', {delay: 500})
sr.reveal('.home__search, .footer__info', {delay: 600})
sr.reveal('.home__value', {delay:700})
sr.reveal('.home__images', {delay: 800, origin: 'bottom'})
sr.reveal('.logos__img', {interval:100})
sr.reveal('.value__images, .contact__content', {origin: 'left'})
sr.reveal('.value__content, .contact__images', {origin:'right'})





/*=======LINK REFERAL========*/

/*=====1.GitHub=====*/
/*https://github.com/bedimcode/responsive-watches-website/blob/main/assets/js/main.js*/

/*=====2.SwiperJS=====*/
/*https://swiperjs.com/*/

/*=====3.ScrollRevealJS=====*/
/*https://scrollrevealjs.org/guide/hello-world.html*/