import { Grid, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';

const WhiteTextTypography = styled(Typography)({
  color: 'white',
});

const WhiteIconButton = styled(IconButton)({
  color: 'white',
});

const ContactFooter = () => {
  const email = '   jsvd3032@gmail.com'; // Reemplaza con tu dirección de correo electrónico
  const linkedinURL = 'https://www.linkedin.com/'; // Reemplaza con tu enlace de LinkedIn
  const githubURL = 'https://github.com/'; // Reemplaza con tu enlace de GitHub

  return (
    <footer>
      <Grid container justifyContent="center" alignItems="center" spacing={2} >
        <Grid item xs={12}>
          <WhiteTextTypography variant="body1" align="center">
            <Link href={`mailto: ${email}`} variant="body1" sx={{fontSize: '20px'}}>
              {email}
            </Link>
          </WhiteTextTypography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <WhiteIconButton  component={Link} href={linkedinURL} target="_blank" rel="noopener">
                <LinkedInIcon />
              </WhiteIconButton>
            </Grid>
            <Grid item>
              <WhiteIconButton component={Link} href={githubURL} target="_blank" rel="noopener">
                <GitHubIcon />
              </WhiteIconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default ContactFooter;
