import React, { useEffect, useRef } from "react";
import { Background } from "./SpaceBackground.styles";
  
const SpaceBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Arreglo para almacenar estrellas
        let stars = [];

        // Crear estrellas en posiciones y tamaños aleatorios
        const createStars= () => {
            stars =[];
            // Numero de estrellas basado en el tamaño de la pantalla
            const startCount = Math.floor((canvas.width * canvas.height) /1000);

            for(let i = 0; i < startCount; i++){
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2,
                    brightness: Math.random(),
                    speed: 0.05 + Math.random() * 0.1,
                });
            }
        };

        // Ajustar el tamaño del canvas al de la ventana
        const handleResize= () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createStars();
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Animacion de estrellas
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0a0e17';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Dibujar estrellas
            stars.forEach(star => {
                // Variacion de brillo 
                star.brightness+= star.speed * (Math.random() > 0.5 ? 1 : -1);
                star.brightness = Math.max(0.2, Math.min(1, star.brightness));

                ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Ocasionalmente, añadir una estrella fugaz
            if(Math.random() < 0.005){
                const shootingStar = {
                    x: Math.random() * canvas.width,
                    y: 0,
                    length: 50 + Math.random() * 100,
                    speed: 10 + Math.random() *20,
                    angle: Math.PI /4 + (Math.random() * Math.PI) /4
                };

                drawShootingStar(shootingStar);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Funcion para dibujar estrellas fugaces
        const drawShootingStar = (star) => {
            // Verificar que los valores sean validos
            if(!isFinite(star.x) || !isFinite(star.y) || !isFinite(star.angle) || !isFinite(star.length)){
                console.error('Valores no válidos para estrella fugaz:', star);
                return;
            };
            const endX = star.x + Math.cos(star.angle) * star.length;
            const endY = star.y + Math.sin(star.angle) * star.length;

            // Verificar que los puntos finales sean válidos
            if (!isFinite(endX) || !isFinite(endY)) {
                console.error('Puntos finales no válidos:', { endX, endY });
                return;
            };

            const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
        };

        createStars();
        animate();

        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <Background>
            <canvas ref={canvasRef} className="stars-canvas" />
        </Background>
    );
};

export default SpaceBackground;
