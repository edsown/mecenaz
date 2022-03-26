import React from "react";

function Hero() {
  return (
    <div className="HeroSection">
      <section className="Slogan">
        <h1>Nós democratizamos a sua arte.</h1>
        <h4>
          A Mecenaz trabalha para conectar quem ama arte com quem ama fazer
          arte. Sem ninguém precisar sair de casa.
        </h4>
        <button
          onClick={() => window.location.replace("/#artistSection")}
          className="HeroButton"
        >
          Conheça nossos artistas <>&#8594;</>{" "}
        </button>
      </section>
    </div>
  );
}

export default Hero;
