import { Button, Grid, Typography } from '@mui/material';
import '../../App.css';
import ThreeScene from '../../components/ThreeScene';
import { useNavigate } from 'react-router-dom';

export const AppLaunche = () => {
  const navigate = useNavigate();

  const handleClickRojas = () => {
    // Redirigir a la página deseada al hacer clic en el botón
    navigate('/rojas');
  };
  const handleClickDiaz = () => {
    // Redirigir a la página deseada al hacer clic en el botón
    navigate('/diaz');
  };

    return (
    <Grid className="app-container">
      <ThreeScene className="three-scene" />
      <div className="content-overlay">
        <Typography sx={{ fontSize: '30px' }}>¿Qué portafolio quieres ver?</Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mt: '20px' }}>
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
      </div>
    </Grid>
  );
};
