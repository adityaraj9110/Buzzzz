import { Divider, Stack, TextField, styled } from '@mui/material'

export const StackStyled = styled(Stack)(({ theme: { palette } }) => ({
  backgroundColor: palette.neutral.black,
  marginTop: '100px ',
  gap: '50px',
  padding: '50px 70px 70px 70px',
}))

export const TopViewWrapperStyled = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
})

export const SubscribeStyled = styled('div')({
  display: 'flex',
  gap: '6px',
})

export const TextFieldStyled = styled(TextField)(({ theme: { palette } }) => ({
  border: '130px',
  ['.MuiInputBase-root']: {
    borderRadius: '130px',
    color: palette.neutral[500],
    background: palette.accent[1000],
    border: 'none !important',
  },
  ['& .MuiInputBase-root:focus']: {
    border: 'unset',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
}))

export const NavigationWrapperStyled = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

export const StackWrapperStyled = styled('div')({
  display: 'flex',
  minWidth: '350px',
  justifyContent: 'space-between',
})

export const DividerStyled = styled(Divider)(({ theme: { palette } }) => ({
  backgroundColor: palette.neutral.white,
  color: palette.neutral.white,
}))
