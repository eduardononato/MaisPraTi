import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductForm from './challengeProduct/ProductForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductForm />
  </StrictMode>,
)
