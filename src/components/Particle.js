import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  // Detect theme from body class
  const isDark = typeof document !== 'undefined' && document.body.className.includes('dark-theme');

  // Theme-aware colors
  const particleColors = isDark
    ? ["#00bcd4", "#00fff0", "#2196f3", "#ffffff"]
    : ["#1976d2", "#90caf9", "#424242", "#212121"];
  const lineColor = isDark ? "#00bcd4" : "#90caf9";

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: particleColors
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: lineColor,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            speed: 0.6,
            out_mode: "out",
          },
          size: {
            value: 2.5,
            random: true,
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.2,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
