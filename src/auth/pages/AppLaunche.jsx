import { Button, Grid, Typography, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import '../../App.css';
import ThreeScene from '../../components/ThreeScene';
import { useNavigate } from 'react-router-dom';

const theme = createTheme(); // Crear un tema por defecto si no tienes uno personalizado

export const AppLaunche = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width: 414px) and (max-height: 896px)');

  const handleClickRojas = () => {
    // Redirigir a la página deseada al hacer clic en el botón
    navigate('/rojas');
  };
  const handleClickDiaz = () => {
    // Redirigir a la página deseada al hacer clic en el botón
    navigate('/diaz');
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className="app-container"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        paddingX={isSmallScreen ? 1 : 0} // Añadir padding horizontal en pantallas pequeñas
        marginTop={isSmallScreen ? -14 : -12} // Ajustar marginTop en pantallas pequeñas
      >
        <Grid item xs={12} textAlign="center">
          <div style={{ marginTop: isSmallScreen ? '10px' : '50px' }}> {/* Reducir marginTop en pantallas pequeñas */}
            <ThreeScene className="three-scene" />
          </div>
          <Typography variant="h4" sx={{ mt: isSmallScreen ? 2 : 6 }}>¿Qué portafolio quieres ver?</Typography> {/* Ajustar mt en pantallas pequeñas */}
          <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ mt: isSmallScreen ? 1 : 3 }}> {/* Ajustar mt en pantallas pequeñas */}
            <Grid item>
              <Button variant="contained" onClick={handleClickRojas}>Jhoan Sebastian Rojas</Button>
            </Grid>
            <Grid item>
              <Typography variant="body1">o</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleClickDiaz}>Johan Sebastian Diaz</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
