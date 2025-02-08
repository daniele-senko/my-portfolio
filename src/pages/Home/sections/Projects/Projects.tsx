import {
  Grid,
  Paper,
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
  Modal,
  IconButton,
  styled,
} from "@mui/material";
import { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";

interface Project {
  title: string;
  image: string;
  stacks: string[];
  githubUrl: string;
  description: string;
  features: string[];
  challenges: string[];
}

const ImagePlaceholder = ({ title }: { title: string }) => (
  <Box
    sx={{
      height: { xs: 180, sm: 200, md: 250 },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "background.paper",
      borderRadius: 2,
      border: "2px dashed",
      borderColor: "divider",
      textAlign: "center",
      p: 2,
    }}
  >
    <Typography
      variant="h6"
      color="text.secondary"
      sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
    >
      {title}
      <Box component="br" />
      <CodeIcon
        sx={{ fontSize: { xs: 32, md: 40 }, mt: 1, color: "action.active" }}
      />
    </Typography>
  </Box>
);

const projects: Project[] = [
  {
    title: "Sistema de Cadastro de Usuários",
    image: "src/assets/images/cadastro-usuarios.jpg",
    stacks: [
      "React.js",
      "JavaScript",
      "HTML/CSS",
      "REST APIs",
      "Axios",
      "Vite",
    ],
    githubUrl: "https://github.com/daniele-senko/cadastro-usuarios",
    description:
      "Interface React.js para operações CRUD de usuários, desenvolvida com JavaScript para oferecer gestão eficiente de dados através de uma interface dinâmica e responsiva.",
    features: [
      "Funcionalidades completas de Create, Read, Update e Delete (CRUD)",
      "Interface intuitiva com tabelas dinâmicas e formulários interativos",
      "Design responsivo adaptável a diferentes dispositivos",
      "Validação em tempo real de dados inseridos nos formulários",
      "Componentes reutilizáveis e estrutura modular para escalabilidade",
    ],
    challenges: [
      "Gerenciamento eficaz de estado global com React (ex: Context API ou Redux)",
      "Garantir responsividade em layouts complexos",
      "Otimizar performance em atualizações de interface com grandes datasets",
      "Integração fluida com APIs externas para persistência de dados",
      "Balancear usabilidade com validações robustas de inputs",
    ],
  },
  {
    title: "API - Cadastro de Usuários",
    image: "src/assets/images/cadastro-usuarios.jpg",
    stacks: ["Node.js", "Express", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/daniele-senko/API-cadastro-usuarios",
    description:
      "API RESTful para gerenciamento de usuários com operações CRUD, desenvolvida em Node.js e Express, integrada a bancos de dados como MongoDB para armazenamento flexível e escalável de dados.",
    features: [
      "Endpoints para Create, Read, Update e Delete de usuários",
      "Arquitetura modular com rotas, controllers e models organizados",
      "Integração com MongoDB (ou outros bancos via drivers/ODM)",
      "Validação de dados e tratamento de erros centralizado",
      "Configuração de middleware para autenticação JWT e CORS",
    ],
    challenges: [
      "Garantir consistência de dados em operações assíncronas",
      "Implementar validações seguras contra injeções e dados malformados",
      "Otimizar queries para balancear performance e escalabilidade",
      "Assegurar segurança em endpoints com middleware de autenticação",
      "Manter compatibilidade com múltiplos bancos de dados",
    ],
  },
  {
    title: "Gerador de Senhas Aleatórias",
    image: "",
    stacks: ["Java", "POO"],
    githubUrl: "https://github.com/daniele-senko/password-generator-java",
    description:
      "Desenvolvi um gerador de senhas seguras em Java para criar senhas aleatórias e robustas, com personalização de comprimento (4 a 64 caracteres) e critérios de complexidade (maiúsculas, minúsculas, números e símbolos), focando em usabilidade e segurança digital.",
    features: [
      "Geração de senhas com tamanho e complexidade customizáveis pelo usuário",
      "Inclusão automática de caracteres especiais, números e letras misturados",
      "Interface intuitiva para configuração rápida das preferências",
      "Código modular e escalável seguindo princípios de Java POO",
    ],
    challenges: [
      "Garantir aleatoriedade segura para evitar padrões previsíveis",
      "Gerenciar combinações de caracteres sem comprometer a performance",
      "Balancear simplicidade de uso com requisitos complexos de segurança",
      "Validar entradas do usuário para evitar configurações inválidas",
    ],
  },
  {
    title: "ReadMe",
    image: "src/assets/images/ReadME.jpg",
    stacks: ["Figma", "UI/UX Design", "Prototipagem", "Design Thinking"],
    githubUrl: "https://www.figma.com/file/NxdXJzpwv9aXbMpvB8oYDl/Projeto-IHC",
    description: "Plataforma literária colaborativa (conceito UI/UX no Figma)",
    features: [
      "Leituras em grupo com discussão em tempo real e capítulos sincronizados",
      "Publicação de histórias próprias e coautoria em resenhas coletivas",
      "Integração com Wattpad, Kindle, Google Drive e outros apps.",
      "Reações ao texto, enquetes e grupos temáticos para debates.",
      "Design intuitivo para centralizar leitura, escrita e interação.",
    ],
    challenges: [
      "Equilibrar interações em tempo real com usabilidade simplificada.",
      "Engajar comunidades diversas em torno de narrativas variadas.",
      "Sincronizar conteúdos de plataformas com estruturas distintas.",
      "Manter a acessibilidade visual sem comprometer recursos avançados.",
    ],
  },
];

const StyledProjects = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  minHeight: "auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

const ProjectCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "15px",
  transition: "transform 0.3s",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const DetailSection = ({
    title,
    items,
  }: {
    title: string;
    items: string[];
  }) => (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
        {items.map((item, index) => (
          <li key={index}>
            <Typography variant="body1" color="text.secondary">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );

  return (
    <StyledProjects id="projects">
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 2, md: 4 },
          pb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          Projetos
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ProjectCard
                variant="outlined"
                sx={{
                  p: { xs: 2, md: 3 },
                  height: { xs: "auto", md: "100%" },
                }}
              >
                <Box
                  sx={{
                    height: { xs: 180, sm: 200, md: 250 },
                    mb: { xs: 2, md: 3 },
                  }}
                >
                  {/* INÍCIO DA ALTERAÇÃO - CONDICIONAL PARA PLACEHOLDER */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <ImagePlaceholder title="Visualização do Código" />
                  )}
                  {/* FIM DA ALTERAÇÃO */}
                </Box>

                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 600,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, fontSize: { xs: "0.875rem", md: "1rem" } }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  sx={{ mb: { xs: 2, md: 3 } }}
                >
                  {project.stacks.map((stack, i) => (
                    <Chip
                      key={i}
                      label={stack}
                      size="small"
                      sx={{
                        bgcolor: "primary.light",
                        color: "primary.contrastText",
                        fontWeight: 500,
                        fontSize: { xs: "0.75rem", md: "0.875rem" },
                      }}
                    />
                  ))}
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    mt: "auto",
                    "& .MuiButton-root": {
                      width: { xs: "100%", sm: "auto" },
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<CodeIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    sx={{
                      flexGrow: 1,
                      py: { xs: 1, md: 1.5 },
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    Ver Código
                  </Button>

                  <Button
                    variant="outlined"
                    endIcon={<OpenInNewIcon />}
                    onClick={() => handleOpen(project)}
                    sx={{
                      flexGrow: 1,
                      py: 1.5,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: "bold",
                      borderWidth: "2px",
                      "&:hover": {
                        borderWidth: "2px",
                      },
                    }}
                  >
                    Detalhes
                  </Button>
                </Stack>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(3px)",
            p: 2,
          }}
        >
          <Paper
            sx={{
              width: { xs: "95%", sm: "90%" },
              maxWidth: 800,
              maxHeight: { xs: "85vh", sm: "90vh" },
              overflowY: "auto",
              p: { xs: 2, sm: 4 },
              position: "relative",
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: "12px",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: "text.secondary",
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedProject && (
              <>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {selectedProject.title}
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  {selectedProject.description}
                </Typography>

                <DetailSection
                  title="Funcionalidades Principais"
                  items={selectedProject.features}
                />
                <DetailSection
                  title="Desafios Técnicos"
                  items={selectedProject.challenges}
                />

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Tecnologias Utilizadas
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {selectedProject.stacks.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.contrastText",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <Button
                    variant="contained"
                    startIcon={<CodeIcon />}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    sx={{
                      px: 6,
                      py: 1.5,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Acessar Repositório
                  </Button>
                </Box>
              </>
            )}
          </Paper>
        </Modal>
      </Container>
    </StyledProjects>
  );
}
