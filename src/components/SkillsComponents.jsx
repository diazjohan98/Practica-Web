import { Grid, LinearProgress, Typography } from '@mui/material';

const SkillsComponent = ({ skills }) => {
  return (
    <Grid container direction="column" spacing={2}>
      {skills.map((skill, index) => (
        <Grid item key={index}>
          <Typography variant="subtitle1">{skill.skill}</Typography>
          <LinearProgress variant="determinate" value={skill.percentage} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsComponent;