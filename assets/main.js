const fadeElements = document.querySelectorAll(".fade-up");

const revealOnScroll = () => {

  fadeElements.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {
      element.classList.add("show");
    }

  });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();