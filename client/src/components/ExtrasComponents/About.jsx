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
            <div class="row teamro shadow p-3 mb-5 bg-white rounded">
                <div class="col-md-3 mb-5 col-sm-6 shadow p-3 mb-5 bg-white rounded">
                    <div class="our-team">
                        <div class="pic">
                            <img src="https://ca.slack-edge.com/TPRS7H4PN-U03DPRT2686-02e172dc7677-512"/>
                        </div>
                        <h3 class="title">Ezequiel Oscar Leiva</h3>
                        <span class="post">Web Developer</span>
                        
                    </div>
                </div>
                <div class="col-md-3 mb-5 col-sm-6 shadow p-3 mb-5 bg-white rounded">
                    <div class="our-team">
                        <div class="pic">
                             <img src="https://ca.slack-edge.com/TPRS7H4PN-U02JHAJRJBW-49bcaf7712ce-512"/>
                        </div>
                        <h3 class="title">Fainyer Montezuma</h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>
                
                <div class="col-md-3 mb-5 col-sm-6 shadow p-3 mb-5 bg-white rounded">
                    <div class="our-team">
                        <div class="pic">
                             <img src="https://pps.whatsapp.net/v/t61.24694-24/306265990_693164802034021_4182479909223900492_n.jpg?ccb=11-4&oh=01_AdQqZgUIDzec87o86YPyAD311e_JyndQUf5wq8ubu5hBdQ&oe=637E9109"/>
                        </div>
                        <h3 class="title">Jesús Espinel</h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>

                <div class="col-md-3 mb-5 col-sm-6 shadow p-3 mb-5 bg-white rounded">
                    <div class="our-team">
                        <div class="pic">
                             <img src="https://media-exp1.licdn.com/dms/image/D4E03AQFssdc6mBwIzw/profile-displayphoto-shrink_200_200/0/1668378374467?e=1674086400&v=beta&t=zzGjp4CK0NYDdqGchNluk12IwuhvNFiukocMCt4asMA"/>
                        </div>
                        <h3 class="title">Juan Carreño </h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>
                
                <div class="col-md-3 mb-5 col-sm-6 shadow p-3 mb-5 bg-white rounded">
                    <div class="our-team">
                        <div class="pic">
                             <img src="https://ca.slack-edge.com/TPRS7H4PN-U03DW9YEWFK-d5279260e109-512"/>
                        </div>
                        <h3 class="title">Santiago Miranda </h3>
                        <span class="post">Web developer</span>
                    </div>
                </div>
                
                <div class="col-md-3 mb-5 col-sm-6 shadow p-3 mb-5 bg-white rounded">
                    <div class="our-team">
                        <div class="pic">
                             <img src="https://ca.slack-edge.com/TPRS7H4PN-U03DR4H5E03-c30b9f6f5199-512"/>
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