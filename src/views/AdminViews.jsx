import { Outlet, Route, Routes } from "react-router-dom"
import { AdminNav } from "../components/nav/AdminNav.jsx"
import { ArtList } from "../components/art/ArtList.jsx"
import { NewPieceForm } from "../components/forms/NewPieceForm.jsx"
import { UserDetails } from "../components/profile/ProfileDetails.jsx"
import { ArtDetail } from "../components/art/ArtDetail.jsx"
import { EditPieceForm } from "../components/forms/EditPieceForm.jsx"
import { ArtListCarousel } from "../components/art/ArtListCarousel.jsx"
import { ArtSoldList } from "../components/sold/ArtSoldList.jsx"

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
                <Route index element={<ArtListCarousel currentUser={currentUser} />} />

                <Route path="all">
                    <Route index
                        element={<ArtList currentUser={currentUser} />} />
                    <Route path=":artPieceId" 
                        element={<ArtDetail currentUser={currentUser} />} />
                    <Route path="edit/:artPieceId" 
                        element={<EditPieceForm currentUser={currentUser} /> } />
                </Route>
                <Route path="sold">
                    <Route index
                        element={<ArtSoldList currentUser={currentUser} />} />
                </Route>
                <Route path="new">
                    <Route index
                        element={<NewPieceForm currentUser={currentUser} />} />
                </Route>

                <Route path="profile"
                    element={<UserDetails currentUser={currentUser} />} />

            </Route>
        </Routes>
    )
}