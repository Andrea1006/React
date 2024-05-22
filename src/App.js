import './scss/css/estilos.css';

function App() {
  return (
    <div>
        <header className="encabezado navbar-fixed-top" role="banner" id="encabezado">
          <div className="container">
            <a href="index.html" className="logo">
            <img src="/images/fet.png" alt="Logo del sitio" width="40" height="30" />
            </a>
            <button type="button" className="boton-menu hidden-md-up" data-toggle="collapse" data-target="#menu-principal" aria-expanded="false">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <nav id="menu-principal" className="collapse">
              <ul>
                <li className="active"><a href="index.html">Inicio</a></li>
                <li><a href="#dulces">Quienes somos</a></li>
                <li><a href="#programa">Programas</a></li>
                <li><a href="#redes">Institucional</a></li>
                <li><a href="#redes">Bienestar institucional</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="buena-comida" className="buena-comida text-xs-center py-1">
          <div className="container">
            <div className="buena-comida-cabezera text-center">
              <div className="buena-comida-titulo">
                <h2 className="text-xs-center font-weight-bold">Fundacion Escuela Tecnologica FET</h2>
              </div>
              <p>La FET es la institución de educación superior, con proyección al desarrollo integral de sus estudiantes. fomenta la investigación y el desarrollo de proyectos orientados a la implementación en el sector comercial ,  industrial, y social del Huila, especializados en diferentes ramas.</p>
              <p>La Universidad apoya la implementación tecnológica de sus estudiantes y premia las propuestas innovadoras de sus estudiantes. La institución orienta a jóvenes de diferentes sectores de la sociedad a inventar y así contribuir al desarrollo del país mientras se da a conocer el trabajo de sus estudiantes.</p>
              <div className="pienosotros wow swing"><a href="App.js" className="">Mas sobre nosotros</a></div>
            </div>
          </div>
        </section>
        <section className="delicias py-1" id="delicias">
          <div className="container">
            <div className="image-container">
              <div className="image-item">
              <img src="/images/convenios.png" alt="convenios"/>
                <p>Convenios FET</p>
              </div>
              <div className="image-item">
              <img src="/images/credito.png" alt=""/>
                <p>Credito directo</p>
              </div>
              <div className="image-item">
              <img src="/images/noticia.png" alt=""/>
                <p>Noticias y eventos</p>
              </div>
              <div className="image-item">
              <img src="/images/siga.png" alt=""/>
                <p>SIGA</p>
              </div>
            </div>
          </div>
        </section>
        <main id="programa" className="mejor-eleccion p-y-1">
          <div className="container">
            <h2 className="text-xs-center font-weight-bold wow shake">PROGRAMAS DE PREGRADO</h2>
            <div className="row">
              <article className="col-md-4 wow bounceInLeft" data-wow-delay=".3s">
              <img src="/images/ALimento.png" alt=""/>
                <h3><a href="App.js">Ingenieria de alimentos</a></h3>
                <p className="hidden-sm-down">¿Te apasiona la comida y la ciencia? ¡Únete a nuestro programa de Ingeniería de Alimentos y conviértete en un líder en la innovación alimentaria! Prepárate para dirigir empresas, desarrollar nuevos productos y tecnologías, garantizar la calidad y seguridad de los alimentos y liderar proyectos emocionantes de investigación y desarrollo.</p>
                <button className="btn btn-secondary hidden-sm-down" onClick={() => alert('Este botón no tiene un enlace')}>Mas informacion</button>

              </article>
              <article className="col-md-4 wow bounceInLeft" data-wow-delay=".3s">
              <img src="/images/electrica.png" alt=""/>
                <h3><a href="App.js">Ingenieria electrica</a></h3>
                <p className="hidden-sm-down">El Ingeniero Electricista es un profesional altamente capacitado que se enfoca en el desarrollo del sector eléctrico y en la generación de soluciones eficientes y sostenibles. Su formación ética y compromiso social lo convierten en un agente de cambio para la sociedad. Gracias a su amplio conocimiento, puede liderar proyectos innovadores y resolver problemas complejos con iniciativa.</p>
                <button className="btn btn-secondary hidden-sm-down" onClick={() => alert('Este botón no tiene un enlace')}>Mas informacion</button>
              </article>
              <article className="col-md-4 wow bounceInLeft" data-wow-delay=".3s">
              <img src="/images/soft.png" alt=""/>
                <h3><a href="App.js">Ingenieria Software</a></h3>
                <p className="hidden-sm-down">¡Conviértete en un maestro del código y haz que los programas cobren vida! Como Ingeniero de Software, tendrás la capacidad de crear soluciones innovadoras y resolver problemas complejos utilizando tecnología avanzada. Podrás diseñar, desarrollar, implementar y mantener sistemas de software a gran escala y asegurarte de que estén funcionando sin problemas.</p>
                <button className="btn btn-secondary hidden-sm-down" onClick={() => alert('Este botón no tiene un enlace')}>Mas informacion</button>
              </article>
              <article className="col-md-4 wow bounceInLeft" data-wow-delay=".3s">
              <img src="/images/ambiental.png" alt=""/>
                <h3><a href="App.js">Ingenieria Ambiental</a></h3>
                <p className="hidden-sm-down">¡Únete a la carrera de Ingeniería Ambiental y conviértete en un héroe del medio ambiente! Como ingeniero ambiental, tendrás la oportunidad de liderar proyectos para proteger el planeta, diseñar soluciones para prevenir la contaminación y asegurar un futuro sostenible. Podrás trabajar como analista de impacto ambiental, auditor ambiental, jefe de área en el campo ambiental y planificador del medio ambiente.</p>
                <button className="btn btn-secondary hidden-sm-down" onClick={() => alert('Este botón no tiene un enlace')}>Mas informacion</button>
              </article>
              <article className="col-md-4 wow bounceInLeft" data-wow-delay=".3s">
              <img src="/images/trabajo.png" alt=""/>
                <h3><a href="App.js">Salud y seguridad en el trabajo</a></h3>
                <p className="hidden-sm-down">Conviértete en el líder que las empresas necesitan para garantizar la seguridad y salud de sus trabajadores. Como Administrador de la seguridad y salud en el trabajo, tendrás el conocimiento para dirigir y coordinar programas, capacitar al personal y asegurarte de que se cumplan las normas de seguridad en cualquier organización.</p>
                <button className="btn btn-secondary hidden-sm-down" onClick={() => alert('Este botón no tiene un enlace')}>Mas informacion</button>
              </article>
              <article className="col-md-4 wow bounceInLeft" data-wow-delay=".3s">
              <img src="/images/soft.png" alt=""/>
                <h3><a href="App.js">Adminsitracion financiera</a></h3>
                <p className="hidden-sm-down">¡Conviértete en un maestro del código y haz que los programas cobren vida! Como Ingeniero de Software, tendrás la capacidad de crear soluciones innovadoras y resolver problemas complejos utilizando tecnología avanzada. Podrás diseñar, desarrollar, implementar y mantener sistemas de software a gran escala y asegurarte de que estén funcionando sin problemas.</p>
                <button className="btn btn-secondary hidden-sm-down" onClick={() => alert('Este botón no tiene un enlace')}>Mas informacion</button>
              </article>
            </div>
          </div>
        </main>
        <section id="productos" className="ultimos-proyectos py-2 text-xs-center">
          <div className="container">
            <h2 className="h3 mb-3">Nuestras Instalaciones</h2>
            <div className="row">
              <div className="col-md-4">
                <a href="App.js">
                <img src="/images/instalacion.png" alt="" width="290" className="img-fluid m-x-auto" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="App.js">
                <img src="/images/instalacion2.png" alt="" width="290" className="img-fluid m-x-auto" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="App.js">
                <img src="/images/cancha.png" alt="" width="290" className="img-fluid m-x-auto" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="App.js">
                <img src="/images/instalacion.png" alt="" width="290" className="img-fluid m-x-auto" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="App.js">
                <img src="/images/salon.png" alt="" width="290" className="img-fluid m-x-auto" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="App.js">
                <img src="/images/salon2.png" alt="" width="290" className="img-fluid m-x-auto" />
                </a>
              </div>
            </div>
          </div>
        </section>



        <footer id="redes">
          <div className="container-footer-all">
            <div className="container-body">
              <div className="colum1">
                <h1>Mas informacion de la Pagina Web</h1>
                <p>¿Desea realizar un pedido personalizado o tiene una solicitud especial?. PÓNGASE EN CONTACTO CON SU UBICACIÓN MÁS CERCANA.</p>
              </div>
              <div className="colum2">
                <h1>Redes Sociales</h1>
                <div className="row1">
                <img src="/images/facebook.png" alt=""/>
                  <a href="https://www.facebook.com/YoSoyFet" target="_blank" rel="noopener noreferrer">
                    <label className="text-cyan">Siguenos en Facebook</label>
                  </a>
                </div>
                <div className="row1">
                <img src="/images/instagram.png" alt=""/>
                  <a href="https://github.com/GITCART" target="_blank" rel="noopener noreferrer">
                    <label>Siguenos en instagram</label>
                  </a>
                </div>
              </div>
              <div className="colum3">
                <h1>Informacion Contactos</h1>
                <div className="row2">
                <img src="/images/house.png" alt=""/>
                  <label>Calle Kilometro 11, Rivera, Neiva, Huila</label>
                </div>
                <div className="row2">
                <img src="/images/correo.png" alt=""/>
                  <label><a href="mailto:comunicaciones@fet.edu.co">comunicaciones@fet.edu.co</a></label>
                </div>
              </div>
            </div>
          </div>
          <div className="container-footer">
            <div className="footer">
              <div className="copyright">
                © 2024 | <p>FET</p>
              </div>
              <div className="information">
                <p >Fundacion Escuela Tecnologica</p> | <p>Privacion y Politica</p> | <p>Terminos y Condiciones</p>
              </div>
            </div>
          </div>
        </footer>
        <a data-scroll className="ir-arriba" href="#encabezado">
          <i className="fa  fa-arrow-circle-up" aria-hidden="true"></i>
        </a>
      </div>
    );
  }


export default App;
