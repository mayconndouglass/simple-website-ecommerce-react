import { BrowserRouter } from 'react-router-dom'

// Routes
import { Router } from './routes'

/* components */
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Router />

      <Sidebar />
      <Footer />
    </BrowserRouter>
  )
}
