import React from 'react'
import './About.css'
import Logo2 from '../images/Logo2.png'
import ImageDefault from '../images/ImageDefault.png'
import Header from '../Header'
 const About = () => {
  return (
    <div>
      <Header />
<section id="teacher" class="team-member contaienr-fluid">
        <div class="container">
          <img src={Logo2} alt="" />
            <div class="session-title">
                <h2>JJMS LUXURY</h2>
                <p> <h3>Conoce al equipo que hizo parte de este proyecto
          </h3></p>
                
                <p> Somos un equipo de Henry realizando nuestro proyecto final, para obtener nuestro certificado de desarrolladores full stack.</p>
            </div>
            <div class="row teamro">
                <div class="col-md-3 mb-5 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                            <img src={ImageDefault}/>
                        </div>
                        <h3 class="title">Ezequiel Oscar Leiva</h3>
                        <span class="post">Web Developer</span>
                        
                    </div>
                </div>
                <div class="col-md-3 mb-5 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                             <img src={ImageDefault}/>
                        </div>
                        <h3 class="title">Fainyer Montezuma</h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>
                
                <div class="col-md-3 mb-5 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                             <img src={ImageDefault}/>
                        </div>
                        <h3 class="title">Jesús Espinel</h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>

                <div class="col-md-3 mb-5 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                             <img src={ImageDefault}/>
                        </div>
                        <h3 class="title">Juan Ignacio Carreño </h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>
                
                <div class="col-md-3 mb-5 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                             <img src={ImageDefault}/>
                        </div>
                        <h3 class="title">Santiago Miranda </h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>
                
                <div class="col-md-3 mb-5 col-sm-6">
                    <div class="our-team">
                        <div class="pic">
                             <img src={ImageDefault}/>
                        </div>
                        <h3 class="title">Gonzalez Matias</h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>
            </div>
        </div>
    </section>  




    </div>
  )
}
export default About