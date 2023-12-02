import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './router/AppRouter'

export const AppPortafolio = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
