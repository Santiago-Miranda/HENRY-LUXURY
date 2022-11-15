import React from "react";

const Carrousel = () => {
  return (
    <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="true"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://media.revistagq.com/photos/5fae80ed7cdbc96b3a9bb253/16:9/w_2560%2Cc_limit/air-jordan-negras-doradas-2020.jpg"  className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://megaricos.com/wp-content/uploads/2021/03/shutterstock_630915815.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://www.lamiradanorte.com/wp-content/uploads/2020/06/second-g-800x445.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://c8.alamy.com/compes/2fykc0h/marcos-de-fotos-y-cuadros-vacios-en-oro-y-negro-en-una-pared-blanca-maqueta-para-tus-fotos-o-texto-espacio-de-copia-decoracion-de-lujo-de-diseno-moderno-2fykc0h.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  );
};
export default Carrousel;
