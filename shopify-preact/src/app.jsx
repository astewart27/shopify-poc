import { LocationProvider, Router } from 'preact-iso'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'

export function App() {
  return (
    <LocationProvider>
      <Router>
        <ProductList path="/products" />
        <ProductDetail path="/products/product/:id" />
      </Router>
    </LocationProvider>
  )
}