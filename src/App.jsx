import React from 'react';
import { useEffect } from 'react'; // Importar useEffect
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Navbar, Nav, Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

// IMPORTAMOS LOS ICONOS
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCode, FaBrain } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMysql, SiJavascript, SiBootstrap, SiVercel, SiRailway, SiGit, SiPostman } from 'react-icons/si';

function App() {
  // Inicializar animaciones
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true,     // Solo animar una vez
    });
  }, []);

  // LISTA DE HABILIDADES CON SUS ICONOS Y COLORES
  const skills = [
    { name: "JavaScript", icon: <SiJavascript size={25} color="#F7DF1E" /> },
    { name: "React.js", icon: <SiReact size={25} color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs size={25} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={25} color="white" /> },
    { name: "MySQL", icon: <SiMysql size={25} color="#4479A1" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={25} color="#7952B3" /> },
    { name: "Git", icon: <SiGit size={25} color="#F05032" /> },
    { name: "Vercel", icon: <SiVercel size={25} color="white" /> },
    { name: "Railway", icon: <SiRailway size={25} color="white" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Sistema POS & Inventario",
      description: "Solución completa para comercio real. Gestiona ventas, stock en tiempo real y reportes. Backend seguro con Node/Express y MySQL.",
      tags: ["React", "Node", "MySQL", "Railway"],
      repoLink: "https://github.com/",
      demoLink: "#", 
      image: "https://placehold.co/600x350/1e293b/38bdf8?text=POS+System" // RECUERDA CAMBIAR ESTO
    },
    {
      id: 2,
      title: "ERP Gestión Impresión 3D",
      description: "App para mi emprendimiento. Calcula costos de filamento, gestiona pedidos y tiempos de producción. Dashboard administrativo.",
      tags: ["React", "JS", "Bootstrap", "Vercel"],
      repoLink: "https://github.com/",
      demoLink: "https://tu-demo.vercel.app",
      image: "https://placehold.co/600x350/1e293b/e67e22?text=ERP+3D"
    },
    {
      id: 3,
      title: "Plataforma de Trueque (MVP)",
      description: "Proyecto académico para gestión de intercambios. Interfaz Mobile-First, gestión de estados complejos y componentes reutilizables.",
      tags: ["React", "Bootstrap", "Git"],
      repoLink: "https://github.com/",
      demoLink: "#", 
      image: "https://placehold.co/600x350/1e293b/2ecc71?text=Trueque+App"
    }
  ];

  return (
    <div>
      {/* NAVBAR */}
      <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-custom fs-4 d-flex align-items-center gap-2">
             <SiReact color="#61DAFB" /> Jhon Loaiza <span style={{color:'white'}} >|</span> Dev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-medium align-items-center">
              <Nav.Link href="#proyectos" className="px-3">Proyectos</Nav.Link>
              <Nav.Link href="#habilidades" className="px-3">Stack</Nav.Link>
              <Nav.Link href="#contacto" className="px-3">Contacto</Nav.Link>
              
              {/* Icono de GitHub en el menú */}
              <Button variant="outline-light" size="sm" className="ms-3 rounded-circle p-2 d-flex align-items-center justify-content-center" href="https://github.com/" target="_blank" style={{width: '40px', height: '40px'}}>
                <FaGithub size={20} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <section className="hero-section text-center" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-3 fw-bold mb-3">
                Hola, soy <span className="highlight-text">Jhon Loaiza</span>
              </h1>
              <h2 className="h4 text-white-50 mb-4">Desarrollador Fullstack Trainee | Estudiante AIEP</h2>
              <p className="lead text-secondary mb-5 w-75 mx-auto">
                Transformo ideas en aplicaciones web funcionales. Especializado en el stack <span className="text-white fw-bold">MERN</span>.
              </p>
              
              {/* Botones del Hero con Iconos */}
              <div className="d-flex justify-content-center gap-3">
                <a href="#proyectos" className="btn btn-accent btn-lg shadow d-flex align-items-center gap-2">
                   <FaCode /> Ver Proyectos
                </a>
                <a href="/cv_jhon.pdf" target="_blank" className="btn btn-outline-accent btn-lg d-flex align-items-center gap-2">
                   <FaExternalLinkAlt size={16}/> Descargar CV
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">

      <Container className="my-5" data-aos="fade-up">
  <div className="about-glass-card p-5">
    <Row className="align-items-center">
      {/* Columna Izquierda: Icono Gigante Sutil (Decorativo) */}
      <Col lg={4} className="d-none d-lg-flex justify-content-center mb-4 mb-lg-0">
          {/* Usamos un icono grande con opacidad baja para decorar */}
          <FaBrain size={150} color="rgba(56, 189, 248, 0.15)" style={{filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.3))'}} />
      </Col>

      {/* Columna Derecha: Texto */}
      <Col lg={8} className="text-center text-lg-start">
        <h3 className="fw-bold text-white mb-4 display-6">
          Más que código: <span style={{color: 'var(--accent)'}}>Mentalidad de Solución</span>
        </h3>
        
        <div className="text-secondary fs-5 lead" style={{lineHeight: '1.8'}}>
          <p>
            No soy solo un estudiante que sigue tutoriales. Tengo un emprendimiento real de <b>Impresión 3D</b> que me enseñó que la tecnología debe servir al negocio.
          </p>
          <p className="fst-italic text-white-50">
            "Cuando noté que perdía horas calculando costos manuales, no abrí Excel. <b>Programé mi propio ERP a medida</b>."
          </p>
          <p>
            Esa es mi propuesta de valor: identificar cuellos de botella reales y construir soluciones eficientes con código. Ahora busco llevar esa proactividad a un equipo de desarrollo profesional.
          </p>
        </div>

        <div className="mt-4 d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
            <Badge bg="transparent" className="border border-success text-success p-2 fs-6">⚡ Proactivo</Badge>
            <Badge bg="transparent" className="border border-warning text-warning p-2 fs-6">💡 Emprendedor</Badge>
            <Badge bg="transparent" className="border border-info text-info p-2 fs-6">🚀 Autodidacta</Badge>
        </div>
      </Col>
    </Row>
  </div>
</Container>
        
        {/* SECCIÓN DE HABILIDADES CON ICONOS */}
        <div className="mb-5 py-4 text-center" id="habilidades">
            <h3 className="fw-bold text-white mb-5 position-relative d-inline-block">
                Mi Stack Tecnológico
                <div style={{height:'3px', width:'50%', background:'var(--accent)', margin:'5px auto 0'}}></div>
            </h3>
            
            <div className="d-flex justify-content-center flex-wrap gap-4" data-aos="zoom-in">
                {skills.map((skill, index) => (
                    <div key={index} className="d-flex flex-column align-items-center gap-2 p-3 rounded" style={{backgroundColor: 'rgba(255,255,255,0.05)', minWidth: '100px', border: '1px solid rgba(255,255,255,0.1)'}}>
                        {skill.icon}
                        <span className="text-white small fw-bold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* SECCIÓN DE PROYECTOS */}
        <h2 id="proyectos" className="text-center fw-bold text-white mb-5 mt-5 pt-4">Proyectos Destacados</h2>
        <Row>
          {projects.map((proj) => (
            <Col lg={4} md={6} key={proj.id} className="mb-4" data-aos="fade-up">
              <Card className="h-100 project-card shadow-lg">
                <div style={{overflow: 'hidden', position: 'relative'}}>
                   <Card.Img variant="top" src={proj.image} alt={proj.title} style={{height: '220px', objectFit: 'cover', transition: 'transform 0.3s'}} />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="card-title-custom h5 mb-3">{proj.title}</Card.Title>
                  <Card.Text className="card-text-custom mb-4 flex-grow-1">
                    {proj.description}
                  </Card.Text>
                  
                  {/* Tags como pastillas */}
                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <span className="px-2 py-1 rounded small fw-bold" style={{backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontSize: '0.75rem'}} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <Button variant={proj.demoLink === '#' ? "secondary" : "primary"} className="w-100 fw-bold d-flex align-items-center justify-content-center gap-2" href={proj.demoLink} target="_blank" disabled={proj.demoLink === '#'}>
                      <FaExternalLinkAlt size={14} /> {proj.demoLink === '#' ? 'En Desarrollo' : 'Demo'}
                    </Button>
                    <Button variant="outline-light" className="w-100 fw-bold d-flex align-items-center justify-content-center gap-2" href={proj.repoLink} target="_blank">
                      <FaGithub size={16} /> Código
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* FOOTER */}
      <footer id="contacto" className="mt-5 py-5 text-center text-secondary" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
        <Container>
          <h4 className="text-white fw-bold mb-4">Contáctame</h4>
          <div className="d-flex justify-content-center gap-4 mb-4">
              <a href="https://linkedin.com" target="_blank" className="text-white text-decoration-none d-flex flex-column align-items-center gap-2">
                  <div className="p-3 rounded-circle bg-primary text-white"><FaLinkedin size={24} /></div>
                  <span className="small">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" className="text-white text-decoration-none d-flex flex-column align-items-center gap-2">
                  <div className="p-3 rounded-circle bg-dark border border-secondary text-white"><FaGithub size={24} /></div>
                  <span className="small">GitHub</span>
              </a>
              <a href="mailto:tuemail@ejemplo.com" className="text-white text-decoration-none d-flex flex-column align-items-center gap-2">
                  <div className="p-3 rounded-circle bg-danger text-white"><FaEnvelope size={24} /></div>
                  <span className="small">Email</span>
              </a>
              {/* BOTÓN FLOTANTE DE WHATSAPP */}
              <a 
                href="https://wa.me/56912345678" // <--- PON TU NÚMERO REAL AQUÍ (ej: 569...)
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'fixed',
                  bottom: '30px',
                  right: '30px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  zIndex: 1000,
                  transition: 'transform 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
              >
                <FaWhatsapp size={35} />
              </a>
          </div>
          <div className="mt-4 small">
            © 2025 Jhon Loaiza.
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;