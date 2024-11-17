import { Paper, styled } from '@mui/material'

export const PaperStyled = styled(Paper)(
  ({
    theme: {
      palette: {
        state: { hover },
      },
    },
  }) => ({
    maxWidth: '410px',
    padding: '2.5rem 0.875rem',
    alignItems: 'center',
    gap: '20px',
    display: 'flex',
    flexDirection: 'column',
    ['&:hover']: {
      backgroundColor: hover,
    },
  })
)
