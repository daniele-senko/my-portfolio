import { Grid, Paper, Stack, styled, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import theme from "../../../../theme";

const About = () => {
  const StyledAbout = styled("div")(() => ({
    backgroundColor: theme.palette.primary.contrastText,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "center",
    padding: theme.spacing(8),
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      // >=mobile
      paddingTop: theme.spacing(8),
    },
  }));

  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 180,
    minHeight: 130,
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
      <StyledAbout id="about">
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
            marginLeft: { xs: "1rem", md: "9rem" }, 
            marginRight: { xs: "1rem", md: "9rem" },
            textAlign: "justify",
          }}
        >
          Sou Daniele, uma profissional com aproximadamente um ano de
          experiência em desenvolvimento web, comprometida com a criação de
          aplicações eficientes e focadas na otimização da experiência do
          usuário, sempre seguindo altos padrões da indústria. Em busca
          constante de aprimoramento, estou expandindo minhas habilidades para
          oferecer soluções inovadoras e eficazes. Sou graduanda em Sistemas de
          Informação pela Universidade do Estado de Mato Grosso (UNEMAT), o que
          enriquece minha formação técnica. Além do trabalho em desenvolvimento,
          estudo neurociência, interessada nas intersecções dessa área com a
          tecnologia. Meu objetivo é, no futuro, desenvolver soluções pioneiras
          que integrem essas duas disciplinas.
        </Typography>
        <Typography variant="h4" textAlign="center" pt= {6}>
          Skills
        </Typography>
        <Grid
          container
          display="flex"
          justifyContent="center"
          spacing={2}
          pt={3}
          sx={{
            maxWidth: '100%',
            paddingX: { xs: 2, sm: 4, md: 6 }, 
          }}
        >
          {[ "HTML", "CSS", "JavaScript", "React", "Vue", "TypeScript", "Java", "Python", "Node.js", "Express", "NestJS", "MySQL", "TailwindCSS", "Material-UI", "Git", "GitHub", "Figma", "Pandas"].map(skill => (
            <Grid item xs={12} md={2.4} key={skill}>
              <StyledSkills variant="outlined">
                <Typography variant="body1">{skill}</Typography>
              </StyledSkills>
            </Grid>
          ))}
        </Grid>
      </StyledAbout>
    </>
  );
};

export default About;
