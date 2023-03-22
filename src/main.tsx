import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Contexts
import { ProductProvider } from './contexts/ProductContext'
import { SidebarProvider } from './contexts/SidebarContext'
import { CartProvider } from './contexts/CartContext'

// Styles
import { GlobalStyle } from './styles.global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        <GlobalStyle />
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
