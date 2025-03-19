gsap.registerPlugin(ScrollTrigger);

// Timeline
let tl = gsap.timeline()


tl.from('#logo-41promo', 
    {
        duration: .3,
        y: -50,
    }
)

tl.to('.hero', {
 opacity: 1,
 y: -40,
 duration: .8,
 ease: 'power1.out'
})

tl.to("#h1", {
    clipPath: "inset(0 0 100% 0)",
    y: 200, // Define o quanto o texto desce
    scrollTrigger: {
        trigger: "#h1",
        start: "100% center",
        end: "bottom top",
        scrub: true // Suaviza o movimento com o scroll
    }
});

tl.to("#h2", {
    clipPath: "inset(0 0 100% 0)",
    y: 500, // Define o quanto o texto desce
    opacity: 1,
    scrollTrigger: {
        trigger: "#h2",
        start: "top center",
        end: "bottom top",
        scrub: true // Suaviza o movimento com o scroll
    }
});

tl.to("#h3", {
    clipPath: "inset(0 0 100% 0)",
    y: 500, // Define o quanto o texto desce
    opacity: 1,

    scrollTrigger: {
        trigger: "#h3",
        start: "top center",
        end: "bottom top",
        scrub: true // Suaviza o movimento com o scroll
    }
});
tl.to("#h4", {
    clipPath: "inset(0 0 100% 0)",
    y: 200, // Define o quanto o texto desce
    opacity: 1,

    scrollTrigger: {
        trigger: "#h4",
        start: "top center",
        end: "bottom top",
        scrub: true // Suaviza o movimento com o scroll
    }
});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('<strong>Conexões</strong>, ')
  .pauseFor(350)
  .typeString('criatividade, ')
  .pauseFor(350)
  .typeString('celebração.')
  .pauseFor(5000)
  .start();

 
  function initColorScroll() {
    const sections = document.querySelectorAll('.color-section')
 


  sections.forEach(section => {
    const sectionId = section.getAttribute('id');
    const bgColor = section.getAttribute('data-bgcolor');


ScrollTrigger.create({
    trigger: section,
    start: 'top 50%',
    end: 'bottom 50%',

    onEnter: () => updateColors(bgColor, sectionId),
    onEnterBack: () => updateColors(bgColor, sectionId),
    
    
});
  });

  function updateColors(bgColor, sectionId) {
    
    console.log('Entering section: ${sectionId}');

    gsap.to('body', {
        backgroundColor: bgColor,
        duration: 0.5,
        ease: 'power1.inOut'
    })
};
};

  // iniciar função
  window.addEventListener('load', initColorScroll);




    