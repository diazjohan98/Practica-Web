import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from "@mui/material";
import RojasPerfil from '../../assets/362942090_1022360728936256_4243571503998988364_n.jpeg';
import { useNavigate } from 'react-router-dom';
import '../css/StylePage.css'

export const Rojas = () => {
  const [text, setText] = useState('');
  const fullText = 'JHOAN SEBASTIAN ROJAS HOLGUIN';

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
  const navigate = useNavigate()
  const handleClickBack = () => {
    // Redirigir a la página deseada al hacer clic en el botón
    navigate('/appLaunche');
  }

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={3}>
        <img
          src={RojasPerfil}
          alt="Descripción de la imagen"
          style={{ width: '100%', height: 'auto' }}
          className="heartBeatImage"
        />
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column">
          <Grid item container justifyContent="space-between" alignItems="center">
            <Typography sx={{ textAlign: 'left' }}>Hola, soy</Typography>
            <Grid item>
              <Button variant="outlined" onClick={handleClickBack}>Volver</Button>
            </Grid>
          </Grid>
          <Grid item>
            <div style={{ height: '45px', textAlign: 'left', fontSize: '30px', fontFamily: 'Exosphere' }}>{text}</div> {/* Altura fija para el texto animado */}
          </Grid>
        </Grid>
        <Typography style={{ textAlign: 'left' }}>
          Desarrollador Web, me desempeño como Full Stack, tengo 23 años y vivo en la ciudad de Tuluá. Estudio Tecnología en Sistemas de Información en la Universidad del Valle, sede Tuluá.
        </Typography>
        </Grid>
        <Grid item sx={{ width: '100%', borderBottom: '1px solid white', my: 2 }} />
        <Grid container justifyContent="flex-start" alignItems="flex-start"> {/* Alinear contenido hacia la esquina superior izquierda */}
          <Typography variant="h5" gutterBottom sx={{ color: 'white', fontFamily: 'Type Writer' }}>
            Mis Proyectos
          </Typography>
          <Grid>
            <Typography></Typography>
          </Grid>
        </Grid>
      </Grid>
      );
};
