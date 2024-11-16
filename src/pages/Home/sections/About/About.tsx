import { Divider, Grid, Paper, Stack, styled, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import theme from "../../../../theme";

const About = () => {
  const StyledAbout = styled("div")(() => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "50px",
    },
    [theme.breakpoints.up("md")]: {
      // >=mobile
      paddingTop: "1xp",
    },
  }));

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 180,
    height: 130,
    padding: theme.spacing(1),
    ...theme.typography.body2,
    textAlign: "center",
    alignItems: "center",
  }));

  const StyledSkills = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: 40,
    padding: theme.spacing(1),
    ...theme.typography.body2,
    textAlign: "center",
    alignItems: "center",
    "&:hover": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return (
    <>
      <StyledAbout>
        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" textAlign="center">
            Sobre
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            pt={3}
          >
            <DemoPaper variant="outlined">
              <WorkspacePremiumIcon />
              <Typography variant="subtitle2" fontWeight="bold">
                Experiência
              </Typography>
              <Typography variant="body2">1+ ano</Typography>
              <Typography variant="body2">Frontend Developer</Typography>
            </DemoPaper>
            <DemoPaper variant="outlined">
              <SchoolIcon />
              <Typography variant="subtitle2" fontWeight="bold">
                Educação
              </Typography>
              <Typography variant="body2">Bacharelado</Typography>
              <Typography variant="body2">Sistemas de Informação</Typography>
            </DemoPaper>
          </Stack>
        </Stack>
        <Typography
          pt={3}
          sx={{
            marginLeft: "9rem",
            marginRight: "9rem",
            textAlign: "justify",
          }}
        >
          Sou Daniele, uma profissional com aproximadamente um ano de
          experiência em desenvolvimento web, comprometida com a criação de
          aplicações eficientes e focadas na otimização da experiência do
          usuário, sempre seguindo altos padrões da indústria. 13Em busca
          constante de aprimoramento, estou expandindo minhas habilidades para
          oferecer soluções inovadoras e eficazes. Sou graduanda em Sistemas de
          Informação pela Universidade do Estado de Mato Grosso (UNEMAT), o que
          enriquece minha formação técnica. Além do trabalho em desenvolvimento,
          estudo neurociência, interessada nas intersecções dessa área com a
          tecnologia. Meu objetivo é, no futuro, desenvolver soluções pioneiras
          que integrem essas duas disciplinas.
        </Typography>
        <Divider sx={{ width: "80%", marginY: 3 }} />
        <Typography variant="h4" textAlign="center">
          Skills
        </Typography>
        <Grid
          container
          display="flex"
          justifyContent="center"
          spacing={2}
          pt={3}
          pr={18}
          pl={18}
        >
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">HTML</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">CSS</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">JavaScript</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">React</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">TypeScript</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">Java</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">Node.js</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">Express</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">TailwindCSS</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">Material-UI</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">Git</Typography>
            </StyledSkills>
          </Grid>
          <Grid item xs={12} md={2.4}>
            <StyledSkills variant="outlined">
              <Typography variant="body1">Figma</Typography>
            </StyledSkills>
          </Grid>
        </Grid>
      </StyledAbout>
    </>
  );
};

export default About;
