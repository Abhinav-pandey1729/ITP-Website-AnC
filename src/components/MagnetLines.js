import React, { useEffect, useRef } from 'react';
import anime from 'animejs'; // Updated import

const MagnetLines = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines = [];
    const numLines = 50;

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        length: Math.random() * 100 + 50,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      lines.forEach(line => {
        line.x += line.vx;
        line.y += line.vy;

        if (line.x < 0 || line.x > canvas.width) line.vx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.vy *= -1;

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.vx * line.length, line.y + line.vy * line.length);
        ctx.strokeStyle = 'rgba(237, 137, 54, 0.5)';
        ctx.stroke();
      });

      anime({
        targets: lines,
        length: [{ value: 150 }, { value: 50 }],
        duration: 2000,
        easing: 'easeInOutQuad',
        loop: true,
        direction: 'alternate',
      });
    };

    const animation = anime({
      duration: Infinity,
      update: animate,
    });

    return () => animation.pause();
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />;
};

export default MagnetLines;