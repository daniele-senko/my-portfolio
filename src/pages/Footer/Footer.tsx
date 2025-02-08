import { Box, Container, Typography, Stack, IconButton, styled } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4, 0),
    marginTop: 'auto',
  }));

  const SocialIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
    },
  }));

  return (
    <StyledFooter as="footer">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Seção de Direitos Autorais */}
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography variant="body1">
              © {new Date().getFullYear()} Daniele Senko
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Desenvolvido com ❤️ e ☕
            </Typography>
          </Box>

          {/* Seção de Redes Sociais */}
          <Stack direction="row" spacing={2}>
            <a 
              href="https://github.com/daniele-senko" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon aria-label="GitHub">
                <GitHub />
              </SocialIcon>
            </a>
            <a 
              href="https://www.linkedin.com/in/daniele-senko/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon aria-label="LinkedIn">
                <LinkedIn />
              </SocialIcon>
            </a>
            <a 
              href="mailto:danielesenko@hotmail.com"
            >
              <SocialIcon aria-label="Email">
                <Email />
              </SocialIcon>
            </a>
          </Stack>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

export default Footer;