import './App.css'
import { Container, Stack, Typography } from '@mui/material'
import { JavaScripLoco } from './JavaScriptLogo'

function App () {
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
          <JavaScripLoco />
          <Typography variant='h2' component='h1'>
            JavaScript Quiz
          </Typography>
        </Stack>
      </Container>
    </main>
  )
}

export default App
