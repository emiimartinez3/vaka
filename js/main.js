gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".container");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
});


const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
  window.location.href = 'login.html'
}

const logout = document.querySelector('#logout');

logout.addEventListener('click', ()=> {
  alert("Nos vemos pronto!")
  localStorage.removeItem('login_success')
  window.location.href = 'login.html'
})