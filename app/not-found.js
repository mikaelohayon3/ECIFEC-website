'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {/* 404 Number */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '6rem', md: '10rem' },
              fontWeight: 900,
              background: 'linear-gradient(135deg, #043033 0%, #0a5a5f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
              lineHeight: 1,
            }}
          >
            404
          </Typography>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Page non trouvée
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.15rem',
              mb: 5,
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Vous pouvez retourner à l'accueil ou explorer nos services.
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mb: 6,
            }}
          >
            <Button
              component={Link}
              href="/"
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<HomeIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 50,
              }}
            >
              Retour à l'accueil
            </Button>

            <Button
              component={Link}
              href="/services"
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<SearchIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 50,
              }}
            >
              Nos services
            </Button>

            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<ContactSupportIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 50,
              }}
            >
              Nous contacter
            </Button>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              pt: 4,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              Liens utiles :
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/secteurs" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { color: 'secondary.main' },
                  }}
                >
                  Nos secteurs
                </Typography>
              </Link>
              <Link href="/cabinet" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { color: 'secondary.main' },
                  }}
                >
                  Notre cabinet
                </Typography>
              </Link>
              <Link href="/equipe" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { color: 'secondary.main' },
                  }}
                >
                  Notre équipe
                </Typography>
              </Link>
              <Link href="/faq" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                    '&:hover': { color: 'secondary.main' },
                  }}
                >
                  FAQ
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
