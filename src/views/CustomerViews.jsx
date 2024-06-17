import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { UserNav } from "../components/nav/CustomerNav.jsx"
import { ArtList } from "../components/art/ArtList.jsx"

export const UserViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <UserNav />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />

                <Route path="all">
                    <Route index
                        element={<ArtList />} />
                </Route>

            </Route>
        </Routes>
    )
}