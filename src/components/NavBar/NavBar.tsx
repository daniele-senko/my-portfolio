import { AppBar, MenuItem, styled, Toolbar, Link } from "@mui/material";
const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
       display: "flex",
         justifyContent: "space-evenly",
      }));

      const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      return (
        <AppBar position="fixed">
          <StyledToolbar>
            <MenuItem>
              <Link
                onClick={() => handleScroll("home")}
                sx={{ 
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                onClick={() => handleScroll("about")}
                sx={{ 
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Sobre
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                onClick={() => handleScroll("projects")}
                sx={{ 
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Projetos
              </Link>
            </MenuItem>
          </StyledToolbar>
        </AppBar>
      );
    };
    
    export default NavBar;