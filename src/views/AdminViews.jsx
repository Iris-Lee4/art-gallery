import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { AdminNav } from "../components/nav/AdminNav.jsx"
import { ArtList } from "../components/art/ArtList.jsx"
import { ArtSoldList } from "../components/art/ArtSoldList.jsx"
import { NewPieceForm } from "../components/forms/newPieceForm.jsx"

export const AdminViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <AdminNav />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />

                <Route path="all">
                    <Route index
                        element={<ArtList />} />
                </Route>
                <Route path="sold">
                    <Route index
                        element={<ArtSoldList />} />
                </Route>
                <Route path="new">
                    <Route index
                        element={<NewPieceForm />} />
                </Route>

            </Route>
        </Routes>
    )
}