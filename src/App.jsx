import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import WaitListEmbed from './components/WaitListEmbed'
// import './App.css'

const queryClient = new QueryClient()
const theme = createTheme({
  palette: {
    primary: {
      main: '#111',
      second: '#e9ecef',
      third: '#f2f2f2',
      bg: '#fcfcfc',
      bg2: '#f4f4f4',
      black: "#000",
    },
    text: {
      regular: "#f6f6f6",
      second: '#211A1E',
      gray: '#364153',
      darkGray: '#343a40',
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<p>Landing page</p>} />
            <Route path="/waitlist" element={<WaitListEmbed />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
