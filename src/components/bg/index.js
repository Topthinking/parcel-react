import React from 'react'
import 'particles.js'

import './index.scss'

const particlesJsonData = {
    "particles": {
        "number": {
            "value": 200,
            "density": {
              "enable": true,
              "value_area": 800
            }
         },
        "color": {
            "value": "#ccc"
        },
        "shape": {
            "type": "circle",
            "stroke": {
              "width": 2,
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
            "value": 0.8,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 2,
              "opacity_min": 0.4,
              "sync": false
            }
        },
        "size": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 20,
              "size_min": 0.1,
              "sync": false
            }
        },
          "line_linked": {
            "enable": true,
            "distance": 40,
            "color": "#ccc",
            "opacity": 1,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
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
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
      },
      "modes": {
          "grab": {
              "distance": 120,
              "line_linked": {
                "opacity": 1
              }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 300
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
    }
}

export default class Bg extends React.Component { 

    componentDidMount() { 
        particlesJS('particles-js',particlesJsonData);
    }

    render() { 
        return (
            <div id="particles-js">  
                <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }}></canvas> 
            </div>  
        )    
    }
}