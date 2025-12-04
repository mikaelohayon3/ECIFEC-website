'use client';
import { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by error boundary:', error);
    }
  }, [error]);

  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {/* Error Icon */}
          <Box
            sx={{
              display: 'inline-flex',
              p: 3,
              borderRadius: '50%',
              backgroundColor: 'rgba(211, 47, 47, 0.1)',
              mb: 3,
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: { xs: '4rem', md: '6rem' },
                color: 'error.main',
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: 'error.main',
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Une erreur est survenue
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '1.15rem',
              mb: 2,
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Nous sommes désolés, une erreur inattendue s'est produite. 
            Veuillez réessayer ou retourner à la page d'accueil.
          </Typography>

          {/* Error message in development */}
          {process.env.NODE_ENV === 'development' && error?.message && (
            <Box
              sx={{
                mt: 3,
                p: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'monospace',
                  color: 'error.dark',
                  wordBreak: 'break-word',
                }}
              >
                {error.message}
              </Typography>
            </Box>
          )}

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 5,
            }}
          >
            <Button
              onClick={() => reset()}
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<RefreshIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 50,
              }}
            >
              Réessayer
            </Button>

            <Button
              component={Link}
              href="/"
              variant="outlined"
              color="primary"
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
          </Box>

          {/* Contact Info */}
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', mb: 2 }}
            >
              Si le problème persiste, n'hésitez pas à nous contacter :
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Typography variant="body2" sx={{ color: 'primary.main' }}>
                📞 01 34 04 35 05
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                |
              </Typography>
              <Typography variant="body2" sx={{ color: 'primary.main' }}>
                ✉️ expert-comptable@ecifec95.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
