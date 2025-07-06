let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Estudante de Sistemas para Internet', 'Futura Analista de Dados', 'Entusiasta de Tecnologia'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true, 
});

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: {
    color: {
      value: "transparent"
    }
  },
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        area: 800
      }
    },
    shape: {
      type: "star"
    },
    size: {
      value: 4,
      random: true
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce"
      }
    },
    opacity: {
      value: 0.6,
      random: true
    },
    color: {
      value: "#000000"
    }
  }
});
