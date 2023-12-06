import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from "@mui/material";
import RojasPerfil from '../../assets/405603089_3661302367448636_3955819785903610865_n.jpeg';
import { useNavigate } from 'react-router-dom';
import '../css/StylePage.css'
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardsHobbiesJohan } from '../../components/CardsHobbiesJohan';
import ContactFooter from '../../components/ContactFooter';
import { styled } from '@mui/system';

const WhiteTextTypography = styled(Typography)({
  color: 'white',
  fontFamily: 'Type Writer',
});

export const Diaz = () => {
  const [text, setText] = useState('');
  const fullText = 'JOHAN SEBASTIAN VASQUEZ DIAZ';

  const startTypingAnimation = () => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setText('');
          startTypingAnimation();
        }, 1500); // Espera 1.5 segundos antes de restablecer el texto
      }
    }, 100); // Intervalo de 100 milisegundos para una animación más lenta
    return () => clearInterval(timer);
  };

  useEffect(() => {
    startTypingAnimation();
  }, []);

  // Función para determinar si la pantalla está en modo "responsive"
  const isResponsive = () => {
    return window.innerWidth <= 768; // Puedes ajustar este valor según tu diseño responsive
  };

  const navigate = useNavigate()
  const handleClickBack = () => {
    // Redirigir a la página deseada al hacer clic en el botón
    navigate('/appLaunche');
  }

  const projects = [
    { id: 1, title: 'CAIDHU', link: 'https://github.com/diazjohan98/CAIDHU' },
    { id: 2, title: 'JUEGO METEORITOS', link: 'https://github.com/diazjohan98/Juego-Meteoritos' },
    { id: 3, title: 'KRATOS APP', link: 'https://github.com/diazjohan98/Kratos-APP' },
    { id: 4, title: 'VETERINARIA', link: 'https://github.com/diazjohan98/Veterinaria-App-1' },
    { id: 5, title: 'MEDTRACK', link: 'https://github.com/diazjohan98/MedTrack' },
    { id: 6, title: 'MYSUPPORT', link: 'https://github.com/juanhcode/MySupport' },
  ];



  return (
    <Grid container direction="row" alignItems="flex-start" justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <img
          src={RojasPerfil}
          alt="Descripción de la imagen"
          style={{ width: '100%', height: 'auto' }}
          className="heartBeatImage"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Hola, soy</Typography>
              <Button variant="outlined" onClick={handleClickBack}>Volver</Button>
            </Grid>
          </Grid>
          <Grid item style={{ height: isResponsive() ? 'auto' : '70px' }}>
            <div style={{ textAlign: 'left', fontSize: '30px', fontFamily: 'Exosphere' }}>
              {isResponsive() ? 'JOHAN DIAZ' : text}
            </div>
          </Grid>
        </Grid>
        <Typography style={{ textAlign: 'left' }}>
          Me complace presentarme como un estudiante activo de la Universidad del Valle, específicamente en la sede Tuluá. Mi pasión y dedicación inquebrantable se centran en el emocionante mundo de la programación, con un enfoque particular en el desarrollo web.

          Mis conocimientos sólidos abarcan una amplia gama de tecnologías esenciales para el desarrollo web. Estoy altamente competente en lenguajes como JavaScript, CSS, React.JS y HTML, lo que me permite crear experiencias web atractivas y funcionales. Además, mi experiencia con SASS y Bootstrap me permite optimizar la eficiencia y el aspecto de mis proyectos. Mi dominio de GIT y mi familiaridad con Scrum facilitan la gestión y colaboración en equipos de desarrollo, lo que considero esencial en la creación de aplicaciones web exitosas.

        </Typography>
      </Grid>
      <Grid item>
      </Grid>
      <Grid item sx={{ width: '100%', borderBottom: '1px solid white', my: 2 }} />
      <Grid container justifyContent="flex-start" alignItems="flex-start"> {/* Alinear contenido hacia la esquina superior izquierda */}
        <Typography variant="h5" gutterBottom sx={{ color: 'white', fontFamily: 'Type Writer' }}>
          Mis Proyectos
        </Typography>
      </Grid>
      <Grid container justifyContent="flex-start" alignItems="flex-start">
        <Typography>Estos son algunos de los proyectos que he realizado a lo largo de mi carrera:</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ mt: '20px' }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Link
              className='titleProyectos'
              sx={{
                textDecoration: 'none',
                color: 'inherit', // Mantener el color del texto heredado
                display: 'block', // Ocupar todo el espacio disponible para hacer clic
              }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                className='cardProyectos'
                sx={{
                  background: '#000',
                  color: '#1976d2',
                  border: '1px solid #1976d2',
                  borderRadius: '8px',
                  height: '100%', // Asegurar que la tarjeta ocupe todo el espacio
                  '&:hover': {
                    boxShadow: '0px 0px 10px 0px #1976d2', // Efecto al pasar el mouse
                  },
                }}
              >
                <CardContent>
                  {project.title}
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid item sx={{ width: '100%', borderBottom: '1px solid white', my: 2 }} />
      <Grid container justifyContent="flex-start" alignItems="flex-start"> {/* Alinear contenido hacia la esquina superior izquierda */}
        <Typography variant="h5" gutterBottom sx={{ color: 'white', fontFamily: 'Type Writer' }}>
          Hobbies
        </Typography>
        <Grid container justifyContent="flex-start" alignItems="flex-start">
          <Typography sx={{ my: 2 }}>Los hobbies son actividades disfrutables y voluntarias que nos permiten explorar intereses, relajarnos y crecer personalmente.</Typography>
        </Grid>
        <Grid>
          <CardsHobbiesJohan />
        </Grid>
      </Grid>
      <Grid item sx={{ width: '100%', borderBottom: '1px solid white', my: 2 }} />
      <Grid container justifyContent="flex-start" alignItems="flex-start" sx={{ height: '1ovh', padding: '20px' }}>
      {/* Alinear contenido hacia la esquina superior izquierda */}
      <Grid item xs={12}>
        <WhiteTextTypography variant="h5" gutterBottom>
          Contactame
        </WhiteTextTypography>
      </Grid>
      <Grid item xs={12} mt={4} >
        {/* Mostrar el componente ContactFooter más grande */}
        <ContactFooter />
      </Grid>
    </Grid>
    </Grid>

  );
};
