import React, { useRef, useEffect } from 'react';

const ParticulasCanvas = () => {
 
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');
     
    let animationFrameId;

    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    let mouse = {
      x: undefined,
      y: undefined
    };
 
    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };
 
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
 
    class Cuadrado {
      constructor(x, y, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.size = 7.5;
        this.minSize = 1.2; 
      }

      draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        if (this.x + this.size > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.size > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

       
       if (mouse.x - this.x < 50 && mouse.x - this.x > - 50 && mouse.y - this.y < 50 && mouse.y - this.y > - 50){

    if (this.size < 5){
        this.size += 0.2;
         
    }

} else if (this.size > this.minSize){
this.size -= 0.1;
 
}


        this.draw();
      }
    }

    let arrayCuadrados = [];

    const init = () => {
      arrayCuadrados = [];
      for (let i = 0; i < 3000; i++) {
        let size = 0.5; 
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let dx = Math.random() * 1;
        let dy = Math.random() * 1.8;
        let color = 'white';  
        arrayCuadrados.push(new Cuadrado(x, y, dx, dy, color));
      }
    };

    const animate = () => {
      
      animationFrameId = requestAnimationFrame(animate);
      
      c.clearRect(0, 0, canvas.width, canvas.height);

      arrayCuadrados.forEach((innerSquares) => {
        innerSquares.update();
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);

    
    init();
    animate();

    //     (Cleanup)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };

  }, []);  

  return (
    <canvas 
      ref={canvasRef} 
      style={{ display: 'block', backgroundColor: '#111' }} 
    />
  );
};

export default ParticulasCanvas;