import { Grid, styled, Container, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import theme from "../../../../theme";
import DownloadIcon from "@mui/icons-material/Download";
import MailIcon from "@mui/icons-material/Mail";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <= mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >=mobile
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "60%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/files/curriculo.pdf";
    link.download = "Curriculo_Daniele_Senko.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    window.location.href = "mailto:danielesenko@hotmail.com, '_blank'";
  };

  return (
    <>
      <StyledHero id="home">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"110%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Daniele Senko
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h3"
                textAlign="center"
                pb={2}
              >
                I'm a Web Developer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={handleDownloadCV}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={handleContact}>
                    <MailIcon />
                    <Typography>Contato</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
