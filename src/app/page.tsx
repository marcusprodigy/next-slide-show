'use client'
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

const images = [
  'https://static.vecteezy.com/ti/vetor-gratis/p1/9169455-ceu-dourado-por-do-sol-na-costa-natureza-paisagem-vetor.jpg',
  'https://s3.wasabisys.com/instax/74/instax/2022/08/fotografias-de-paisagens-1661176157.jpeg',
  'https://46781.cdn.simplo7.net/static/46781/sku/quadros-por-tema-paisagens-e-natureza-quadro-retangular-paisagem-de-outono-arvores-e-rio--p-1633120224543.jpg',
];

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: nextSlide,
    config: { duration: 10000 }, // Ajuste a propriedade duration para controlar a velocidade (em milissegundos)

  });

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <animated.img
        style={{
          width: isMobile ? '80%' : '100%',
          height: 'auto',
          cursor: 'pointer',
          ...props,
        }}
        src={images[index]}
        alt={`Slide ${index + 1}`}
        onClick={nextSlide}
      />
    </div>
  );
};

function Home() {
  return (
    <div>
      <SlideShow />
    </div>
  );
}

export default Home;
