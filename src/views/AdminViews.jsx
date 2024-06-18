import { Outlet, Route, Routes } from "react-router-dom"
import { AdminNav } from "../components/nav/AdminNav.jsx"
import { ArtList } from "../components/art/ArtList.jsx"
import { ArtSoldList } from "../components/art/ArtSoldList.jsx"
import { NewPieceForm } from "../components/forms/newPieceForm.jsx"
import { UserDetails } from "../components/profile/ProfileDetails.jsx"
import { ArtDetail } from "../components/art/ArtDetail.jsx"

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
                <Route index element={<ArtList />} />
                
                <Route path="all">
                    <Route index
                        element={<ArtList />} />
                    <Route path=":artPieceId" element={<ArtDetail />} />
                </Route>
                <Route path="sold">
                    <Route index
                        element={<ArtSoldList />} />
                </Route>
                <Route path="new">
                    <Route index
                        element={<NewPieceForm />} />
                </Route>

                <Route path="profile"
                    element={<UserDetails currentUser={currentUser} />} />

            </Route>
        </Routes>
    )
}