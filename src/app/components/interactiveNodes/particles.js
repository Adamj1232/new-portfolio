import React from 'react';
import Particles from 'react-particles-js';

const ParticleNodes = () => {
  return (
    <Particles
    style={{
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    }}
    params={{
        "particles": {
          "number": {
            "value": 200,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.25,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 90.57680220235335,
              "size_min": 3.060386061506725,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 40.2388442605866,
            "color": "#53210D",
            "opacity": 0.5,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2.006824121731046,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble, grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 167.83216783216784,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 100,
              "size": 1,
              "duration": 1,
              "opacity": 5,
              "speed": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 10
            },
            "remove": {
              "particles_nb": 0
            }
          }
        },
        "retina_detect": true
    }}/>
  );
};

export default ParticleNodes;
