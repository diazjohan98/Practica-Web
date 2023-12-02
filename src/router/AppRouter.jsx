import { Navigate, Route, Routes } from "react-router-dom"
import { Diaz } from "../auth/pages/Diaz"
import { Rojas } from "../auth/pages/Rojas"
import { AppLaunche } from "../auth/pages/AppLaunche"
import { Error404 } from "../auth/pages/Error404"

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="appLaunche" element={<AppLaunche />} />
        <Route path="diaz" element={<Diaz />} />
        <Route path="rojas" element={<Rojas />} />
        <Route path="*" element={<Error404 />} />

        <Route path='/' element={<Navigate to="/appLaunche" />} />

      </Routes>
    </div>
  )
}
