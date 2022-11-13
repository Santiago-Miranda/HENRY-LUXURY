import React from "react";

const Carrousel = () => {
  return (
    <div>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.decisores.com/wp-content/uploads/2021/11/joyeria-1536x864.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://media.revistagq.com/photos/5fae80ed7cdbc96b3a9bb253/16:9/w_2560%2Cc_limit/air-jordan-negras-doradas-2020.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"   src="https://megaricos.com/wp-content/uploads/2021/03/shutterstock_630915815.jpg" alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"   src="https://www.lamiradanorte.com/wp-content/uploads/2020/06/second-g-800x445.jpg" alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"   src="https://c8.alamy.com/compes/2fykc0h/marcos-de-fotos-y-cuadros-vacios-en-oro-y-negro-en-una-pared-blanca-maqueta-para-tus-fotos-o-texto-espacio-de-copia-decoracion-de-lujo-de-diseno-moderno-2fykc0h.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
    </div>
  );
};
export default Carrousel;
