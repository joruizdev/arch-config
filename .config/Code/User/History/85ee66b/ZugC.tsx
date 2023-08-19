import './App.css'
import { Container , Stack, typography } from '@mui/material'
import { JavaScripLoco } from './JavaScriptLogo'

function App () {
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <JavaScripLoco />
        JavaScript Quiz
        </Stack>
      </Container>
    </main>
  )
}

export default App
