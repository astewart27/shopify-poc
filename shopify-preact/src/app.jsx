import { LocationProvider, Route, Router } from 'preact-iso'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'

export function App() {
  return (
    <LocationProvider>
      <Router>
        <ProductList path="/store" />
        <ProductDetail path="/store/product/:id" />
      </Router>
    </LocationProvider>
  )
}