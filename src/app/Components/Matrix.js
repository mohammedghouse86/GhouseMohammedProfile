'use client'

import React, { useEffect, useState } from 'react';
import './Matrix.css';

const MatrixEffect = () => {
  const [displaymatrix, setdisplaymatrix]=useState('block');
  useEffect(() => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters and settings
    const characters = '!@#$%^&*(123475ABCDEFGHIJ89';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    // Draw the matrix effect
    const draw = () => {
      // Set background color with transparency for fading effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      // Loop over each drop and draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset drop to the top of the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment the drop's Y position
        drops[i]++;
      }
    };

    // Set interval to create the falling effect
    const intervalId = setInterval(draw, 50);

    // Stop the animation after 4 seconds
    setTimeout(() => {
      clearInterval(intervalId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setdisplaymatrix('none'); // Clear the canvas
    }, 2900);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <canvas style={{backgroundColor:'back', display:displaymatrix}} id="matrixCanvas"></canvas>;
};

export default MatrixEffect;
