import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerNav } from "../components/nav/CustomerNav.jsx"
import { ArtList } from "../components/art/ArtList.jsx"
import { UserDetails } from "../components/profile/ProfileDetails.jsx"
import { ArtDetail } from "../components/art/ArtDetail.jsx"

export const CustomerViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <CustomerNav />
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

                <Route path="profile"
                    element={<UserDetails currentUser={currentUser} />} />

            </Route>
        </Routes>
    )
}